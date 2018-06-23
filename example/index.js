/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom';

import fp from '../components/ReactFullpage/fullpage';
import fpStyles from '../components/ReactFullpage/fullpage.css'; // eslint-disable-line no-unused-vars
import styles from './styles.scss'; // eslint-disable-line no-unused-vars
import ReactFullpage from '../components/ReactFullpage';

const fullpageOptions = {
  fp,
  anchors: [
    'firstPage', 'secondPage', 'thirdPage',
  ],
  callbacks: ['onLeave'],
};

let fullpageApi; // NOTE: this will become available once the render prop fires

const FullpageWrapper = fullpageProps => (<ReactFullpage
  {...fullpageProps}
  render={({ state }) => {
  console.log('render prop change', state);
  if (!fullpageApi) {
    ({ fullpageApi } = state);
  }
  return (
    <div>
      <div className="section turquoise">
        <p>Section 1 (welcome to fullpage.js)</p>
        <button onClick={() => fullpageApi.moveSectionDown()}>Click me to move down</button>
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
/>);

ReactDOM.render(<FullpageWrapper {...fullpageOptions} />, document.getElementById('react-root'));
