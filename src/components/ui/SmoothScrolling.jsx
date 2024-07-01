"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }) {
  return (
    <ReactLenis
      root
      easing={(t) => -(Math.cos(Math.PI * x) - 1) / 2}
      options={{
        lerp: 0.1,
        duration: 1.5,
        smoothTouch: true,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
