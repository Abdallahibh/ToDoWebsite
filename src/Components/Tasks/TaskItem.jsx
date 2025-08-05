import React from "react";
import axios from "axios";
import "../../assets/styles/TaskItem.css";
import { FaEdit, FaTrash, FaCheck, FaUndo } from "react-icons/fa";

const TaskItem = ({ task, onEdit, onDelete, onToggle }) => {
  const handleToggle = async () => {
    try {
      await axios.patch(`http://localhost:5000/tasks/${task.id}`, {
        status: task.status === "pending" ? "completed" : "pending",
      });
      onToggle();
    } catch (error) {
      console.error("Error toggling task status:", error);
    }
  };

  return (
    <div className="container">
      <div className="task-grid-container">
        <div className="task-item">
          <span className="task-label">Name:</span>
          <span className="task-value">{task.name}</span>
        </div>
        <div className="task-item">
          <span className="task-label">Description:</span>
          <span className="task-value">{task.description}</span>
        </div>
        <div className="task-item">
          <span className="task-label">Priority:</span>
          <span className="task-value">{task.priority}</span>
        </div>
        <div className="task-item">
          <span className="task-label">Due Date:</span>
          <span className="task-value">{task.dueDate}</span>
        </div>
        <div className="task-item">
          <span className="task-label">Status:</span>
          <span className="task-value">{task.status}</span>
        </div>
        <div className="task-buttons">
          <button
            className="icon-button edit-button"
            onClick={() => onEdit(task)}
          >
            <FaEdit />
          </button>
          <button
            className="icon-button delete-button"
            onClick={() => onDelete(task.id)}
          >
            <FaTrash />
          </button>
          <button className="icon-button toggle-button" onClick={handleToggle}>
            {task.status === "pending" ? <FaCheck /> : <FaUndo />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
