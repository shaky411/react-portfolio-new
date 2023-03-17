import React from "react";


export default function GalleryItem(props) {
    return (
        <div className="flex w-1/1 md:w-1/3 flex-wrap opacity-40 transition-opacity duration-700 hover:opacity-100">
              <div className="w-full p-2 md:p-2">
                <img
                  alt={props.name}
                  className="block h-full w-full rounded-lg object-cover object-center hover:scale-110 transition-scale duration-500"
                  src={props.image}
                />
              </div>
            </div>
    )
}