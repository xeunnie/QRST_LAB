"use client"

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// P5Wrapper를 동적 import하여 서버에서 렌더링되지 않도록 함
const P5Wrapper = dynamic(() => import("../navigation/p5Wrapper"), {
  ssr: false,
});

export default function Screen4() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // 컴포넌트가 클라이언트 측에서만 렌더링되도록 설정
    setIsClient(true);
  }, []);

  const sketch = (p) => {
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);
    };

    p.draw = () => {
      if (p.frameCount % 100 == 0) p.background(0, 0, 0);
      p.fill(p.random(255), p.random(255), p.random(255));
      if (p.mouseIsPressed) {
        p.ellipse(p.mouseX, p.mouseY, 50, 50);
      }
    };
  };

  // 클라이언트 측에서만 P5Wrapper를 렌더링
  return (
    <div className="p5wrapper">
      {isClient && <P5Wrapper sketch={sketch} />}
    </div>
  );
}
