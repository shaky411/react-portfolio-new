import React from "react";


function AboutCard(props) {
return (

  <div className="flex-col p-5 m-3 w-1/1 md:w-1/2 lg:w-1/3 xl:w-1/4 space-y-10 bg-white rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16">
  <div className="flex flex-col md:flex-col lg:flex-col space-y-6">
    <div className="flex justify-center items-center flex-col space-y-3 text-center md:text-left">
      {/* <img src={pLogo1} alt="test" className="w-1/1 shadow-md rounded-m" /> */}

      <div className="max-w-sm mt-4 text-2xl font-medium">
        {props.subTitle}
      </div>

      <div className="flex-col mb-4 spacy-y-3 text-center md:text-left">
        <p className="text-5xl font-bold">{props.title}</p>
        <p className="text-sm font-light text-gray-400">This is all about me</p>
        <div>
          <div className="inline-block px-3 mt-2 py-1 text-sm text-white font-bold bg-slate-500 rounded-full shadow-md">
            JavaScript
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

)
}

export default AboutCard;