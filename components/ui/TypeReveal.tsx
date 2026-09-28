"use client";

import { useEffect, useState } from "react";

const charsPerTick = 2;

// Types text out once `active` turns true (the parent tile knows when it has
// been seen). The untyped remainder stays in the layout (transparent) so the
// card height never jumps.
export function TypeReveal({ text, active, speed = 24 }: { text: string; active: boolean; speed?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
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
        return Math.min(current + charsPerTick, text.length);
      });
    }, speed);
    return () => window.clearInterval(timer);
  }, [active, text, speed]);

  return (
    <span className="type-reveal">
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
