import { useEffect, useRef } from "react";

export const useClickOutside = (handler: Function) => {
  const ref = useRef(null);
  useEffect(() => {
    const handleClick = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref, handler]);

  return ref;
};
