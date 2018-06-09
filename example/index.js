/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import styles from './styles.scss'; // eslint-disable-line no-unused-vars
import ReactFullpage from '../components/ReactFullpage';

const fullpageOptions = {
  document,
  $,
  anchors: [
    'firstPage', 'secondPage', 'thirdPage',
  ],
  onLeave(...args) {
    console.log('onLeave', args);
  },
  onSlideLeave(...args) {
    console.log('onSlideLeave', args);
  },
};

ReactDOM.render(
  <ReactFullpage
    {...fullpageOptions}
    render={(...args) => {
      console.log('render prop change', args);
      return (
        <div>
          <div className="section turquoise">
            <p>Section 1</p>
          </div>
          <div className="section">
            <div className="slide blue">
              <p>Slide 1</p>
            </div>
            <div className="slide red">
              <p>Slide 2</p>
            </div>
            <div className="slide yellow">
              <p>Slide 3</p>
            </div>
          </div>
          <div className="section green">
            <p>Section 3</p>
          </div>
        </div>
      );
    }}
    />,
  document.getElementById('react-root'));
