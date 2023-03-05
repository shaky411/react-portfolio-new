import React from "react";

function Projects() {
  return (
    <div className="m-5">
      <h1 className="mb-3">My Projects</h1>
      <p>
        Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula. Curabitur pellentesque
        turpis sit amet eros iaculis, a mollis arcu dictum. Ut vel ante eget massa ornare placerat.
        Etiam nisl orci, finibus sodales volutpat et, hendrerit ut dolor. Suspendisse porta dictum
        nunc, sed pretium risus rutrum eget. Nam consequat, ligula in faucibus vestibulum, nisi
        justo laoreet risus, luctus luctus mi lacus sit amet libero. className aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. Mauris pretium condimentum
        tellus eget lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec
        placerat accumsan mi, ut congue neque placerat eu. Donec nec ipsum in velit pellentesque
        vehicula sit amet at augue. Maecenas aliquam bibendum congue. Pellentesque semper, lectus
        non ullamcorper iaculis, est ligula suscipit velit, sed bibendum turpis dui in sapien.
      </p>

      {/* Global Container */}
      <div class="flex items-center rounded-2xl justify-center min-h-screen bg-slate-100">
        <div class="flex flex-col p-6 m-3 space-y-10 bg-white rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16">
          <div>
            <img
              src="./images/headphone.png"
              alt=""
              class="mx-auto duration-200 w-60 hover:scale-105"
            />
          </div>

          <div class="flex flex-col space-y-6">
            <div class="flex flex-col mb-4 space-y-3 text-center md:text-left">
              <div>
                <div class="inline-block px-3 py-1 text-sm text-white bg-black rounded-full">
                  Free Shipping
                </div>
              </div>

              <div class="max-w-sm text-2xl font-medium">
                Razar Kraken Kitty Edt Gaming Headset Quartz
              </div>

              <div class="flex-col mb-4 spacy-y-3 text-center md:text-left">
                <p class="line-through">£7.99</p>
                <p class="text-5xl font-bold">£5.99</p>
                <p class="text-sm font-light text-gray-400">
                  This offer is valid until Apr 3rd or as long as stock lasts!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
