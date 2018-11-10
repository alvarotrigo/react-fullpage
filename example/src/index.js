/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '../../components';

import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true

class Fullpage extends React.Component {
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
            <ReactFullpage.Wrapper>
              <div className="section">
                <h3>Section 1</h3>
                <button onClick={() => fullpageApi.moveSectionDown()}>
                  Move down
                </button>
              </div>
              <div className="section">
                <div className="slide"> Slide 1 </div>
                <div className="slide"> Slide 2 </div>
                <div className="slide"> Slide 3 </div>
              </div>
              <div className="section">
                <h3>Section 3</h3>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    );
  }
}

ReactDOM.render(<Fullpage />, document.getElementById('react-root'));
