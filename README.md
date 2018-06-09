# react-fullpage.js

![preview](https://alvarotrigo.com/fullPage/react-fullpage/assets/images/react-fullpage-logo.png)

Official React wrapper for the [fullpage.js library](https://github.com/alvarotrigo/fullPage.js/)

## Table of Contents
- [Installation](https://github.com/alvarotrigo/react-fullPage.js#installation)
- [Usage](https://github.com/alvarotrigo/react-fullPage.js#usage)
- [Examples](https://github.com/alvarotrigo/react-fullPage.js#examples)
- [Options](https://github.com/alvarotrigo/react-fullPage.js#options)
- [Methods](https://github.com/alvarotrigo/react-fullPage.js#methods)
- [Callbacks](https://github.com/alvarotrigo/react-fullPage.js#callbacks)
- [License](https://github.com/alvarotrigo/fullPage.js#license)


## Installation

```sh
npm i react-fullpage.js
```

This will install the wrapper as well as [fullpage.js](https://github.com/alvarotrigo/fullPage.js/) as a dependency.
CSS is included by default.
The [extensions](https://alvarotrigo.com/fullPage/extensions/) are not bundled by default. You'll need to include these manually.

## Usage

This wrapper creates a <ReactFullpage /> component , which you can use like other react components. It exposes a render-prop API so markup can remain the same across fullpage.js libraries. The render prop accepts 1 parameter in its callback which contains the component's react properties [state](https://github.com/alvarotrigo/fullPage.js#state), context, etc.

For example:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from 'react-fullpage.js'

const fullpageOptions = {
  anchors: [
    'firstPage', 'secondPage', 'thirdPage',
  ],
  callbacks: ['onLeave'],
};

const FullpageWrapper = (fullpageProps) => {
  return (
    <ReactFullpage {...fullpageProps}
      render={({ state }) => {
        return (
          <div>
            <div className="section">
              <p>Section 1</p>
            </div>
            <div className="section">
              <div className="slide">
                <p>Slide 1</p>
              </div>
              <div className="slide">
                <p>Slide 2</p>
              </div>
              <div className="slide">
                <p>Slide 3</p>
              </div>
            </div>
            <div className="section">
              <p>Section 3</p>
            </div>
          </div>
        );
    }}/>
  );
};

ReactDOM.render(<FullpageWrapper {...fullpageOptions} />, document.getElementById('react-root'));

```

## State

The wrapper maintains the following state:

```js
/**
     * @property {object}  state
     * @property {number}  state.index
     * @property {number}  state.nextIndex
     * @property {string}  state.direction
     * @property {string}  state.anchorLink
     *
     * @property {number}  state.slideIndex
     * @property {number}  state.nextSlideIndex
     * @property {string}  state.slideAnchor
     *
     * @property {boolean} state.isResponsive
     *
     * @property {number}  state.callback            - The latest callback event
     * @property {number}  state.callbackParameters  - Formatted parameters the callback received (Object and Array options available)
     */
```

## Examples

In-depth examples can be found [here](https://github.com/alvarotrigo/react-fullpage.js/blob/master/examples)

## Props

You can use any [options](https://github.com/alvarotrigo/fullPage.js#options) supported by fullPage.js library.
Pass options object into this wrapper as react props. You can see this in the example below.

Options object can contain simple [options](https://github.com/alvarotrigo/fullPage.js#options) as well as fullPage.js [callbacks](https://github.com/alvarotrigo/fullPage.js#callbacks).

The only difference in API is that callbacks should be an array of strings containing the callback name you'd like to subscribe to.
More on callbacks [here](https://github.com/alvarotrigo/react-fullPage.js#callbacks)

```js
import ReactFullpage from 'react-fullpage.js';

const fullpageOptions = {
  anchors: [
    'firstPage', 'secondPage', 'thirdPage',
  ],
  callbacks: ['onLeave'],
};

<ReactFullpage {...fullpageOptions} />;

```

## Methods

fullPage.js contains many [methods](https://github.com/alvarotrigo/fullPage.js#methods).
You can use any of them. These are made available as static properties on the imported `ReactFullpage` component. This component contains all methods which fullPage library provides.

```js
import ReactFullpage from 'react-fullpage.js';
ReactFullpage.moveSectionDown();
```

## Callbacks

As mentioned [above](#options) you can pass callbacks through options object as an array of strings:
Each callback name passed to the component will maintain state itself and this will be reflected via the [render prop](#usage)
Callback parameters and the latest callback fired by fullpage.js will be reflected in [state](#state)

## License
