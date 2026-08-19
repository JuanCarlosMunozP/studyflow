import type { MicroTask } from "../../types";

interface MicroTaskListProps {
    microTasks: MicroTask[];
    onToogle: (id:string) => void;
}

export function MicroTaskList({
    microTasks,
    onToogle
}: MicroTaskListProps) {
    return (
        <div>
            {microTasks.map((microTask) => (
                <label key={microTask.id}>
                    <input type="checkbox" checked={microTask.completed} onChange={() => onToogle(microTask.id)}/>
                    <span>
                        {microTask.title}
                    </span>
                </label>
            ))}
        </div>
    )
} 