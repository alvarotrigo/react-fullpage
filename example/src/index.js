/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';

const fullpageOptions = {
  anchors: ['firstPage', 'secondPage', 'thirdPage'],
  sectionsColor: ['#282c34', '#ff5f45', '#0798ec'],
  callbacks: ['onLeave']
};

const FullpageWrapper = fullpageProps => (
  <ReactFullpage
    {...fullpageProps}
    render={({ state, fullpageApi }) => {
      console.log('render prop change', state); // eslint-disable-line no-console

      return (
        <div id="fullpage-wrapper">
          <div className="section section1">
            <h3>Section 1</h3>
            <button onClick={() => fullpageApi.moveSectionDown()}>
              Move down
            </button>
          </div>
          <div className="section">
            <div className="slide">
              <h3>Slide 2.1</h3>
            </div>
            <div className="slide">
              <h3>Slide 2.2</h3>
            </div>
            <div className="slide">
              <h3>Slide 2.3</h3>
            </div>
          </div>
          <div className="section">
            <h3>Section 3</h3>
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
