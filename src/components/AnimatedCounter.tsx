"use client";

import { useEffect, useState } from "react";
import { animate, useReducedMotion } from "framer-motion";

export default function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  // Rendered on the server and on first paint: always the real, final value
  // (correct even without JS). The effect below then runs a deterministic
  // tween from 0 up to it — not a race against scroll position or an
  // IntersectionObserver, both of which can leave the number stuck at 0.
  const [display, setDisplay] = useState(value);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const controls = animate(0, value, {
      duration: reduceMotion ? 0 : 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });

    return () => controls.stop();
  }, [value, reduceMotion]);

  return (
    <span>
      {display.toLocaleString("fr-FR")}
      {suffix}
    </span>
  );
}
