import React from "react";

const SkipAdd = () => {
  const array = [9, 4, 13, 12, 4, 5, 13];
  let number = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 13) {
      continue;
    }
    number += array[i];
  }
  return <div>{number}</div>;
};

export default SkipAdd;
