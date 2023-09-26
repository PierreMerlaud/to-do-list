import { AddTaskProps } from "@types";
import { BsPlusCircleDotted } from "react-icons/bs";

const AddTask = ({ task, setTask, handleCreateTask }: AddTaskProps) => {
  return (
    <div className="newTaskDiv">
      <input
        className="newTaskInput"
        placeholder="Nouvelle tâche"
        onChange={(e) => setTask(e.target.value)}
        value={task}
      ></input>
      <BsPlusCircleDotted
        className="newTaskButton"
        onClick={() => handleCreateTask()}
      />
    </div>
  );
};

export default AddTask;
