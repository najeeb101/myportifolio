"use client";

import { useEffect, useState } from "react";

export function Typewriter({ phrases, prefix = "" }: { phrases: string[]; prefix?: string }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(phrases[0]);
      return;
    }

    const phrase = phrases[phraseIndex];
    let delay = deleting ? 35 : 70;
    if (!deleting && text === phrase) delay = 1800;
    if (deleting && text === "") delay = 300;

    const timer = window.setTimeout(() => {
      if (!deleting && text === phrase) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setPhraseIndex((index) => (index + 1) % phrases.length);
      } else {
        setText(phrase.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [text, deleting, phraseIndex, phrases]);

  return (
    <span className="typewriter">
      <span className="typewriter-prefix">{prefix}</span>
      <span aria-live="off">{text}</span>
      <span className="caret" aria-hidden="true" />
    </span>
  );
}
