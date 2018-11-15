/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React from 'react';
import Fullpage from 'fullpage.js/dist/fullpage.extensions.min';
import fullpageStyles from 'fullpage.js/dist/fullpage.min.css'; // eslint-disable-line no-unused-vars

const isFunc = val => typeof val === 'function';
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
    const { render } = this.props;

    if (!isFunc(render)) {
      throw new Error('must provide render prop to <ReactFullpage />');
    }

    this.state = {
      initialized: false,
    };
  }

  componentDidMount() {
    const opts = this.buildOptions();

    if (Fullpage) {
      this.init(opts);
      this.markInitialized();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const newSectionCount = this.getSectionCount();
    const newSlideCount = this.getSlideCount();
    const { sectionCount, slideCount } = this.state;

    /* TODO: add a list of fullpage.js specific props to subscribe too
      similar to how callbacks are handled)
    */

    if (this.props.sectionsColor !== prevProps.sectionsColor) {
      console.log('rebuilding due to a change in fullpage.js props');
      // NOTE: if fullpage props have changed we need to rebuild
      this.destroy();
      this.init(this.buildOptions());
      return;
    }

    if (sectionCount === newSectionCount && slideCount === newSlideCount) {
      return;
    }

    console.log('rebuilding due to a change in fullpage.js sections/slides');
    // NOTE: if sections have changed we need to rebuild
    this.destroy();
    this.init(this.buildOptions());
  }

  componentWillUnmount() {
    this.destroy();
  }

  getSectionCount() {
    const { sectionSelector = '.section' } = this.props;
    return document
      .querySelectorAll(sectionSelector)
      .length;
  }

  getSlideCount() {
    const { slideSelector = '.slide' } = this.props;
    return document
      .querySelectorAll(slideSelector)
      .length;
  }

  init(opts) {
    new Fullpage('#fullpage', opts); // eslint-disable-line
    this.fullpageApi = window.fullpage_api;
    this.fpUtils = window.fp_utils;
    this.fpEasings = window.fp_easings;
  }

  destroy() {
    // NOTE: need to check for init to support SSR
    if (typeof window !== 'undefined') {
      this
        .fullpageApi
        .destroy('all');
    }
  }

  markInitialized() {
    this.setState({
      initialized: true,
      sectionCount: this.getSectionCount(),
      slideCount: this.getSlideCount(),
    });
  }

  buildOptions() {
    const filterCb = key => !!Object
      .keys(this.props)
      .find(cb => cb === key);
    const registered = fullpageCallbacks.filter(filterCb);
    const listeners = registered.reduce((result, key) => {
      const agg = {
        ...result,
      };
      agg[key] = (...args) => {
        const newArgs = [
          key, ...args,
        ];
        this.update(...newArgs);
      };

      return agg;
    }, {});

    return {
      ...this.props,
      ...listeners,
    };
  }

  update(lastEvent, ...args) {
    let state = {
      ...this.state,
      sectionCount: this.getSectionCount(),
      getSlideCount: this.getSlideCount(),
    };

    const makeState = callbackParameters => ({
      ...state,
      ...callbackParameters,
      lastEvent,
    });

    const fromArgs = argList => argList.reduce((result, key, i) => {
      const value = args[i];
      result[key] = value; // eslint-disable-line
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
        state = makeState(fromArgs(['section', 'origin', 'destination', 'direction']));
        break;

        // On-*
      case 'onLeave':
        state = makeState(fromArgs(['origin', 'destination', 'direction']));
        break;

      case 'onSlideLeave':
        state = makeState(fromArgs(['section', 'origin', 'slideIndex', 'destination', 'direction']));
        break;

      default:
        break;
    }

    this.setState(state, () => {
      this.props[lastEvent](...args);
    });
  }

  render() {
    return (
      <div id="fullpage">
        {this.props.render(this)}
      </div>
    );
  }
}

export default ReactFullpage;
