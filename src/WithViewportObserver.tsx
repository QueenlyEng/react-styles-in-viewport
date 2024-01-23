import React from 'react';

import { useIntersectionObserver } from './useIntersectionObserver';

import type { WithViewportObserverProps } from './index';

/**
 * Use `WithViewportObserver` to flag for animations and any amount of styles
 * to only trigger when the component enters the viewport.
 *
 * @param { WithViewportObserverProps } obj
 * @param { string | string[] } obj.classesDefault
 * @param { string | string[] } obj.classesIsVisible
 * @param { string | string[] } obj.classesNotVisible
 * @param { Element } obj.root
 * @param { string } obj.rootMargin
 * @param { number | number[] } obj.threshold
 *
 * @example
 * ```js
 * import React from 'react';
 * import { WithViewPortObserver } from 'react-style-in-viewport'

 * import s from './AnimateComponent.module.css';

 * const AnimateComponent = () => {
 *   return (
 *     <WithViewportObserver
 *       classesIsVisible={[s.fadeIn, s.wiggle]}
 *       classesNotVisible={s.fadeOut}
 *     >
 *       <h2>Watch me fade in and transform!</h2>
 *     </WithViewportObserver>
 *   );
 * };
 * ```
 */

export function WithViewportObserver({
  children,
  classesDefault = [],
  classesIsVisible = [],
  classesNotVisible = [],
  root,
  rootMargin,
  threshold,
}: WithViewportObserverProps): React.JSX.Element {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    root,
    rootMargin,
    threshold,
  });

  const chosenClasses = [
    classesDefault,
    isIntersecting ? classesIsVisible : classesNotVisible,
  ].flat();

  return (
    <div
      className={`${chosenClasses.join(' ')}`}
      ref={elementRef}
    >
      {children}
    </div>
  );
}
