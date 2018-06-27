/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom';

// NOTE: everything is the same, we're just using the extensions dependency (inludes fullpage.js) instead of fullpage.js standalone
import fullpage from 'fullpage.js/dist/fullpage.extensions.min';
import fullpageStyles from 'fullpage.js/dist/fullpage.css'; // eslint-disable-line no-unused-vars

import styles from './styles.scss'; // eslint-disable-line no-unused-vars
import ReactFullpageExample from './index';

const fullpageOptions = {
  fullpage,
  anchors: [
    'firstPage', 'secondPage', 'thirdPage',
  ],
  callbacks: ['onLeave'],
};

ReactDOM.render(<ReactFullpageExample {...fullpageOptions} />, document.getElementById('react-root'));
