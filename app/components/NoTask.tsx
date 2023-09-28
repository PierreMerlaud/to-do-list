import { PiWarningLight } from "react-icons/pi";

const NoTask = () => {
  return (
    <div className="noTasks">
      <PiWarningLight className="warningButton" />
      Pas de tâche pour le moment.
    </div>
  );
};

export default NoTask;
