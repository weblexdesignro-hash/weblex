"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

type Props = {
  value: number;
  suffix?: string;
  className?: string;
};

export default function AnimatedCounter({ value, suffix = "", className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1.4, bounce: 0 });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${Math.round(latest)}${suffix}`;
      }
    });
  }, [spring, suffix]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
