"use client";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import { ITask } from "./types/index";
import NoTask from "./components/NoTask";
import Task from "./components/Task";
import Loading from "./components/Loading";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const [task, setTask] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [allTasks, setAllTasks] = useState([]);

  const handleCreateTask = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/task/new", {
        method: "POST",
        body: JSON.stringify({ task: task }),
      });
      if (response.ok) {
        setTask("");
        fetchTasks();
        toast("Tâche ajoutée avec succès !");
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const fetchTasks = async () => {
    try {
      const response = await fetch("/api/task/all");
      const data = await response.json();
      setAllTasks(data);
      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching tasks:", error);
    }
  };

  const handleCompleteTask = async (id: string) => {
    try {
      const response = await fetch(`/api/task/complete/${id}`, {
        method: "PATCH",
      });
      if (response.ok) {
        await fetchTasks();
        toast("Tâche effectuée. Bravo !");
      } else {
        console.log("Error completing task");
      }
    } catch (error) {
      console.log("Error completing task:", error);
    }
  };

  const handleDeleteTask = async (id: string) => {
    try {
      const response = await fetch(`/api/task/delete/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setAllTasks((prevTasks) =>
          prevTasks.filter((task: ITask) => task._id !== id)
        );
        toast("Tâche supprimée avec succès !");
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <Header />
      <Toaster />
      <AddTask
        task={task}
        setTask={setTask}
        handleCreateTask={handleCreateTask}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="tasks">
            {allTasks.length > 0 ? (
              allTasks.map((individualTask: ITask, index: number) => (
                <Task
                  key={individualTask._id}
                  individualTask={individualTask}
                  handleCompleteTask={handleCompleteTask}
                  handleDeleteTask={handleDeleteTask}
                />
              ))
            ) : (
              <NoTask />
            )}
          </div>
        </>
      )}
    </>
  );
}
