import React from 'react';
import PropTypes from 'prop-types';

import fp from 'fullpage.js/dist/jquery.fullpage.min.js';
import fpextension from 'fullpage.js/dist/jquery.fullpage.extensions.min';

const isFunc = val => typeof val === 'function';

class ReactFullpage extends React.Component {
  constructor(props) {
    super(props);
    const {
      $,
      render,
      document,
    } = this.props;

    if (!$ || !$.prototype.jquery) {
      throw new Error('must provide jquery instance to fullpage-react');
    }

    if (!isFunc(render)) {
      throw new Error('must provide render prop to fullpage-react');
    }

    this.state = {};
  }

  componentDidMount() {
    const { $, document } = this.props;
    const callbacks = [
      'afterLoad',
      'onLeave',
      'afterRender',
      'afterResize',
      'afterResponsive',
      'afterSlideLoad',
      'onSlideLeave',
    ];
    const registered = callbacks.filter(key => !!this.props[key]);
    const listeners = registered.reduce((result, key) => {
      result[key] = (...args) => { // eslint-disable-line no-param-reassign
        const newArgs = [
          key, ...args,
        ];
        this.props[key](...newArgs);
        this.update(...newArgs);
      };

      return result;
    }, {});

    const finalOpts = {
      ...this.props,
      ...listeners,
    };

    $(document).ready(() => {
      $('#fullpage').fullpage(finalOpts);
      this.mapMethods();
    });
  }

  mapMethods() {
    const { $ } = this.props;
    const { responsiveSlides } = $.fn.fullpage;
    ReactFullpage.responsiveSlides = {};

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
    ].forEach(method => ReactFullpage[method] = $.fn.fullpage[method]); // eslint-disable-line

    if (responsiveSlides) {
      ['toSections', 'toSlides'].forEach(method => ReactFullpage.responsiveSlides[method] = responsiveSlides[method]); // eslint-disable-line
    }
  }

  update(lastEvent, ...args) {
    let state = { ...this.state };
    const makeState = newState => ({ ...state, ...newState });
    const fromArgs = argList => argList.reduce((result, key, i) => {
      result[key] = args[i]; // eslint-disable-line
      return result;
    }, {});

    // NOTE: remapping callback args
    // https://github.com/alvarotrigo/fullPage.js#callbacks
    switch (lastEvent) {
      case 'afterLoad':
        state = makeState(fromArgs(['anchorLink', 'index']));
        break;

      case 'onLeave':
        state = makeState(fromArgs(['index', 'nextIndex', 'direction']));
        break;

      case 'isResponsive':
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
          .render(ReactFullpage, this)}
      </div>
    );
  }
}

export default ReactFullpage;
