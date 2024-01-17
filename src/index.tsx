'use client';

import React from 'react';

export { useIntersectionObserver } from './useIntersectionObserver';
export { WithViewportObserver } from './WithViewportObserver';

type Threshold = number;

export type WithViewportObserverProps = {
  children: React.JSX.Element;
  classesDefault?: string | string[];
  classesIsVisible?: string | string[];
  classesNotVisible?: string | string[];
  threshold?: Threshold;
};

export type useIntersectionObserverOptions = {
  threshold: Threshold;
};

export type useIntersectionObserverResponse = [
  React.RefObject<any>,
  boolean
] & {
  elementRef: React.RefObject<any>;
  isIntersecting: boolean;
};
