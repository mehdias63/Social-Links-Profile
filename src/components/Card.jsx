import React from "react";
import Button from "./Button";

export default function Card() {
  return (
    <div className="bg-dark-gray text-white font-inter">
      <img src="/images/avatar-jessica.jpeg" />
      <h1>Jessica Randall</h1>
      <p>London, United Kingdom</p>
      <p>Front-end developer and avid reader.</p>
      <Button title="GitHub" />
      <Button title="Frontend Mentor" />
      <Button title="LinkedIn" />
      <Button title="Twitter" />
      <Button title="Instagram" />
    </div>
  );
}
