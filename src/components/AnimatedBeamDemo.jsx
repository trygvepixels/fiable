"use client";
import { AnimatedBeam } from "./ui/animated-beam";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
 
// Circle component
const Circle = forwardRef(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-20 items-center justify-center rounded-full border-2 bg-white p-4 text-sm font-medium text-gray-800 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

// Main demo
export default function AnimatedBeamDemo() {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null); // center
  const div5Ref = useRef(null);
  const div6Ref = useRef(null);
  const div7Ref = useRef(null);

  return (
    <div
      className="relative flex h-[400px] w-full items-center justify-center overflow-hidden p-10"
      ref={containerRef}
    >
      <div className="flex size-full max-h-[300px] max-w-3xl flex-col items-stretch justify-between gap-10">
        {/* Top row */}
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>Waterproofing</Circle>
          <Circle ref={div5Ref}>Grouting</Circle>
        </div>
        {/* Middle row */}
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>Flooring</Circle>
          <Circle
            ref={div4Ref}
            className="size-24 font-semibold text-lg bg-gradient-to-r from-[#2E5DA5] to-[#FEC20F] text-white"
          >
            Fiable
          </Circle>
          <Circle ref={div6Ref}>Demolition</Circle>
        </div>
        {/* Bottom row */}
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>Rehabilitation</Circle>
          <Circle ref={div7Ref}>Civil Works</Circle>
        </div>
      </div>

      {/* Animated Beams */}
      <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div4Ref} curvature={-75} endYOffset={-10} />
      <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div4Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div4Ref} curvature={75} endYOffset={10} />
      <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div4Ref} curvature={-75} endYOffset={-10} reverse />
      <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div4Ref} reverse />
      <AnimatedBeam containerRef={containerRef} fromRef={div7Ref} toRef={div4Ref} curvature={75} endYOffset={10} reverse />
    </div>
  );
}