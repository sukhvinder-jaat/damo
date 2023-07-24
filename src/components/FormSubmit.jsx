import React from "react";
import { Container } from "react-bootstrap";
export const FormSubmit = () => {
  const [myData, setData] = React.useState({
    Name: "",
    email: "",
    number: "",
  });
  const userInput = (e) => {
    const myName = e.target.name;
    const value = e.target.value;
    setData({ ...myData, [myName]: value });
  };
  const Formsubmission = (i) => {
    i.preventDefault();
    setData({ Name: "", email: "", number: "" });
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
              value={myData.name}
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
            <label htmlFor="number" className=" pe-4">
              Number
            </label>
            <input
              onChange={userInput}
              type="number"
              name="number"
              value={myData.number}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </Container>
    </>
  );
};
