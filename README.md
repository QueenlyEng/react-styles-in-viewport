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

A common use case for the IntersectionObserver API is conditionally styling
animations for components as they enter the viewport.

### `WithViewportObserver` higher order component

Use `WithViewportObserver` to flag for animations and any amount of styles to
only trigger when the component enters the viewport.

```js
import React from 'react';
import { WithViewPortObserver } from 'react-style-in-viewport'

import s from './AnimateComponent.module.css';

const AnimateComponent = () => {
  return (
    <WithViewportObserver
      classesIsVisible={[s.fadeIn, s.wiggle]}
      classesNotVisible={s.fadeOut}
    >
      <h2>Watch me fade in and transform!</h2>
    </WithViewportObserver>
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
  const [ elementRef, isIntersecting ] = useIntersectionObserver({
    threshold: 0.5, // Optional threshold
  });

  return (
    <div ref={elementRef}>
      <p>{`Text is visible in the viewport: ${isIntersecting}.`}</p>
    </div>
  );
};
```

The return values from `useIntersectionObserver` can be destructured from an
object with the property names or an array for convenient aliasing.

```js
// ...

const ObjectExampleComponent = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver();

// ...
```

### `WithViewportObserver` optional properties

| Property              | Type                    | Default Value | Info |
| :-------------------- | :---------------------- | :--------: | :----------------------------------------------- |
| **classesDefault**    | `string` or `string[ ]` | `[ ]`      | Regardless of whether element is visible in the viewport assigns these styles, as a single string or an array of strings. |
| **classesIsVisible**  | `string` or `string[ ]` | `[ ]`      | If the element *IS* visible within the viewport these styles, as a single string or an array of strings. |
| **classesNotVisible** | `string` or `string[ ]` | `[ ]`      | If the element is *NOT* visible within the viewport these styles, as a single string or an array of strings. |
| **root**              | `Element`               | `document` | The element that is used as the viewport for checking visibility of the target. Must be the ancestor of the target. Defaults to the browser viewport if not specified or if `null`. |
| **rootMargin**        | `string`                | `0px`      | Margin around the root. Can have values similar to the CSS margin property, e.g. "10px 20px 30px 40px" (top, right, bottom, left). See [official docs][io-api-docs-rm] for more info. |
| **threshold**         | `number` or `number[ ]` | `0`        | Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed. See [official docs][io-api-docs-t] for more info. |


### `useIntersectionObserver` optional parameters

| Property              | Type                    | Default Value | Info |
| :-------------------- | :---------------------- | :--------: | :----------------------------------------------- |
| **root**              | `Element`               | `document` | The element that is used as the viewport for checking visibility of the target. Must be the ancestor of the target. Defaults to the browser viewport if not specified or if `null`. |
| **rootMargin**        | `string`                | `0px`      | Margin around the root. Can have values similar to the CSS margin property, e.g. "10px 20px 30px 40px" (top, right, bottom, left). See [official docs][io-api-docs-rm] for more info. |
| **threshold**         | `number` or `number[ ]` | `0`        | Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed. See [official docs][io-api-docs-t] for more info. |

## Contributions

If you are interested in contributing that would be very exciting! Such as if,
encounter any issues please open a ticket on the repo. You may additionally
propose solutions with a linked Pull Request.

## Upcoming development

- Minification
- Publish/release workflows
- Unit testing
- REPL examples
- Storybook integration
- Community feedback

[io-api-docs]: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
[io-api-docs-rm]: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin
[io-api-docs-t]: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#threshold
[license-image]: http://img.shields.io/npm/l/react-intersection-observer.svg
[license-url]: LICENSE
