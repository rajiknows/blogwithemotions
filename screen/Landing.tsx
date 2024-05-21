"use client";
import React from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { redirect, useRouter } from "next/navigation";

function Landing() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (user) {
    redirect("/journal");
  }

  return (
    <div className="flex justify-between h-screen bg-black">
      <div className="ml-[200px]">
        <div className="text-6xl font-bold text-blue-600 mt-[450px]">
          the best journal app.
        </div>
        <button
          onClick={() => {
            isSignedIn ? redirect("/journal") : redirect("/sign-in");
          }}
          className="px-4 py-2 bg-white text-blue-600  rounded-lg mt-4 ml-3"
        >
          explore
        </button>
      </div>
    </div>
  );
}

export default Landing;
