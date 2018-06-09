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
  callbacks: ['onLeave'],
};

const FullpageWrapper = (fullpageProps) => {
  return (<ReactFullpage
    {...fullpageProps}
    render={({ state }) => {
    console.log('render prop change', state);
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
  }}/>)
};

ReactDOM.render(<FullpageWrapper {...fullpageOptions} />, document.getElementById('react-root'));
