# react-fullpage.js
![preview](./assets/images/react-fullpage-logo.png)

<p align="center">Official React wrapper for the <a target="_blank" href=""https://github.com/alvarotrigo/fullPage.js/">fullpage.js library</a></p>

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
npm i fullpage.js react-fullpage.js
```

This will install the wrapper as well as [fullpage.js](https://github.com/alvarotrigo/fullPage.js/)

The fullpage.js library and CSS must be included manually.

The fullpage.js libarary is a required prop for the react wrapper.

The [extensions](https://alvarotrigo.com/fullPage/extensions/) are not bundled by default. You'll need to include these manually. An example can be found [here](https://github.com/alvarotrigo/react-fullpage.js/blob/master/examples/extensionExample)

## Usage

This wrapper creates a <ReactFullpage /> component. It exposes a render-prop API so markup can remain the same across fullpage.js libraries. The render prop accepts 1 parameter in its callback which contains the component's react properties [state](https://github.com/alvarotrigo/fullPage.js#state), context, etc.

## Examples

In-depth examples can be found [here](https://github.com/alvarotrigo/react-fullpage.js/blob/master/examples)

Quickstart Example:

```js
import React from 'react';
import ReactDOM from 'react-dom';

import fullpage from 'fullpage.js/dist/fullpage';
import fullpageStyles from 'fullpage.js/dist/fullpage.css';
import ReactFullpage from 'react-fullpage.js';

const fullpageOptions = {
  fullpage,
  anchors: [
    'firstPage', 'secondPage', 'thirdPage',
  ],
  callbacks: ['onLeave'],
};

let fullpageApi; // NOTE: this will become available once the render prop fires

const FullpageWrapper = fullpageProps => (<ReactFullpage
  {...fullpageProps}
  render={({ state }) => {
    console.log('render prop change', state);

    if (!fullpageApi) {
      ({ fullpageApi } = state);
    }

    return (
      <div>
        <div className="section">
          <p>Section 1 (welcome to fullpage.js)</p>
          <button onClick={() => fullpageApi.moveSectionDown()}>Click me to move down</button>
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
  }}
/>);

ReactDOM.render(<FullpageWrapper {...fullpageOptions} />, document.getElementById('react-root'));
```

## State

The wrapper maintains state in accordance to the latest version of fullpage.js [callbacks](https://github.com/alvarotrigo/fullPage.js#callbacks)

State changes will only trigger for callbacks registered via the callbacks prop

*NOTE: if the v2 prop is passed, state will be mapped to v2 [callbacks](https://github.com/alvarotrigo/fullPage.js/tree/v.2.7.5#callbacks)*

## Props

You can use any [options](https://github.com/alvarotrigo/fullPage.js#options) supported by fullPage.js library.
Pass options object into this wrapper as react props. You can see this in the example below.

Options object can contain simple [options](https://github.com/alvarotrigo/fullPage.js#options) as well as fullPage.js [callbacks](https://github.com/alvarotrigo/fullPage.js#callbacks).

The only difference in API is that callbacks should be an array of strings containing the callback name you'd like to subscribe to.
More on callbacks [here](https://github.com/alvarotrigo/react-fullPage.js#callbacks)

*NOTE: jquery must be passed as a prop ($) if using the v2 API*

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
You can use any of them. These are made available as properties on the imported `fullpage.js` library once the first render has occured.

## Callbacks

As mentioned [above](#options) you can pass callbacks through options object as an array of strings:
Each callback name passed to the component will maintain state itself and this will be reflected via the [render prop](#usage)
Callback parameters and the latest callback fired by fullpage.js will be reflected in [state](#state)

## Contributing

Found an issue? Have an idea? Check out the [Contributing](https://github.com/alvarotrigo/react-fullpage.js/blob/master/CONTRIBUTING.md) guide and open a PR
