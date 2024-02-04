import React from "react";
import Button from "./Button";

export default function Card() {
  return (
    <div className="bg-dark-gray text-white font-inter flex flex-col justify-center items-center p-4 rounded-lg">
      <img
        src="/images/avatar-jessica.jpeg"
        className="w-[5.5rem] h-[5.5rem] rounded-full"
        alt="avatar"
      />
      <h1 className="text-2xl font-semibold leading-9 mt-4">Jessica Randall</h1>
      <p className="text-sm font-bold leading-[1.3125rem] text-light-green mb-2">
        London, United Kingdom
      </p>
      <p className="text-sm font-normal leading-[1.3125rem] my-4">
        "Front-end developer and avid reader."
      </p>
      <Button title="GitHub" text="https://github.com" />
      <Button title="Frontend Mentor" text="https://frontendmentor.io" />
      <Button title="LinkedIn" text="https://linkedin.com" />
      <Button title="Twitter" text="https://twitter.com" />
      <Button title="Instagram" text="https://instagram.com" />
    </div>
  );
}
