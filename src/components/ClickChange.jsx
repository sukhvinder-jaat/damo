import React, { useState } from "react";

const ClickChange = () => {
  const [inputData, setInputData] = useState("Select");
  const [height, setHeight] = useState(false);
  return (
    <>
      <div>
        <div className=" bg-black py-2 max-w-80">
          <div className=" d-flex flex-column align-items-start text-center">
            <p
              onClick={() => setHeight(!height)}
              className="pointer d-inline fs-5 text-white text-center"
            >
              {inputData}
            </p>
            <div
              className={`bg-black d-flex flex-column justify-content-start align-items-start ${
                height ? "h-100" : "h-0 overflow-hidden"
              }`}
              onClick={() => setHeight(false)}
            >
              <p
                onClick={() => setInputData("No 1")}
                className="pointer d-inline fs-5 text-white py-1 my-1 px-3 dropBorder"
              >
                No 1
              </p>
              <p
                onClick={() => setInputData("No 2")}
                className="pointer d-inline fs-5 text-white py-1 my-1 px-3 dropBorder"
              >
                No 2
              </p>
              <p
                onClick={() => setInputData("No 3")}
                className="pointer d-inline fs-5 text-white py-1 my-1 px-3 dropBorder"
              >
                No 3
              </p>
              <p
                onClick={() => setInputData("No 4")}
                className="pointer d-inline fs-5 text-white py-1 my-1 px-3 dropBorder"
              >
                No 4
              </p>
              <p
                onClick={() => setInputData("No 5")}
                className="pointer d-inline fs-5 text-white py-1 my-1 px-3 dropBorder"
              >
                No 5
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClickChange;
