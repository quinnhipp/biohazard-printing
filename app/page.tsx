"use client";
import Home from "./home/page";
import Navbar from "./components/navbar";

export default function Start() {
  const navLinks = ["Home", "The Band", "Listen", "Tour", "Gallery"];

  return (
    <main className="">
      <Home />
      {/* <Navbar /> */}
    </main>
  );
}
