/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */

import React from 'react';

// NOTE: SSR support
class ReactFullpageShell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="fullpage">
        {/* prettier-ignore */}
        {this.props.render(this)}
      </div>
    );
  }
}

export default ReactFullpageShell;
