export interface AddTaskProps {
  task: string;
  setTask: (task: string) => void;
  handleCreateTask: () => void;
}

export interface ITask {
  _id: string;
  task: string;
  completed: boolean;
}

export interface TasksProps {
  individualTask: ITask;
  handleCompleteTask: (id: string) => void;
  handleDeleteTask: (id: string) => void;
}
