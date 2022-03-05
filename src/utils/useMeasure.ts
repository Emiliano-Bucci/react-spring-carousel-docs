import { MutableRefObject, useEffect, useRef, useState } from "react";
import ResizeObserver from "resize-observer-polyfill";

type UseMasure = [
  { ref: MutableRefObject<HTMLDivElement | null> },
  { height: number; top: number; width: number; left: number }
];

function useMeasure(): UseMasure {
  const ref = useRef<HTMLDivElement | null>(null);
  const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 });
  const [ro] = useState(
    () => new ResizeObserver(([entry]) => set(entry.contentRect))
  );
  useEffect(() => {
    if (ref.current) ro.observe(ref.current);
    return () => ro.disconnect();
  }, [ro]);
  return [{ ref }, bounds];
}

export { useMeasure };
