import type { Goal } from "../types";

export const initialGoals: Goal[] = [
    {
        id:"goal-1",
        title:"Learn React + TypeScript",
        description:"Master the fundamentals for building modern to create modern applications.",
        tasks:[
            {
                id:"task-1",
                title:"Learn Components",
                description:"Understand how React components work.",
                status:"In_progress",
                priority:"high",
                microTasks:[
                    {
                        id:"micro-1",
                        title:"Study JSX",
                        completed:true
                    },
                    {
                        id:"micro-2",
                        title:"Create a functional component",
                        completed:true
                    },
                    {
                        id:"micro-3",
                        title:"Practice Loops",
                        completed:false
                    },
                    {
                        id:"micro-4",
                        title:"Create an exercise",
                        completed:false
                    }
                ]
            },
            {
                id:"task-2",
                title:"Learn useState",
                description:"Understand state managements in React.",
                status:"Pending",
                priority:"high",
                microTasks:[
                    {
                        id:"micro-5",
                        title:"Study useState",
                        completed:false
                    },
                    {
                        id:"micro-6",
                        title:"Create a counter",
                        completed:true
                    },
                    {
                        id:"micro-7",
                        title:"Create a form",
                        completed:false
                    },
                ]
            }
        ]
    }
]