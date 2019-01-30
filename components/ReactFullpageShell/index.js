/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */

import React from 'react';

import Logger from '../Logger';
import { MAIN_SELECTOR } from '../selectors';

// NOTE: SSR support
class ReactFullpageShell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.log = Logger(this.props.debug, 'ReactFullpageShell');
    this.log('Building component');
  }

  render() {
    return (
      <div id={MAIN_SELECTOR}>
        {/* prettier-ignore */}
        {this.props.render(this)}
      </div>
    );
  }
}

export default ReactFullpageShell;
