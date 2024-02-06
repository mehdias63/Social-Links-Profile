import React from "react";

export default function Button({ title, text }) {
  return (
    <div>
      <a
        className="block bg-gray text-sm font-bold leading-[1.3125rem] w-[17rem] py-3 rounded-md hover:bg-light-green cursor-pointer hover:text-black m-2 text-center"
        href={text}
      >
        {title}
      </a>
    </div>
  );
}
