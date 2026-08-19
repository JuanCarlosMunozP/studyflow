import { useState } from "react";
import { initialGoals } from "./data/initialData";
import { TaskCard } from "./components/tasks/TaskCard";
import type { Goal } from "./types";

function App() {
  const [goals, setGoals] = useState<Goal[]>(initialGoals);

  const toggleMicroTask = (
    taskId: string,
    microTaskId: string
  ) => {
    setGoals((currentGoals) =>
      currentGoals.map((goal) => ({
        ...goal,
        tasks: goal.tasks.map((task) => {
          if (task.id !== taskId) {
            return task;
          }

          return {
            ...task,
            microTasks: task.microTasks.map(
              (microTask) =>
                microTask.id === microTaskId
                  ? {
                      ...microTask,
                      completed: !microTask.completed,
                    }
                  : microTask
            ),
          };
        }),
      }))
    );
  };

  return (
    <main>
      <h1>StudyFlow</h1>

      {goals.map((goal) => (
        <section key={goal.id}>
          <h2>{goal.title}</h2>

          <p>{goal.description}</p>

          {goal.tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onToggleMicroTask={toggleMicroTask}
            />
          ))}
        </section>
      ))}
    </main>
  );
}

export default App;