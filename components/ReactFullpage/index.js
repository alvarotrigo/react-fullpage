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

  isReRenderNecessary(prevProps){
    const newSectionCount = this.getSectionCount();
    const newSlideCount = this.getSlideCount();
    const { sectionCount, slideCount } = this.state;
    let isReRenderNecessary =
      sectionCount !== newSectionCount || slideCount !== newSlideCount;

    const propertiesThatNeedReRender = [
      'sectionsColor',
      'navigationTooltips',
      'navigationPosition',
      'navigation',
      'scrollBar',
    ];

    propertiesThatNeedReRender.forEach(property => {
      if (typeof prevProps[property] !== 'undefined') {
        if (Array.isArray(prevProps[property])) {
          isReRenderNecessary =
            isReRenderNecessary ||
            !isEqualArray(prevProps[property], this.props[property]);
        } else {
          isReRenderNecessary =
            isReRenderNecessary || prevProps[property] !== this.props[property];
        }
      }
    });

    return isReRenderNecessary;
  }

  componentDidUpdate(prevProps) {
    this.log('React Lifecycle: componentDidUpdate()');

    // NOTE: if fullpage props have changed we need to rebuild
    if (this.isReRenderNecessary(prevProps)) {
      this.log('rebuilding due to a change in fullpage.js props or num sections/slides');
      this.reRender();
      return;
    }
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
    const { easing, css3 } = this.props;
    if (easing && !css3) {
      require('fullpage.js/vendors/easings.min');
    }
  }

  init(opts) {
    this.log('Reinitializing fullpage with options', opts);
    const originalAnimateAnchor = opts.animateAnchor;
    opts.animateAnchor = false;
    new Fullpage(ID_SELECTOR, opts); // eslint-disable-line
    this.fullpageApi = window.fullpage_api;
    this.fpUtils = window.fp_utils;
    this.fpEasings = window.fp_easings;
    window.fullpage_api.getFullpageData().options.animateAnchor = originalAnimateAnchor;
  }

  destroy() {
    this.log('Destroying fullpage instance');
    this.fullpageApi.destroy('all');
  }

  reRender() {
    const slideSelector = this.props.slideSelector || '.slide';
    const sectionSelector = this.props.sectionSelector || '.section';
    const activeSection = document.querySelector(sectionSelector + '.active');
    const activeSectionIndex = activeSection ? this.fpUtils.index(activeSection) : this.state.destination ? this.state.destination.index - 1 : 0;
    const activeSlide = document.querySelector(sectionSelector + '.active ' + slideSelector + '.active');
    const activeSlideIndex = activeSlide ? this.fpUtils.index(activeSlide) : -1;

    this.destroy();

    if (activeSectionIndex > -1) {
      this.fpUtils.addClass(document.querySelectorAll(sectionSelector)[activeSectionIndex], 'active');
    }
    if (activeSlideIndex > -1) {
      this.fpUtils.addClass(activeSlide, 'active');
    }

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
    let listeners = null;
    if(!this.state.initialized){
      const filterCb = key => !!Object.keys(this.props).find((cb) => {
        return cb === key;
      });
      const registered = fullpageCallbacks.filter(filterCb);

      listeners = registered.reduce((result, key) => {
        return {
          ...result,
          [key]: (...args) => {
            return this.update(...[key, ...args]);
          },
        };
      }, {});
    }

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
