"use client";
import { useState, useEffect } from "react";
import Header from "./components/Header";

export default function Home() {
  const [task, setTask] = useState("");
  return (
    <>
      <Header />
    </>
  );
}
