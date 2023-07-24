import React, { useState } from "react";

const FormComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send an email notification
    const mailtoLink = `mailto:monudhaka829@gmail.com?subject=Form submission&body=Sukhvinder: ${name}&email: ${email}`;
    window.open(mailtoLink);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={name} onChange={setName} />
      <input type="email" name="email" value={email} onChange={setEmail} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
