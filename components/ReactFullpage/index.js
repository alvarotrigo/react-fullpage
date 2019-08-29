/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React from 'react';
import fullpageStyles from 'fullpage.js/dist/fullpage.min.css'; // eslint-disable-line no-unused-vars

import Logger from '../Logger';
import {
  MAIN_SELECTOR,
  ID_SELECTOR,
  DEFAULT_SECTION,
  DEFAULT_SLIDE,
} from '../selectors';

let Fullpage;

const isFunc = val => typeof val === 'function';
const isEqualArray = (firstArr, secondArr) => {
  if (firstArr.length !== secondArr.length) return false;

  return firstArr.find(el => !secondArr.includes(el)) == null;
};
const fullpageCallbacks = [
  'afterLoad',
  'afterRender',
  'afterResize',
  'afterResponsive',
  'afterSlideLoad',

  'onLeave',
  'onSlideLeave',
];

class ReactFullpage extends React.Component {
  constructor(props) {
    super(props);
    const { render, pluginWrapper } = this.props;

    if (!isFunc(render)) {
      throw new Error('must provide render prop to <ReactFullpage />');
    }

    this.log = Logger(this.props.debug, 'ReactFullpage');
    this.log('Building component');

    this.log('Importing vendor files');
    this.importVendors();

    if (pluginWrapper) {
      this.log('Calling plugin wrapper');
      pluginWrapper();
    }

    this.log('Requiring fullpage.js');
    Fullpage = require('fullpage.js/dist/fullpage.extensions.min');

    this.state = {
      initialized: false,
      sectionCount: 0,
      slideCount: 0,
    };
  }

  componentDidMount() {
    const opts = this.buildOptions();
    this.log('React Lifecycle: componentDidMount()');

    if (Fullpage) {
      this.init(opts);
      this.markInitialized();
    }
  }

  componentDidUpdate(prevProps) {
    this.log('React Lifecycle: componentDidUpdate()');
    const newSectionCount = this.getSectionCount();
    const newSlideCount = this.getSlideCount();
    const { sectionCount, slideCount } = this.state;

    // comparing sectionColors array option
    const areSameSectionColors = isEqualArray(prevProps.sectionsColor, this.props.sectionsColor);

    // NOTE: if fullpage props have changed we need to rebuild
    if (!areSameSectionColors) {
      this.log('rebuilding due to a change in fullpage.js props');
      this.reRender();
      return;
    }

    if (sectionCount === newSectionCount && slideCount === newSlideCount) {
      return;
    }

    // NOTE: if sections/slides have changed we need to rebuild
    this.log('rebuilding due to a change in fullpage.js sections/slides');
    this.reRender();
  }

  componentWillUnmount() {
    this.destroy();
  }

  getSectionCount() {
    const { sectionSelector = DEFAULT_SECTION } = this.props;
    const { length } = document.querySelectorAll(sectionSelector);
    return length;
  }

  getSlideCount() {
    const { slideSelector = DEFAULT_SLIDE } = this.props;
    const { length } = document.querySelectorAll(slideSelector);
    return length;
  }

  importVendors() {
    const { scrollOverflow, easing } = this.props;
    if (scrollOverflow) {
      require('fullpage.js/vendors/scrolloverflow.min');
    }
    if (easing) {
      require('fullpage.js/vendors/easings.min');
    }
  }

  init(opts) {
    this.log('Reinitializing fullpage with options', opts);
    new Fullpage(ID_SELECTOR, opts); // eslint-disable-line
    this.fullpageApi = window.fullpage_api;
    this.fpUtils = window.fp_utils;
    this.fpEasings = window.fp_easings;
  }

  destroy() {
    this.log('Destroying fullpage instance');
    this.fullpageApi.destroy('all');
  }

  reRender() {
    this.destroy();
    this.init(this.buildOptions());
  }

  markInitialized() {
    this.log('Marking initialized');
    this.setState({
      initialized: true,
      sectionCount: this.getSectionCount(),
      slideCount: this.getSlideCount(),
    });
  }

  buildOptions() {
    const filterCb = key => !!Object.keys(this.props).find(cb => cb === key);
    const registered = fullpageCallbacks.filter(filterCb);
    const listeners = registered.reduce((result, key) => {
      return {
        ...result,
        [key]: (...args) => {
          return this.update(...[key, ...args]);
        },
      };
    }, {});

    // NOTE: override passed in callbacks w/  wrapped listeners
    const options = {
      ...this.props,
      ...listeners,
    };

    this.log('Building fullpage.js options: ', options);
    return options;
  }

  update(lastEvent, ...args) {
    this.log('Event trigger: ', lastEvent);
    let state = {
      ...this.state,
      sectionCount: this.getSectionCount(),
      slideCount: this.getSlideCount(),
    };

    const makeState = callbackParameters => ({
      ...state,
      ...callbackParameters,
      lastEvent,
    });

    const fromArgs = argList =>
      argList.reduce((result, key, i) => {
        const value = args[i];
                result[key] = value // eslint-disable-line
        return result;
      }, {});

    // NOTE: remapping callback args to v3
    // https://github.com/alvarotrigo/fullPage.js#callbacks
    switch (lastEvent) {
      // After-*
      case 'afterLoad':
        state = makeState(fromArgs(['origin', 'destination', 'direction']));
        break;

      case 'afterResize':
        state = makeState(fromArgs(['']));
        break;

      case 'afterResponsive':
        state = makeState(fromArgs(['isResponsive']));
        break;

      case 'afterSlideLoad':
        state = makeState(
          fromArgs(['section', 'origin', 'destination', 'direction'])
        );
        break;

      // On-*
      case 'onLeave':
        state = makeState(fromArgs(['origin', 'destination', 'direction']));
        break;

      case 'onSlideLeave':
        state = makeState(
          fromArgs([
            'section',
            'origin',
            'slideIndex',
            'destination',
            'direction',
          ])
        );
        break;

      default:
        break;
    }

    const returned = this.props[lastEvent](...args);
    this.log('Called callback: Returning => ', returned);
    this.log('Updating State => ', state);
    this.setState(state);
    return returned;
  }

  render() {
    this.log('<== Rendering ==>');
    return <div id={MAIN_SELECTOR}>{this.props.render(this)}</div>;
  }
}

ReactFullpage.defaultProps = {
  sectionsColor: []
}

export default ReactFullpage;
