Webpack Boilerplate
===========

> Webpack Boilerplate with bower, SASS, jQuery and lodash on board

# Requirements
You only need <b>node.js</b> and <b/>bower</b> pre-installed and you’re good to go. If you don’t want to work with jQuery or lodash, just remove it from the bower config file.

# Setup
```sh
$ sudo npm install
```

```sh
$ bower install
```

# Development
Run the local webpack-dev-server with livereload and autocompile
```sh
$ npm run dev
```
# Deployment
Build the current application
```sh
$ npm run build
```

# [webpack](http://webpack.github.io/docs/)
If you're not familiar with webpack, the [webpack-dev-server](http://webpack.github.io/docs/webpack-dev-server.html) will serve the static files in your build folder and watch your source files for changes.
When changes are made the bundle will be recompiled. This modified bundle is served from memory at the relative path specified in publicPath.
