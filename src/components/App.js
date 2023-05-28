import { useState, useEffect } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  console.log(tasks);

  const handleDelete = (text) => {
    const newTasks = tasks.filter((task) => task.text !== text);
    setTasks(newTasks);
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const filteredTasks = (category) => {
    return tasks.filter((task) => {
      if (category === "All") return true;
      return task.category === category;
    });
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        onSelectedCategory={setCategory}
        category={category}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />
      <TaskList tasks={filteredTasks(category)} onDelete={handleDelete} />
    </div>
  );
}

export default App;
