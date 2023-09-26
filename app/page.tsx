"use client";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";

export default function Home() {
  const [task, setTask] = useState("");

  const handleCreateTask = async () => {};

  return (
    <>
      <Header />
      <AddTask
        task={task}
        setTask={setTask}
        handleCreateTask={handleCreateTask}
      />
    </>
  );
}
