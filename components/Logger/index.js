export default (debug, compName) => {
  return debug
    ? (...args) => console.log(...[`<${compName}/> Debug Log: `, ...args])
    : () => {};
};
