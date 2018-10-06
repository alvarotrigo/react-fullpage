/* eslint-disable */
import Wrapper from './Wrapper';

let exported;

if (typeof window !== 'undefined') {
  exported = require('./ReactFullpage').default;
} else {
  exported = require('./ReactFullpageShell').default;
}

exported.Wrapper = Wrapper;

export default exported;
