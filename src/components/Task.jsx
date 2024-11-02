import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask, toggleTaskStatus } from "../redux/taskSlice";

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleSaveEdit = () => {
    if (newDescription.trim()) {
      dispatch(editTask({ id: task.id, description: newDescription }));
      setIsEditing(false);
    }
  };

  return (
    <div className="container"
      style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
    >
      <input
      className="checked"
        type="checkbox"
        checked={task.isDone}
        onChange={() => dispatch(toggleTaskStatus(task.id))}
      />
      {isEditing ? (
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
      ) : (
        <span style={{ textDecoration: task.isDone ? "line-through" : "none" }}>
          {task.description}
        </span>
      )}
      {isEditing ? (
        <button className="save" onClick={handleSaveEdit}>Save</button>
      ) : (
        <button className="edit" onClick={() => setIsEditing(true)}>Edit</button>
      )}
    </div>
  );
}

export default Task;
