/* eslint-disable */
import Wrapper from './Wrapper';

export default (() => {
  let exported;

  if (typeof window !== 'undefined') {
    exported = require('./ReactFullpage').default;
  } else {
    // NOTE: SSR support
    exported = require('./ReactFullpageShell').default;
  }

  exported.Wrapper = Wrapper;

  return exported;
})();
