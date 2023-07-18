"use client";
import React from "react";

const Button = ({ onClick, label }: any) => {
  return (
    <button onClick={onClick} className="rounded bg-blue-400 p-2">
      {label}
    </button>
  );
};

export default Button;
