"use client";

import { useEffect, useRef } from "react";

const interactiveSelector = [
  "a",
  "button",
  "input",
  "textarea",
  "select",
  "summary",
  "[role='button']",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    const root = document.documentElement;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let frameId = 0;

    root.classList.add("has-custom-cursor");

    const setVisible = (visible: boolean) => {
      dot.classList.toggle("custom-cursor--visible", visible);
      ring.classList.toggle("custom-cursor--visible", visible);
    };

    const setActive = (active: boolean) => {
      dot.classList.toggle("custom-cursor--active", active);
      ring.classList.toggle("custom-cursor--active", active);
    };

    const updateTargetState = (target: EventTarget | null) => {
      const element = target instanceof Element ? target : null;
      const isInteractive = Boolean(element?.closest(interactiveSelector));
      dot.classList.toggle("custom-cursor--interactive", isInteractive);
      ring.classList.toggle("custom-cursor--interactive", isInteractive);
    };

    const onPointerMove = (event: PointerEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      setVisible(true);
      updateTargetState(event.target);
    };

    const onPointerDown = () => setActive(true);
    const onPointerUp = () => setActive(false);
    const onPointerLeave = () => setVisible(false);
    const onPointerOver = (event: PointerEvent) => updateTargetState(event.target);

    const animate = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;

      frameId = window.requestAnimationFrame(animate);
    };

    frameId = window.requestAnimationFrame(animate);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointerover", onPointerOver);
    document.addEventListener("pointerleave", onPointerLeave);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerleave", onPointerLeave);
      root.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="custom-cursor custom-cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="custom-cursor custom-cursor-dot" aria-hidden="true" />
    </>
  );
}
