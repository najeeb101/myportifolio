"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

// Types text out once it scrolls into view. The untyped remainder stays in the
// layout (transparent) so the card height never jumps.
export function TypeReveal({ text, speed = 14 }: { text: string; speed?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(text.length);
      return;
    }
    const timer = window.setInterval(() => {
      setCount((current) => {
        if (current >= text.length) {
          window.clearInterval(timer);
          return current;
        }
        return current + 1;
      });
    }, speed);
    return () => window.clearInterval(timer);
  }, [inView, text, speed]);

  return (
    <span ref={ref} className="type-reveal">
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{text.slice(0, count)}</span>
      {count < text.length && (
        <>
          <span className="type-reveal-next" aria-hidden="true">
            {text[count]}
          </span>
          <span className="type-reveal-rest" aria-hidden="true">
            {text.slice(count + 1)}
          </span>
        </>
      )}
    </span>
  );
}
