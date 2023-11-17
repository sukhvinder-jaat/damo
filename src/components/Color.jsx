import React, { useState } from "react";

const Color = () => {
  const [color, setcolor] = useState("text-black");
  const [align, setalign] = useState("text-start");
  const allValue = `${color} and ${align}`;
  return (
    <>
      <h1 className={allValue}>Color</h1>
      <button onClick={() => setcolor("text-red")}>red</button>
      <button onClick={() => setcolor("text-green")} className="mx-5">
        green
      </button>
      <button onClick={() => setcolor("text-blue")}>blue</button>
      {/* align */}
      <div className="mt-5">
        <button onClick={() => setalign("text-start")}>start</button>
        <button onClick={() => setalign("text-center")} className="mx-5">
          center
        </button>
        <button onClick={() => setalign("text-end")}>end</button>
      </div>
    </>
  );
};

export default Color;
