/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom';

import styles from './styles.scss'; // eslint-disable-line no-unused-vars
import ReactFullpage from '../components/ReactFullpage';

const fullpageOptions = {
  licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
  anchors: ['firstPage', 'secondPage', 'thirdPage'],
  callbacks: ['onLeave'],
};

const FullpageWrapper = fullpageProps => (
  <ReactFullpage
    {...fullpageProps}
    render={({ state, fullpageApi }) => {
      console.log('render prop change', state); // eslint-disable-line no-console

      return (
        <div id="fullpage-wrapper">
          <div id="first-section" className="section turquoise">
            <p>Section 1 (welcome to fullpage.js)</p>
            <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button>
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
  />
);

ReactDOM.render(
  <FullpageWrapper {...fullpageOptions} />,
  document.getElementById('react-root'),
);

export default FullpageWrapper;
