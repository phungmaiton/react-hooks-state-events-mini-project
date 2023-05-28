import { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const initialFormValue = {
    text: "",
    category: "Code",
  };

  const [formData, setFormData] = useState(initialFormValue);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      text: formData.text,
      category: formData.category,
    };

    onTaskFormSubmit(newTask);
    setFormData(initialFormValue);

    console.log(newTask);
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={formData.text}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={formData.category}
          onChange={handleInputChange}
        >
          {categories.map(
            (category) =>
              category !== "All" && (
                <option key={category} value={category}>
                  {category}
                </option>
              )
          )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
