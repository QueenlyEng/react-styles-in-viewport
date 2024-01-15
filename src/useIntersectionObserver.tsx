import { useEffect, useRef, useState } from 'react';

/*
  useIntersectionObserver utilizes the IntersectionObserver API with a React
  ref to determine whether an element has entered the viewport.

  threshold: is a parameter for the IntersectionObserver to determine how
  much of the element should be in the viewport before being flagged as visible
  via the value of `isIntersecting`. A value of `1` means the entirety of the
  element must enter the viewport to trigger a `truthy` return value.

  isIntersecting is a boolean returned from the hook to determine whether or
  not an element is "intersecting" the viewport.
*/

export function useIntersectionObserver(threshold = 1) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsIntersecting(entry.isIntersecting);
        },
        { threshold }
      );

      const element = elementRef.current;
      observer.observe(element);

      return () => {
        if (element) observer.unobserve(element);
      };
    }
  }, [threshold]);

  return { elementRef, isIntersecting };
}
