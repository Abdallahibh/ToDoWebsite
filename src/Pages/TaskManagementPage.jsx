import React from "react";
import TaskList from "../Components/Tasks/TaskList";
import FloatingButton from "../Components/Layout/FloatingButton";
import "../assets/styles/TaskManagementPage.css";

const TaskManagementPage = () => {
  return (
    <div id="add-t-section">
      <h2 className="Title">Task Management</h2>
      <FloatingButton />
      <TaskList />
    </div>
  );
};

export default TaskManagementPage;
