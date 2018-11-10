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

    this.state = { initialized: false };
  }

  componentDidMount() {
    const { $, v2compatible = false } = this.props;
    const opts = this.buildOptions();

    if (v2compatible) {
      if (!$ || $ instanceof window.jQuery === false) {
        throw new Error('Must provide $ (jQuery) as a prop if using v2 API');
      }

      $(document).ready(() => {
        // eslint-disable-line
        $('#fullpage').fullpage(opts);
      });
    } else if (Fullpage) {
      this.init(opts);
      this.markInitialized();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.initialized === this.state.initialized) {
      return;
    }

    const { props, fpUtils } = this;
    const slideSelector = props.slideSelector || '.slide';
    const sectionSelector = props.sectionSelector || '.section';

    const activeSection = document.querySelector(`${sectionSelector}.active`);
    const activeSectionIndex = activeSection ? fpUtils.index(activeSection): -1;
    const activeSlide = document.querySelector(`${sectionSelector}.active${slideSelector}.active`);
    const activeSlideIndex = activeSlide ? fpUtils.index(activeSlide) : -1;

    this.destroy();

    if (activeSectionIndex > -1) {
      fpUtils.addClass(document.querySelectorAll(sectionSelector)[activeSectionIndex], 'active');
    }

    if (activeSlideIndex > -1) {
      fpUtils.addClass(activeSlide, 'active');
    }

    this.init(this.buildOptions());
  }

  componentWillUnmount() {
    this.destroy();
  }

  init(opts) {
    new Fullpage('#fullpage', opts); // eslint-disable-line
    this.fullpageApi = window.fullpage_api;
    this.fpUtils = window.fp_utils;
    this.fpEasings = window.fp_easings;
  }

  destroy() {
    // NOTE: need to check for init to support SSR
    if (!this.state.initialized) return;

    this.fullpageApi.destroy('all');
  }

  markInitialized() {
    this.setState({ initialized: true });
  }

  buildOptions() {
    const filterCb = key => !!Object.keys(this.props).find(cb => cb === key);
    const registered = fullpageCallbacks.filter(filterCb);
    const listeners = registered.reduce((result, key) => {
      const agg = { ...result };
      agg[key] = (...args) => {
        const newArgs = [key, ...args];
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
    const { v2compatible = false } = this.props;

    let state = {
      ...this.state,
    };

    const makeState = callbackParameters => ({
      ...state,
      ...callbackParameters,
      lastEvent,
    });

    const fromArgs = argList =>
      argList.reduce((result, key, i) => {
        const value = args[i];
        result[key] = value; // eslint-disable-line
        return result;
      }, {});

    // TODO: change all fromArgs to constants After-*
    if (v2compatible) {
      // NOTE: remapping callback args for v2
      // https://github.com/alvarotrigo/fullPage.js#callbacks
      switch (lastEvent) {
        // After-*
        case 'afterLoad':
          state = makeState(fromArgs(['anchorLink', 'index']));
          break;

        case 'afterResponsive':
          state = makeState(fromArgs(['isResponsive']));
          break;

        case 'afterSlideLoad':
          state = makeState(fromArgs(['anchorLink', 'index', 'slideAnchor', 'slideIndex']));
          break;

        // On-*
        case 'onLeave':
          state = makeState(fromArgs(['index', 'nextIndex', 'direction']));
          break;

        case 'onSlideLeave':
          state = makeState(fromArgs([
            'anchorLink',
            'index',
            'slideIndex',
            'direction',
            'nextSlideIndex',
          ]));
          break;

        default:
          break;
      }
    } else {
      // NOTE: remapping callback args to v3
      // https://github.com/alvarotrigo/fullPage.js#callbacks
      switch (lastEvent) {
        // After-*
        case 'afterLoad':
          state = makeState(fromArgs(['origin', 'destination', 'direction']));
          break;

        // TODO: update accoding to new API
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
          state = makeState(fromArgs([
            'section',
            'origin',
            'slideIndex',
            'destination',
            'direction',
          ]));
          break;

        default:
          break;
      }
    }

    this.setState(state, () => {
      this.props[lastEvent](...args);
    });
  }

  render() {
    return (
      <div id="fullpage">
        {this.state.initialized
          ? this.props.render(this)
          : <div className="section fp-section active" />
        }
      </div>
    );
  }
}

export default ReactFullpage;
