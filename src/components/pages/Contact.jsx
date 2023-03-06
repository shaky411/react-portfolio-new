import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link, Route, Routes } from "react-router-dom";
import About from "./About";

function Contact(props) {
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
        },
        (error) => {
          console.log(error.text);
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
                <div className="container bg-slate-100 p-4 rounded-xl">
                  <h2 className="text-center">Get in touch</h2>
                  <form ref={form} onSubmit={sendEmail} className="flex flex-col items-center justify-center">
                    <input className="bg-white m-2 p-2 rounded shadow-inner border"
                      type="text"
                      placeholder="Full Name"
                      name="user_name"
                      required
                    />
                    <input className="bg-white m-2 p-2 rounded shadow-inner border"
                      type="email"
                      placeholder="Email"
                      name="user_email"
                      required
                    />
                    <input className="bg-white m-2 p-2 rounded shadow-inner border"
                      type="text"
                      placeholder="Subject"
                      name="subject"
                      required
                    />
                    <textarea name="message" cols="30" rows="10" className="bg-white m-2 p-2 rounded shadow-inner border"></textarea>
                    <button type="submit" className="bg-indigo-500 hover:bg-indigo-700 p-2 text-white rounded shadow mt-2">Send Message</button>
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
