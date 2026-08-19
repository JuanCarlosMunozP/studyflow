import type { Task } from "../../types";
import { MicroTaskList } from "./MicroTaskList";

interface TaskCardProps {
    task:Task;
    onToggleMicroTask: (
        taskId: string,
        microTaskId: string
    ) => void;
}

export function TaskCard({
    task,
    onToggleMicroTask
}: TaskCardProps) {
    const completed = task.microTasks.filter(
        (microTask) => microTask.completed
    ).length;

    const total = task.microTasks.length;

    const progress = total === 0
        ? 0
        : Math.round((completed/total)*100);

    return (
        <article>
            <h3>
                {task.title}
            </h3>
            <p>
                {task.description}
            </p>
            <p>
                Prioridad: {task.priority}
            </p>
            <p>
                Progreso: {progress}%
            </p>
            <progress value={progress} max={100}/>

            <MicroTaskList microTasks={task.microTasks} onToogle={(microTaskId) => onToggleMicroTask(task.id, microTaskId)} />
        </article>
    )
} 