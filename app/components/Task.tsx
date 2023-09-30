import React from "react";

import { TasksProps } from "../types";
import { MdDoneOutline } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";

const Task = ({
  individualTask,
  handleCompleteTask,
  handleDeleteTask,
}: TasksProps) => {
  return (
    <div className="individualTaskDiv">
      {individualTask.completed ? (
        <p className="individualTaskDoneText">{individualTask.task}</p>
      ) : (
        <p className="individualTaskToDoText">{individualTask.task}</p>
      )}
      <div className="completedButtonsDiv">
        {individualTask.completed ? (
          <MdDoneOutline className="disabledButton" />
        ) : (
          <MdDoneOutline
            className="enabledButton"
            onClick={() => handleCompleteTask(individualTask._id)}
          />
        )}
        <FaRegTrashCan
          className="deleteTaskButton"
          onClick={() => handleDeleteTask(individualTask._id)}
        />
      </div>
    </div>
  );
};

export default Task;
