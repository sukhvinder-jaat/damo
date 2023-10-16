import React, { createContext, useState } from "react";

export const Mycontext = createContext();
const UseContext = ({ children }) => {
  const [first, setFirst] = useState(true);
  return (
    <>
      <Mycontext.Provider value={{ first, setFirst }}>
        {children}
      </Mycontext.Provider>
    </>
  );
};
export default UseContext;
