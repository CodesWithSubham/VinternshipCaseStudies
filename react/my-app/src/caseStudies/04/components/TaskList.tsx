import { useState } from "react";
import useTaskStore from "../store/taskStore";

const TaskList = () => {
  const [input, setInput] = useState("");
  const tasks = useTaskStore((s) => s.tasks);
  const addTask = useTaskStore((s) => s.addTask);
  const toggleTask = useTaskStore((s) => s.toggleTask);

  return (
    <div>
      <h3>Tasks</h3>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="New Task"
      />
      <button onClick={() => { addTask(input); setInput(""); }}>
        Add
      </button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              {task.title}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
