import React from "react";

export default function() {
    return (
        <div className="mt-6">
            <div className="flex flex-col md:flex-row shadow-lg shadow-indigo-500/40 rounded-xl md:rounded-l-xl">
              <div className="bg-[#2A303C] p-5 border border-slate-500 md:rounded-l-xl">
                <div className="stat-figure text-secondary">
                  <i className="fa-brands fa-square-github text-pink-500 text-4xl"></i>
                </div>
                <div className="text-white">Profile</div>
                <a
                  href="#"
                  className="stat-value text-slate-400 hover:text-green-400 text-3xl no-underline font-bold"
                >
                  shaky411
                </a>
                <div className="text-sm text-gray-500">Jan 1st - Feb 1st</div>
              </div>

              <div className="bg-[#2A303C] p-5 border border-slate-500">
                <div className="stat-figure text-secondary">
                  <i className="fa-solid fa-code-branch text-pink-500 text-4xl"></i>
                </div>
                <div className="text-white">Commits</div>
                <div className="stat-value text-slate-400 text-3xl font-bold">
                  2K
                </div>
                <div className="text-sm text-gray-500">Jan 1st - Feb 1st</div>
              </div>

              <div className="bg-[#2A303C] p-5 border border-slate-500 md:rounded-r-xl">
                <div className="stat-figure text-secondary">
                  <i className="fa-solid fa-code-merge text-pink-500 text-4xl"></i>
                </div>
                <div className="text-green-400">Merged</div>
                <div className="stat-value text-slate-400 text-3xl font-bold">
                  127
                </div>
                <div className="text-sm text-gray-500">Jan 1st - Feb 1st</div>
              </div>
            </div>

          </div>
    )
}