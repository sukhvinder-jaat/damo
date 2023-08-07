import React from "react";
import { Container } from "react-bootstrap";
export const FormSubmit = () => {
  const [myData, setData] = React.useState({
    Name: "",
    email: "",
    number: "",
    tick: "",
  });
  const userInput = (e) => {
    const myName = e.target.name;
    const value = e.target.value;
    setData({ ...myData, [myName]: value });
  };
  const Formsubmission = (i) => {
    i.preventDefault();
    setData({ Name: "", email: "", number: "",selectt:"",tick: "" });
    console.log(myData);
  };
  return (
    <>
      <Container>
        <form onSubmit={Formsubmission}>
          <div>
            <label htmlFor="myname" className=" pe-4">
              Name
            </label>
            <input
              onChange={userInput}
              type="text"
              name="Name"
              value={myData.Name}
            />
          </div>
          <div>
            <label htmlFor="email" className=" pe-4">
              Email
            </label>
            <input
              onChange={userInput}
              type="text"
              name="email"
              value={myData.email}
            />
          </div>
          <div>
            <label htmlFor="checkbox" className=" pe-4">
              number
            </label>
            <input
              onChange={userInput}
              type="number"
              name="number"
              checked={myData.number}
            />
          </div>
           <div>
            <label htmlFor="checkbox" className=" pe-4">
              check
            </label>
            <input
              id="checkbox"
              onChange={userInput}
              type="checkbox"
              name="tick"
              checked={myData.tick}
            />
          </div>
          <select name="selectt" value={myData.selectt} onChange={userInput}>
            <option value="ashok">ashok</option>
            <option value="ankit">ankit</option>
            <option value="ravi">ravi</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </Container>
    </>
  );
};
