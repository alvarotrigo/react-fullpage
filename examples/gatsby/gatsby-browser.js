require('./src/styles/styles.css')


exports.shouldUpdateScroll = ({
    routerProps: { location },
    getSavedScrollPosition
  }) => {
  
    if (location.hash) {
      return false;
    }
  
    return true;
};
  