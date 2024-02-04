import React from "react";

export default function Button({ title, text }) {
  return (
    <div className="m-2">
      <button className="bg-gray text-sm font-bold leading-[1.3125rem] w-[17rem] py-3 rounded-md hover:bg-light-green cursor-pointer hover:text-black">
        <a href={text}>{title}</a>
      </button>
    </div>
  );
}
