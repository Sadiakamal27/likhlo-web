import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export default function () {
  const [title, setTitle] = useState("");

  const titleChangeHander = () => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  return (
    <div>
      <div>{title}</div>
      <Button onClick={() => titleChangeHander} variant="ghost">
        Add Cwontent
      </Button>
    </div>
  );
}
