import { Mail } from "emailjs/api";

const sendNotification = (email, name) => {
  const mail = new Mail({
    apiKey: "YOUR_API_KEY",
    templateId: "YOUR_TEMPLATE_ID",
    to: email,
    subject: "Form Submitted",
    from: "YOUR_EMAIL_ADDRESS",
  });

  mail.send({
    name: name,
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    // Send an email notification
    sendNotification(email, name);
  };
};
