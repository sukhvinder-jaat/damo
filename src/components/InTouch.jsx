import React from "react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Swal from "sweetalert2";
function InTouch() {
  const SubmitBtn = document.getElementById("submit-btn");
  const form = useRef();
  const [resistration, setresistration] = useState({
    name: "",
    phone: "",
    email: "",
    requestType: "Become a Vox Speech Therapist",
    message: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setresistration({ ...resistration, [name]: value });
  };

  const FormSubmit = (e) => {
    e.preventDefault();
    SubmitBtn.value = "Sending...";
    emailjs
      .sendForm(
        "service_56c4fhy",
        "template_2mfzvls",
        form.current,
        "IPZZr-AvM9FhZ8fbZ"
      )
      .then(() => {
        SubmitBtn.value = "Submit";
        setresistration({
          name: "",
          phone: "",
          email: "",
          message: "",
          requestType: "Become a Vox Speech Therapist",
        });
        Swal.fire({
          title: "Success",
          text: "Submitted successfully",
          icon: "success",
          confirmButtonText: "Okay",
        });
      })
      .catch((err) => {
        SubmitBtn.value = "Submit";
        Swal.fire({
          title: "Error",
          text: "There is an error while submitting the data.",
          icon: "error",
          confirmButtonText: "Okay",
        });
      });
  };
  return (
    <>
      <section id="InTouch" className="py-5">
        <div className="container mt-md-5 py-lg-5">
          <div className="row justify-content-center">
            <div
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-offset="200"
              className="col-md-10"
            >
              <form
                ref={form}
                className="d-flex flex-column gap-1 w-100"
                onSubmit={FormSubmit}
              >
                <input
                  required
                  className="w-100 text"
                  type="text "
                  placeholder="Enter your name"
                  value={resistration.name}
                  onChange={handleInput}
                  id="name"
                  name="name"
                />
                <input
                  required
                  className="w-100 mt-3 text"
                  type="email"
                  placeholder="Enter your email address"
                  value={resistration.email}
                  onChange={handleInput}
                  id="Email"
                  name="email"
                />
                <input
                  required
                  className="w-100 mt-3 text"
                  type="number"
                  placeholder="Enter your phone no."
                  value={resistration.phone}
                  onChange={handleInput}
                  id="Phone"
                  name="phone"
                />
                <select
                  className="w-100 mt-3"
                  onChange={handleInput}
                  value={resistration.requestType}
                  name="requestType"
                >
                  <option value="Become a Vox Speech Therapist">
                    Become a Vox Speech Therapist
                  </option>
                  <option value="Request School Professionals">
                    Request School Professionals
                  </option>
                </select>
                <textarea
                  className="w-100 mt-3 my-sm-3"
                  placeholder="Enter message"
                  rows="3"
                  value={resistration.message}
                  onChange={handleInput}
                  id="message"
                  name="message"
                ></textarea>
                <input
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  data-aos-offset="200"
                  className="my-4 bt_commn clr_white rounded-1 text-uppercase transition300"
                  type="submit"
                  id="submit-btn"
                  value="submit"
                />
              </form>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-offset="200"
              className="col-md-10 pt-sm-3"
            >
              <a
                href="tel:424-666-9958"
                className="d-inline-flex gap-3 align-items-center text_stroke_custom ff_Manrope fs_xl fw-normal clr_LightBlack"
              >
                <span>
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="42"
                      height="42"
                      rx="4"
                      fill="#3E4A64"
                      fillOpacity="0.05"
                    />
                    <path
                      opacity="0.9"
                      d="M32.1667 25.7696C30.4608 25.7696 28.6127 25.4853 27.049 24.9167H26.6225C26.1961 24.9167 25.9118 25.0588 25.6275 25.3431L22.5 28.4706C18.5196 26.3382 15.1078 23.0686 13.1176 19.0882L16.2451 15.9608C16.6716 15.5343 16.8137 14.9657 16.5294 14.5392C16.1029 12.9755 15.8186 11.1275 15.8186 9.42157C15.8186 8.71078 15.1078 8 14.3971 8H9.42157C8.71078 8 8 8.71078 8 9.42157C8 22.7843 18.8039 33.5882 32.1667 33.5882C32.8775 33.5882 33.5882 32.8775 33.5882 32.1667V27.1912C33.5882 26.4804 32.8775 25.7696 32.1667 25.7696ZM10.8431 10.8431H12.9755C13.1176 12.1225 13.402 13.402 13.6863 14.5392L11.9804 16.2451C11.4118 14.5392 10.9853 12.6912 10.8431 10.8431ZM30.7451 30.7451C28.8971 30.6029 27.049 30.1765 25.3431 29.6078L27.049 27.902C28.1863 28.1863 29.4657 28.4706 30.7451 28.4706V30.7451ZM25.0588 9.42157C25.0588 10.2745 24.4902 10.8431 23.6373 10.8431C22.7843 10.8431 22.2157 10.2745 22.2157 9.42157C22.2157 8.56863 22.7843 8 23.6373 8C24.4902 8 25.0588 8.56863 25.0588 9.42157ZM29.3235 9.42157C29.3235 10.2745 28.7549 10.8431 27.902 10.8431C27.049 10.8431 26.4804 10.2745 26.4804 9.42157C26.4804 8.56863 27.049 8 27.902 8C28.7549 8 29.3235 8.56863 29.3235 9.42157ZM33.5882 9.42157C33.5882 10.2745 33.0196 10.8431 32.1667 10.8431C31.3137 10.8431 30.7451 10.2745 30.7451 9.42157C30.7451 8.56863 31.3137 8 32.1667 8C33.0196 8 33.5882 8.56863 33.5882 9.42157ZM25.0588 13.6863C25.0588 14.5392 24.4902 15.1078 23.6373 15.1078C22.7843 15.1078 22.2157 14.5392 22.2157 13.6863C22.2157 12.8333 22.7843 12.2647 23.6373 12.2647C24.4902 12.2647 25.0588 12.8333 25.0588 13.6863ZM29.3235 13.6863C29.3235 14.5392 28.7549 15.1078 27.902 15.1078C27.049 15.1078 26.4804 14.5392 26.4804 13.6863C26.4804 12.8333 27.049 12.2647 27.902 12.2647C28.7549 12.2647 29.3235 12.8333 29.3235 13.6863ZM33.5882 13.6863C33.5882 14.5392 33.0196 15.1078 32.1667 15.1078C31.3137 15.1078 30.7451 14.5392 30.7451 13.6863C30.7451 12.8333 31.3137 12.2647 32.1667 12.2647C33.0196 12.2647 33.5882 12.8333 33.5882 13.6863ZM25.0588 17.951C25.0588 18.8039 24.4902 19.3725 23.6373 19.3725C22.7843 19.3725 22.2157 18.8039 22.2157 17.951C22.2157 17.098 22.7843 16.5294 23.6373 16.5294C24.4902 16.5294 25.0588 17.098 25.0588 17.951ZM29.3235 17.951C29.3235 18.8039 28.7549 19.3725 27.902 19.3725C27.049 19.3725 26.4804 18.8039 26.4804 17.951C26.4804 17.098 27.049 16.5294 27.902 16.5294C28.7549 16.5294 29.3235 17.098 29.3235 17.951ZM33.5882 17.951C33.5882 18.8039 33.0196 19.3725 32.1667 19.3725C31.3137 19.3725 30.7451 18.8039 30.7451 17.951C30.7451 17.098 31.3137 16.5294 32.1667 16.5294C33.0196 16.5294 33.5882 17.098 33.5882 17.951Z"
                      fill="#2C2C2C"
                    />
                  </svg>
                </span>
                424-666-9958
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default InTouch;
