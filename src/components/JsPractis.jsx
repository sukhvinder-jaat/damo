import React, { useState } from "react";

const JsPractis = () => {
  const [Value1, setValue1] = useState("Palvi");
  const [Value2, setValue2] = useState("Muskan");
  const [Value3, setValue3] = useState("Keshav");

  const valuechange1 = (e) => {
    setValue1(e.target.value);
  };
  const valuechange2 = (e) => {
    setValue2(e.target.value);
  };
  const valuechange3 = (e) => {
    setValue3(e.target.value);
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Palvi"
          onChange={valuechange1}
        />
        <p>{Value1}</p>
      </div>
      <div>
        <input
          type="text"
          placeholder="Muskan"
          onChange={valuechange2}
        />
        <p>{Value2}</p>
      </div>
      <div>
        <input
          type="text"
          placeholder="Keshav"
          onChange={valuechange3}
        />
        <p>{Value3}</p>
      </div>
    </div>
  );
};

export default JsPractis;
