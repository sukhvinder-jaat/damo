import React, { useContext } from "react";
import { Mycontext } from "./UseContext";

const Contex = () => {
  const { first } = useContext(Mycontext);
  console.log(first);
  return (
    <>
      <div>akjdjaf</div>
    </>
  );
};

export default Contex;
