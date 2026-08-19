export type TaskStatus = 
    | "Pending"
    | "In_progress"
    | "completed";

export type Priority = 
    | "low"
    | "medium"
    | "high";

export interface MicroTask {
    id: string;
    title:string;
    completed:boolean;
}

export interface Task {
    id:string;
    title:string;
    description:string;
    status:TaskStatus;
    priority:Priority;
    microTasks:MicroTask[];
}

export interface Goal {
    id:string;
    title:string;
    description:string;
    tasks:Task[];
}