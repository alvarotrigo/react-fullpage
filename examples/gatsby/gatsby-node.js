exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /@fullpage/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};

/** Example on how to use scrollHorizontally extension 
 * 
exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (stage === 'build-javascript') {
    actions.setWebpackConfig({
      devtool: false,
      exclude: 'fullpage.scrollHorizontally.min.js'
    })
  }
};
*/