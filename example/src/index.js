/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '../../components';
// import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true

class MySection extends React.Component {
  componentDidMount() {
    console.log("mounted props", this.props);
  }

  render() {
    return (
      <div className="section">
        <h3>{this.props.content}</h3>
      </div>
    );
  }
}

const fullpageOptions = {
  sectionsColor: ["#282c34", "#ff5f45", "#0798ec"]
};

const FullpageWrapper = () => (
  <ReactFullpage
    {...fullpageOptions}
    callbacks={["afterRender"]}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

      // TODO: bug that isn't getting the diff between render functions
      // if you comment out this block it will render, however there will be no re-firing of the mount cycle for <MySection/>
      // will fix ASAP

      if (!state.initialized) {
        return (
          <MySection fullpageApi={fullpageApi} content={"Loading..."} />
        );
      }

      return (
        <div>
          <MySection fullpageApi={fullpageApi} content={"Slide down!"} />
          <MySection fullpageApi={fullpageApi} content={"Slide up!"} />
        </div>
      );
    }}
  />
);

ReactDOM.render(<FullpageWrapper />, document.getElementById("react-root"));
