import React from "react";
export default function Test() {
  return (
    <div className="container">
      <div className="flex flex-wrap justify-center h-screen  gap-5 text-black-300 ">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div className="w-full flex items-center justify-center">
          <div>1</div>
        </div>
        <div className="w-full">2</div>
        <div className="w-full mb-5">3</div>
      </div>
    </div>
  );
}
