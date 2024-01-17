import { useEffect, useRef, useState } from 'react';

import type {
  IntersectionObserverOptions,
  useIntersectionObserverResponse,
} from './index';

/**
 * You can utilize the `useIntersectionObserver` hook to more specifically flag
 * when an element (via a React ref) enters the viewport. This enables custom
 * logic to be developed.
 *
 * @param { IntersectionObserverOptions } obj
 * @param { Element } obj.root
 * @param { string } obj.rootMargin
 * @param { number | number[] } obj.threshold
 *
 * @example
 * ```js
 * import React from 'react';
 * import { useIntersectionObserver } from 'react-style-in-viewport';
 *
 * const TextComponent = () => {
 *   const [ elementRef, isIntersecting ] = useIntersectionObserver({
 *     threshold: 0.5, // Optional threshold
 *   });
 *
 *   return (
 *     <div ref={elementRef}>
 *       <p>{`Text is visible in the viewport: ${isIntersecting}.`}</p>
 *     </div>
 *    );
 * };
 * ```
 */

export function useIntersectionObserver({
  root,
  rootMargin,
  threshold,
}: IntersectionObserverOptions): useIntersectionObserverResponse {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsIntersecting(entry.isIntersecting);
        },
        { root, rootMargin, threshold }
      );

      const element = elementRef.current;
      observer.observe(element);

      return () => {
        if (element) observer.unobserve(element);
      };
    }
  }, [threshold]);

  const output = [
    elementRef,
    isIntersecting,
  ] as useIntersectionObserverResponse;

  output.elementRef = output[0];
  output.isIntersecting = output[1];

  return output;
}
