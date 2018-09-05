/* eslint-disable */

let e;

if (typeof window !== 'undefined') {
  e = require('./ReactFullpage').default;
} else {
  e = require('./ReactFullpageShell').default;
}

export default e;
