/* eslint-disable */
import Wrapper from './Wrapper'

const windowExists = () => typeof window !== 'undefined';

export default (() => {
    let exported

    if (windowExists()) {
        exported = require('./ReactFullpage').default
    } else {
        // NOTE: SSR support
        exported = require('./ReactFullpageShell').default
    }

    exported.Wrapper = Wrapper

    return exported
})()
