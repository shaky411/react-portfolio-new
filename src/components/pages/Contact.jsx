import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link, Route, Routes } from "react-router-dom";
import About from "./About";

function Contact(props) {
  // the code below handles the contact form
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nc0xdhs",
        "template_9tvqkow",
        form.current,
        "5X1E7ys2H32Z3dvHZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent!");
        },
        (error) => {
          console.log(error.text);
          alert("message failed to send!");
        }
      );
    e.target.reset();
  };

  return (
    <div className="m-5">
      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-800">
          <div className="flex justify-center">
            <div className="text-center lg:max-w-3xl md:max-w-xl">
              <h2 className="text-3xl font-bold mb-12 px-6">Contact Me</h2>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="grow-0 shrink-0 basis-auto mb-12 lg:mb-0 w-full lg:w-5/12 px-3 lg:px-6">
              {/* New form here! */}
              <section>
                <div>
                <div className="absolute top-50 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
                <div className="absolute top-40 -left-1 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
                <div className="absolute top-30 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
                </div>
                <div className="container bg-slate-100 opacity-70 p-4 rounded-xl shadow-lg border relative">
                  <h2 className="text-center text-black">Get in touch</h2>
                  <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="flex flex-col items-center justify-center"
                  >
                    <input
                      className="bg-white m-2 p-2 rounded shadow-inner border"
                      type="text"
                      placeholder="Full Name"
                      name="user_name"
                      required
                    />
                    <input
                      className="bg-white m-2 p-2 rounded shadow-inner border"
                      type="email"
                      placeholder="Email"
                      name="user_email"
                      required
                    />
                    <input
                      className="bg-white m-2 p-2 rounded shadow-inner border"
                      type="text"
                      placeholder="Subject"
                      name="subject"
                      required
                    />
                    <textarea
                      name="message"
                      placeholder="add message here..."
                      cols="30"
                      rows="10"
                      className="bg-white m-2 p-2 rounded shadow-inner border"
                    ></textarea>
                    <button
                      type="submit"
                      className="bg-indigo-500 hover:bg-indigo-700 p-2 text-white rounded shadow mt-2"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </section>
            </div>

            <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
              <div className="flex flex-wrap">
                <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="p-4 bg-slate-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                        <i className="fa-brands fa-github text-white text-2xl"></i>
                      </div>
                    </div>
                    <div className="grow ml-6">
                      <p className="font-bold mb-1">Github</p>
                      <a
                        href="https://github.com/shaky411"
                        target="_blank"
                        className="text-slate-400 no-underline"
                      >
                        Github Profile
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="p-4 bg-pink-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                        <i className="fa-solid fa-envelope text-white text-2xl"></i>
                      </div>
                    </div>
                    <div className="grow ml-6">
                      <p className="font-bold mb-1">Email</p>
                      <p className="text-gray-500">email@example.com</p>
                      <p className="text-gray-500">+1 234-567-89</p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                  <div className="flex align-start">
                    <div className="shrink-0">
                      <div className="p-4 bg-orange-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                        <i className="fa-solid fa-phone text-white text-2xl"></i>
                      </div>
                    </div>
                    <div className="grow ml-6">
                      <p className="font-bold mb-1">Call Me</p>
                      <p className="text-gray-500">+1 234-567-89</p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                  <div className="flex align-start">
                    <div className="shrink-0">
                      <div className="p-4 bg-blue-500 hover:bg-blue-800 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                        <i className="fa-brands fa-linkedin text-white text-2xl"></i>
                      </div>
                    </div>
                    <div className="grow ml-6">
                      <p className="font-bold mb-1">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/marcnorris1984"
                        target="_blank"
                        className="text-slate-400 no-underline"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
