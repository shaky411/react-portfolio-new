import React from "react";


export default function GalleryItem(props) {
    return (
        <div className="flex w-1/1 md:w-1/3 flex-wrap opacity-40 hover:opacity-100">
              <div className="w-full p-2 md:p-2">
                <img
                  alt={props.name}
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={props.image}
                />
              </div>
            </div>
    )
}