/*!
 * react-fullpage 0.0.6
 * https://github.com/alvarotrigo/react-fullpage
 * @license https://github.com/alvarotrigo/react-fullpage#license
 *
 * Copyright (C) 2018 alvarotrigo.com - A project by Alvaro Trigo
 */

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React from 'react';
import fullpage from 'fullpage.js/dist/fullpage.extensions.min';
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

    this.state = {};
  }

  componentDidMount() {
    const {
      $,
      v2compatible = false,
      callbacks: cbs = [],
    } = this.props;

    const registered = fullpageCallbacks.filter(key => !!cbs.find(cb => cb === key));
    const listeners = registered.reduce((result, key) => {
      result[key] = (...args) => { // eslint-disable-line no-param-reassign
        const newArgs = [
          key, ...args,
        ];

        this.update(...newArgs);
      };

      return result;
    }, {});

    const finalOpts = {
      ...this.props,
      ...listeners,
    };

    if (v2compatible) {
      if (!$ || $ instanceof window.jQuery === false) {
        throw new Error('Must provide $ (jQuery) as a prop if using v2 API');
      }

      $(document).ready(() => { // eslint-disable-line
        $('#fullpage').fullpage(finalOpts);
      });
    } else {
      const Fullpage = fullpage;
      new Fullpage('#fullpage', finalOpts); // eslint-disable-line
      this.markInitialized();
    }
  }

  markInitialized() {
    this.fullpageApi = window.fullpage_api;
    this.setState({ initialized: true });
  }

  update(lastEvent, ...args) {
    const {
      v2compatible = false,
    } = this.props;

    let state = {
      ...this.state,
    };

    const makeState = callbackParameters => ({
      ...state,
      ...callbackParameters,
      callback: lastEvent,
    });

    const fromArgs = argList => argList.reduce((result, key, i) => {
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
          state = makeState(fromArgs(['anchorLink', 'index', 'slideIndex', 'direction', 'nextSlideIndex']));
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
          state = makeState(fromArgs(['section', 'origin', 'slideIndex', 'destination', 'direction']));
          break;

        default:
          break;
      }
    }

    this.setState(state);
  }

  render() {
    return (
      <div id="fullpage">
        {/* prettier-ignore */}
        {this
          .props
          .render(this)}
      </div>
    );
  }
}

export default ReactFullpage;
