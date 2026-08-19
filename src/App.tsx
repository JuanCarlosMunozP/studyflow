import { MicroTaskList } from "./components/tasks/MicroTaskList";
import type { Task } from "./types";

interface TaskCardProps {
  task:Task;
  onToggleMicroTask: (
    taskId:string,
    microTaskId: string
  ) => void;
}

export function TaskCard({
  task,
  onToggleMicroTask,
}:TaskCardProps) {
  const completed = task.microTasks.filter(
    (microTask) => microTask.completed
  ).length;

  const total = task.microTasks.length;

  const progress = total === 0
    ? 0
    : Math.round((completed/total) * 100)

    return (
      <article className="task-card">
        <div className="task-header">
          <div>
            <span className="task-label">
              TASK
            </span>
             <h3>
              {task.title}
            </h3>
            <p className="task-description">
              {task.description}
            </p>
          </div>
          <span className={`priority priority-${task.priority}`}>
            <p>
              Prioridad:
              {task.priority}
            </p>
          </span>
       </div>
       
      <div className="task-progress">
        <div className="progress-header">
          <span>
            Progress
          </span>
          <span>
            {completed}/{total} microtasks
          </span>
        </div>
      </div>
       
        <div className="progress-bar">
          <div className="progress-value" style={{width:`${progress}`}} />
        </div>
        <span className="progress-percentage">
          {progress}%
        </span>
        <div className="microtasks">
          <h4>MicroTasks</h4>
          <MicroTaskList microTasks={task.microTasks} onToogle={(microTaskId) => onToggleMicroTask(task.id, microTaskId)}/>
        </div>
      </article>
    )
}