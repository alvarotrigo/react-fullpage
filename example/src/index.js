/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '../../components';
import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true

class FullpageWrapper extends React.Component {
  onLeave(origin, destination, direction) {
    // arguments are mapped in order of fullpage.js callback arguments
    // do something with the event
  }

  render() {
    return (
      <ReactFullpage
        anchors={['firstPage', 'secondPage', 'thirdPage']}
        sectionsColor={['#282c34', '#ff5f45', '#0798ec']}
        onLeave={this.onLeave.bind(this)}
        render={({ state, fullpageApi }) => {
          console.log('render prop change', state);

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
  }
}

ReactDOM.render(<FullpageWrapper />, document.getElementById('react-root'));

export default FullpageWrapper;
