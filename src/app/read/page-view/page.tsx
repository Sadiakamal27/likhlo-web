"use client";

import React, { useState } from "react";
import ReadingNav from "./reading-nav";

export default function PageView() {
  const [isWriting, setIsWriting] = useState(false);
  return (
    <div>
      {isWriting}
      <ReadingNav />
      <div></div>
      <button onClick={() => setIsWriting(true)}>Hello</button>
    </div>
  );
}
