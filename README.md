Webpack 2 Boilerplate
===========

> Webpack 2 Boilerplate with Babel, SASS, jQuery and lodash on board

# Requirements
You only need <b>node.js</b> pre-installed and you’re good to go. 

If you don’t want to work with jQuery or lodash, just remove it from the node packages and the webpack config.

# Setup
```sh
$ npm install
```

# Development
Run the local webpack-dev-server with livereload and autocompile on [http://localhost:8080/](http://localhost:8080/)
```sh
$ npm run dev
```
# Deployment
Build the current application
```sh
$ npm run build
```

# [webpack](https://webpack.js.org/)
If you're not familiar with webpack, the [webpack-dev-server](https://webpack.js.org/configuration/dev-server/) will serve the static files in your build folder and watch your source files for changes.
When changes are made the bundle will be recompiled. This modified bundle is served from memory at the relative path specified in publicPath.
