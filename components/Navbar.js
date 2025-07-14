"use client";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";
// import { useUser } from "@clerk/nextjs";

export default function Navbar({ home = false }) {
  // const user=useUser()
  // console.log(user.user?.id)
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-black text-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href={"/"} className="text-2xl font-bold text-emerald-300 justify-center items-center">
          TopicHive
        </Link>
        <div className="hidden md:flex space-x-8 text-sm font-medium justify-center items-center">
          <Link href={"/"} className="hover:text-yellow-400">Home</Link>
          <Link href={"/Forums"} className="hover:text-yellow-400">Forums</Link>
          {/* <Link href={"/Userchat"} className="hover:text-yellow-400">UserChat</Link> */}
          <UserButton/>
        </div>
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? "✖" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-green-800 px-6 pb-4 space-y-2 text-sm">
          <Link href="/" className="block hover:text-yellow-400">Home</Link>
          <Link href="/Forums" className="block hover:text-yellow-400">Forums</Link>
          <Link href="/Userchat" className="block hover:text-yellow-400">UserChat</Link>
        </div>
      )}
    </nav>
  );
}
