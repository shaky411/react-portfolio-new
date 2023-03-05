import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import About from "./About";

function Contact(props) {
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
              <form>
                <div className="form-group mb-6">
                  <input
                    type="text"
                    className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput7"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group mb-6">
                  <input
                    type="email"
                    className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput8"
                    placeholder="Email address"
                  />
                </div>
                <div className="form-group mb-6">
                  <textarea
                    className="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          "
                    id="exampleFormControlTextarea13"
                    rows="3"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="form-group form-check text-center mb-6">
                  <input
                    type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                    id="exampleCheck87"
                    checked
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    for="exampleCheck87"
                  >
                    Send me a copy of this message
                  </label>
                </div>
                <button
                  type="submit"
                  className="
          w-full
          px-6
          py-2.5
          bg-blue-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out"
                >
                  Send
                </button>
              </form>
            </div>

            <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
              <div className="flex flex-wrap">
                <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="p-4 bg-slate-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                        <i class="fa-brands fa-github text-white text-2xl"></i>
                      </div>
                    </div>
                    <div className="grow ml-6">
                      <p className="font-bold mb-1">Github</p>
                      <a href="https://github.com/shaky411" target="_blank" className="text-slate-400 no-underline">Github Profile</a>
                    </div>
                  </div>
                </div>

                

                <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="p-4 bg-pink-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                        <i class="fa-solid fa-envelope text-white text-2xl"></i>
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
                        <i class="fa-solid fa-phone text-white text-2xl"></i>
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
                        <i class="fa-brands fa-linkedin text-white text-2xl"></i>
                      </div>
                    </div>
                    <div className="grow ml-6">
                      <p className="font-bold mb-1">LinkedIn</p>
                      <a href="https://www.linkedin.com/in/marcnorris1984" target="_blank" className="text-slate-400 no-underline">LinkedIn Profile</a>
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
