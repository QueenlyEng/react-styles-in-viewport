# react-style-in-viewport

[![License][license-image]][license-url]

React HOC which dynamically handles styling using
[Intersection Observer API][io-api-docs]
to determine whether the component enters or exits the viewport. Includes both
a [HOC](#withviewportobserver-higher-order-component) and
[hook](#useintersectionobserver-hook).

## Installation

```sh
npm install react-style-in-viewport
```

## Usage

### `WithViewportObserver` higher order component

Use `WithViewportObserver` to flag for animations and any amount of styles to
only trigger when the component enters the viewport.

```js
import React from 'react';
import { WithViewPortObserver } from 'react-style-in-viewport'

import s from './AnimateComponent.module.css';

const AnimateComponent = () => {
  return (
    <>
      <WithObserver
        falseyClasses={s.fadeOut}
        truthyClasses={[s.fadeIn, s.fontSizeL]}
      >
        <h2>Watch me fade in!</h2>
      </WithObserver>
    </>
  );
};
```

### `useIntersectionObserver` hook

You can utilize the `useIntersectionObserver` hook to more specifically flag
when an element (via a React ref) enters the viewport. This enables custom
logic to be developed.

```js
import React from 'react';
import { useIntersectionObserver } from 'react-style-in-viewport';

const TextComponent = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0, // Optional threshold
  });

  return (
    <div ref={elementRef}>
      <p>{`Text is visible in the viewport: ${isIntersecting}.`}</p>
    </div>
  );
};
```

## Contributions

If you encounter any issues please open a ticket on the repo. You may
additionally propose fixes with a linked Pull Request.

## To Do

- Adding default styling
- Fully migrate to TypeScript
- Minification
- Unit testing
- Expand documentation
  - Contribution guidelines
  - REPL examples
  - Properties and types

[io-api-docs]: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
[license-image]: http://img.shields.io/npm/l/react-intersection-observer.svg
[license-url]: LICENSE
