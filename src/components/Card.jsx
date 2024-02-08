import React from "react";
import Button from "./Button";

export default function Card() {
  return (
    <div className="w-[20.4375rem] lg:w-[24rem] bg-dark-gray text-white font-inter flex flex-col justify-center items-center p-6 lg:p-10 rounded-lg">
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
      <Button label="GitHub" href="https://github.com" />
      <Button label="Frontend Mentor" href="https://frontendmentor.io" />
      <Button label="LinkedIn" href="https://linkedin.com" />
      <Button label="Twitter" href="https://twitter.com" />
      <Button label="Instagram" href="https://instagram.com" />
    </div>
  );
}
