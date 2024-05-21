"use client";
import React, { useState } from "react";
import { redirect, useRouter } from "next/navigation";

function NewEntryCard() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    isClicked ? (
      <div className="overflow-hidden rounded-lg bg-white shadow-md h-[calc(100vh-120px)] w-full">
        <button className="rounded-lg text-white bg-black p-2 " onClick={(e)=>{
          e.preventDefault();
          setIsClicked((prev)=> !prev);
        }}>abort</button>
        <div className="p-5">
          <textarea name="blogarea" id="blog" className="h-full w-full "></textarea>
        </div>

      </div>
    ) : (
      <div
        className="cursor-pointer overflow-hidden rounded-lg bg-white shadow-md"
        onClick={() => setIsClicked((prev) => !prev)}
      >
        <div className="p-5">
          <span className="text-3xl">New Entry</span>
        </div>
      </div>
    )
  );
    
    
}

export default NewEntryCard;
