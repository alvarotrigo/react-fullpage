/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */

import React from 'react';

const isFunc = val => typeof val === 'function';
const callbacks = [
  'afterLoad',
  'onLeave',
  'afterRender',
  'afterResize',
  'afterResponsive',
  'afterSlideLoad',
  'onSlideLeave',
];

class ReactFullpage extends React.Component {
  constructor(props) {
    super(props);
    const { fp, render } = this.props;

    if (!fp || !fp.initialize) {
      throw new Error('must provide fp prop (fullpage.js library) to <ReactFullage />');
    }

    if (!isFunc(render)) {
      throw new Error('must provide render prop to <ReactFullpage />');
    }

    /**
     * @property {object}  state
     * @property {number}  state.index
     * @property {number}  state.nextIndex
     * @property {string}  state.direction
     * @property {string}  state.anchorLink
     *
     * @property {number}  state.slideIndex
     * @property {number}  state.nextSlideIndex
     * @property {string}  state.slideAnchor
     *
     * @property {boolean} state.isResponsive
     *
     * @property {number}  state.callback            - The latest callback event
     * @property {number}  state.callbackParameters  - Formatted parameters the callback received (Object and Array options available)
     */
    this.state = {};
    this.mapMethods();
  }

  componentDidMount() {
    const {
      fp,
      callbacks: cbs = [],
    } = this.props;

    const registered = callbacks.filter(key => !!cbs.find(cb => cb === key));
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

    fp.initialize('#fullpage', finalOpts);
  }

  mapMethods() {
    const { fp, responsiveSlides } = this.props;

    // NOTE: remapping methods https://github.com/alvarotrigo/fullPage.js#methods
    [
      'moveSectionUp',
      'moveSectionDown',
      'moveTo',
      'silentMoveTo',
      'moveSlideRight',
      'moveSlideLeft',
      'setAutoScrolling',
      'setFitToSection',
      'fitToSection',
      'setLockAnchors',
      'setAllowScrolling',
      'setKeyboardScrolling',
      'setRecordHistory',
      'setScrollingSpeed',
      'destroy',
      'reBuild',
      'setResponsive',
    ].forEach(method => ReactFullpage[method] = fp[method]); // eslint-disable-line

    if (responsiveSlides) {
      ['toSections', 'toSlides'].forEach(method => ReactFullpage.responsiveSlides[method] = fp.responsiveSlides[method]); // eslint-disable-line
    }
  }

  update(lastEvent, ...args) {
    let state = {
      ...this.state,
    };

    const makeState = (callbackParameters) => {
      const { asObject } = callbackParameters;
      const flattened = {
        ...asObject,
      };
      return {
        ...state,
        ...flattened,
        callback: lastEvent,
        callbackParameters,
      };
    };

    const fromArgs = argList => argList.reduce((result, key, i) => {
      const value = args[i];
      result.asObject[key] = value; // eslint-disable-line
      result
        .asArray
        .push(value);
      return result;
    }, {
      asObject: {},
      asArray: [],
    });

    // NOTE: remapping callback args
    // https://github.com/alvarotrigo/fullPage.js#callbacks
    switch (lastEvent) {
      case 'afterLoad':
        state = makeState(fromArgs(['anchorLink', 'index']));
        break;

      case 'onLeave':
        state = makeState(fromArgs(['index', 'nextIndex', 'direction']));
        break;

      case 'afterResponsive':
        state = makeState(fromArgs(['isResponsive']));
        break;

      case 'afterSlideLoad':
        state = makeState(fromArgs(['anchorLink', 'index', 'slideAnchor', 'slideIndex']));
        break;

      case 'onSlideLeave':
        state = makeState(fromArgs(['anchorLink', 'index', 'slideIndex', 'direction', 'nextSlideIndex']));
        break;

      default:
        break;
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
