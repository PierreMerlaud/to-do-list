import { Schema, model, models } from "mongoose";
import { ITask } from "../types/index";

// structure dans la BDD d'une tâche (model)
const taskSchema = new Schema<ITask>({
  task: {
    type: String,
    required: [true, "Task is required."],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Task = models.Task || model<ITask>("Task", taskSchema);

export default Task;
