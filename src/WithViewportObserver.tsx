import React from 'react';

import { useIntersectionObserver } from './useIntersectionObserver';

/*
  WithObserver utilizes the IntersectionObserver API to create a wrapper
  element (div) to act as a listener via a ref for when that element and its
  children are visible within the viewport on the client.

  threshold: is a parameter for the IntersectionObserver to determine how
  much of the element should be in the viewport before being flagged as visible
  via the value of `isIntersecting`. A value of `1` means the entirety of the
  element must enter the viewport to trigger a `truthy` return value.

  truthyClasses: any number of classes, whether one or more, to be assigned to
  the wrapper element should `isIntersecting` be `true`.

  falseyClasses: any number of classes, whether one or more, to be assigned to
  the wrapper element should `isIntersecting` be `true`.

  elementRef is the output of React's useRef as utilized by the Intersection
  Observer API.
*/

export function WithViewportObserver({
  children,
  threshold = 0.1,
  truthyClasses = [],
  falseyClasses = [],
}) {
  const { elementRef, isIntersecting } = useIntersectionObserver(threshold);
  const classes = isIntersecting ? truthyClasses : falseyClasses;

  return (
    <div
      className={`${!Array.isArray(classes) ? classes : classes.join(' ')}`}
      ref={elementRef}
    >
      {children}
    </div>
  );
}
