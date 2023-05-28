function Task({ text, category, onDelete }) {
  const handleClick = (text) => {
    onDelete(text);
  };
  return (
    <li className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => handleClick(text)}>
        X
      </button>
    </li>
  );
}

export default Task;
