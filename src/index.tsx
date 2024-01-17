'use client';

import React from 'react';

export { useIntersectionObserver } from './useIntersectionObserver';
export { WithViewportObserver } from './WithViewportObserver';

export type IntersectionObserverOptions = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
};

export type WithViewportObserverProps = {
  children: React.JSX.Element;
  classesDefault?: string | string[];
  classesIsVisible?: string | string[];
  classesNotVisible?: string | string[];
} & IntersectionObserverOptions;

export type useIntersectionObserverResponse = [
  React.RefObject<any>,
  boolean
] & {
  elementRef: React.RefObject<any>;
  isIntersecting: boolean;
};
