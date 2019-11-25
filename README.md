# react-fullpage

![preview](https://raw.githubusercontent.com/alvarotrigo/react-fullpage/master/assets/images/react-fullpage-logo.png)

<p align="center">Official React wrapper for the <a target="_blank" href="https://github.com/alvarotrigo/fullPage.js/">fullpage.js library</a></p>

<p align="center">
  <img src="https://img.shields.io/badge/react--fullpage-v0.1.17-brightgreen.svg" alt="react-fullpage version" />
</p>

- [Demo online](https://alvarotrigo.com/react-fullpage/) | [CodeSandbox](https://codesandbox.io/s/m34yq5q0qx)
- [fullpage.js Extensions](https://alvarotrigo.com/fullPage/extensions/)
- Brought by [@imac2](https://twitter.com/imac2) thanks to [Michael Walker](https://github.com/cmswalker).

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Samsung | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| IE11, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions

## Table of Contents

- [Installation](https://github.com/alvarotrigo/react-fullpage#installation)
- [License](https://github.com/alvarotrigo/react-fullpage#license)
- [Usage](https://github.com/alvarotrigo/react-fullpage#usage)
- [Examples](https://github.com/alvarotrigo/react-fullpage#examples)
- [State](https://github.com/alvarotrigo/react-fullpage#state)
- [Props](https://github.com/alvarotrigo/react-fullpage#props)
- [Methods](https://github.com/alvarotrigo/react-fullpage#methods)
- [Callbacks](https://github.com/alvarotrigo/react-fullpage#callbacks)
- [Contributing](https://github.com/alvarotrigo/react-fullpage#contributing)
- [Resources](https://github.com/alvarotrigo/react-fullpage#resources)

## Installation

```sh
npm install @fullpage/react-fullpage
```

This will install the wrapper as well as [fullpage.js](https://github.com/alvarotrigo/fullPage.js/)

## License

### Non open source license

If you want to use react-fullpage to develop non open sourced sites, themes, projects, and applications, the Commercial license is the appropriate license. With this option, your source code is kept proprietary. Which means, you won't have to change your whole application's source code to an open source license. [Purchase a Fullpage Commercial License](https://alvarotrigo.com/fullPage/pricing/).

### Open source license

If you are creating an open source application under a license compatible with the [GNU GPL license v3](https://www.gnu.org/licenses/gpl-3.0.html), you may use fullPage under the terms of the GPLv3.

**The credit comments in the JavaScript and CSS files should be kept intact** (even after combination or minification)

[Read more about fullPage's license](https://alvarotrigo.com/fullPage/pricing/).

## Usage

This wrapper creates a `<ReactFullpage />` component. It exposes a render-prop API so markup can remain the same across fullpage.js libraries. The render prop accepts 1 parameter in its callback which contains the component's react properties state, context, etc.

## UMD

A umd bundle is available for those without a build step

```js
import ReactFullpage from '@fullpage/react-fullpage-umd'; // will return static version on server and "live" version on client
```

## Server Side Rendering

SSR is supported however the server-rendered html will not be styled, this is because window must be present in order to properly set height + width of slides. So long as you rehydrate your fullpage component in the browser environment, regular styles will be applied.

When using SSR or a framework such as next.js, the component adjusts itself dynamically according to the presence of `window`

```js
import ReactFullpage from '@fullpage/react-fullpage'; // will return static version on server and "live" version on client
```

SSR Examples:
You can find a [Gatsby](https://github.com/alvarotrigo/react-fullpage/tree/master/examples/gatsby/) and a [Next.js](https://github.com/alvarotrigo/react-fullpage/tree/master/examples/next/) examples in the ["examples" folder](https://github.com/alvarotrigo/react-fullpage/tree/master/examples). But here you have others too:
[gatsby](https://github.com/cmswalker/gatsby_react-fullPage_Invariant-Violation-130)
[next.js](https://github.com/cmswalker/react-fullpage-next-example)

## Examples

In-depth examples can be found [here](https://github.com/alvarotrigo/react-fullpage/tree/master/examples). You can start with the [React Example](https://github.com/alvarotrigo/react-fullpage/tree/master/examples/react).

Quickstart Example:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <p>Section 1 (welcome to fullpage.js)</p>
            <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button>
          </div>
          <div className="section">
            <p>Section 2</p>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

ReactDOM.render(<Fullpage />, document.getElementById('react-root'));
```

Fullpage.js Extension Example:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';

// NOTE: if using fullpage extensions/plugins put them here and pass it as props
const pluginWrapper = () => {
  require('./statics/fullpage.scrollHorizontally.min');
};

const Fullpage = () => (
  <ReactFullpage
    pluginWrapper = {pluginWrapper}

    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */
    scrollHorizontally = {true}  /* Because we are using the extension */
    scrollHorizontallyKey = {'YOUR KEY HERE'}

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <p>Section 1 (welcome to fullpage.js)</p>
            <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button>
          </div>
          <div className="section">
            <p>Section 2</p>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

ReactDOM.render(<Fullpage />, document.getElementById('react-root'));
```

Notice that when using any [fullPage.js extension](https://alvarotrigo.com/fullPage/extensions/) you'll pass the `pluginWrapper` function prop to include the file for those features before the `react-fullpage` component mounted.  

## State

The wrapper maintains state in accordance to the latest version of fullpage.js [callbacks](https://github.com/alvarotrigo/fullPage.js#callbacks)

The most recent callback event that triggered a state change will be available as `state.lastEvent`

_NOTE: if the v2 prop is passed, state will be mapped to v2 [callbacks](https://github.com/alvarotrigo/fullPage.js/tree/v.2.9.7#callbacks)_

## Props

You can use any [options](https://github.com/alvarotrigo/fullPage.js#options) supported by fullPage.js library as react props.

Props object can contain standard [options](https://github.com/alvarotrigo/fullPage.js#options) as well as fullPage.js [callbacks](https://github.com/alvarotrigo/fullPage.js#callbacks).

[Example](https://codesandbox.io/s/8lpo68lp28)

More on callbacks [here](https://github.com/alvarotrigo/react-fullpage#callbacks)

## Methods

fullPage.js contains many [methods](https://github.com/alvarotrigo/fullPage.js#methods).
You can use any of them. These are made available as properties on the imported `fullpage.js` library once the first render has occured.

## Callbacks

Each callback name passed to the component will maintain state itself and this will be reflected via the [render prop](#usage)
Callback parameters and the latest callback fired by fullpage.js will be reflected in [state](#state).

## Styles

All fullpage.js styles are loaded from the component via a `<style/>` tag created with javascript. To override fullpage.js styles you must match specificity. Example [here](https://codesandbox.io/s/z2q912835l) in the `overrides.css` file

## Contributing

Found an issue? Have an idea? Check out the [Contributing](https://github.com/alvarotrigo/react-fullpage/blob/master/CONTRIBUTING.md) guide and open a PR

## Resources

- [Wordpress theme](https://alvarotrigo.com/fullPage/utils/wordpress.html)
- [CSS Easing Animation Tool - Matthew Lein](http://matthewlein.com/ceaser/) (useful to define the `easingcss3` value)
- [fullPage.js jsDelivr CDN](http://www.jsdelivr.com/#!jquery.fullpage)
