import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";
import "../../assets/styles/TaskList.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";

const TaskList = () => {
  //Use State for Presenting Tasks
  const [tasks, setTasks] = useState([]);
  //Use State for Task Editing
  const [editingTask, setEditingTask] = useState(null);
  //Use State for Taking Values
  const [editForm, setEditForm] = useState({
    name: "",
    description: "",
    priority: "",
    dueDate: "",
    status: "",
  });

  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    description: yup.string().required("Description is required"),
    priority: yup.string().required("Priority is required"),
    dueDate: yup.date().required("Due Date is required"),
  });

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/tasks");
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  //Rendering When adding Tasks
  const handleFormSubmit = () => {
    fetchTasks();
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setEditForm({
      name: task.name,
      description: task.description,
      priority: task.priority,
      dueDate: task.dueDate,
      status: task.status,
    });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmitEdit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate(editForm);
      const response = await axios.put(
        `http://localhost:5000/tasks/${editingTask.id}`,
        editForm
      );
      const updatedTask = response.data;
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === updatedTask.id ? updatedTask : task
        )
      );
      setEditingTask(null);
      toast.success("Task Updated Successfully!");
    } catch (error) {
      console.error("Error updating task:", error);
      toast.error("Failed to update task.");
    }
  };

  const handleDelete = async (taskId) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${taskId}`);
      setTasks(tasks.filter((task) => task.id !== taskId));
      toast.success("Task Deleted Successfully!");
    } catch (error) {
      console.error("Error deleting task:", error);
      toast.error("Failed to delete task.");
    }
  };

  const handleToggle = async (taskId) => {
    try {
      const task = tasks.find((task) => task.id === taskId);
      const updatedTask = {
        ...task,
        status: task.status === "completed" ? "pending" : "completed",
      };
      await axios.put(`http://localhost:5000/tasks/${taskId}`, updatedTask);
      setTasks((prevTasks) =>
        // Update the local state with the new status of the task
        prevTasks.map((task) => (task.id === taskId ? updatedTask : task))
      );
    } catch (error) {
      console.error("Error toggling task status:", error);
    }
  };

  return (
    <div>
      <TaskForm onSubmit={handleFormSubmit} />
      {/*  */}
      <div>
        <h2 className="Title">All Todos</h2>
      </div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={() => handleEdit(task)}
          onDelete={() => handleDelete(task.id)}
          onToggle={() => handleToggle(task.id)}
        />
      ))}
      {editingTask && (
        <div className="edit-form">
          <h2>Edit Task</h2>
          <form onSubmit={handleFormSubmitEdit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={editForm.name}
                onChange={handleFormChange}
              />
            </div>
            <div>
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                value={editForm.description}
                onChange={handleFormChange}
              />
            </div>
            <div>
              <label htmlFor="priority">priority:</label>
              <select
                id="priority"
                name="priority"
                value={editForm.priority}
                onChange={handleFormChange}
              >
                <option value="High">High</option>
                <option value="Medium"> Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
            <div>
              <label htmlFor="dueDate">Due Date:</label>
              <input
                type="date"
                id="dueDate"
                name="dueDate"
                value={editForm.dueDate}
                onChange={handleFormChange}
              />
            </div>
            <div>
              <label htmlFor="status">Status:</label>
              <select
                id="status"
                name="status"
                value={editForm.status}
                onChange={handleFormChange}
              >
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <button type="submit" onSubmit={handleFormSubmitEdit}>
              Save
            </button>
            <button type="button" onClick={() => setEditingTask(null)}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default TaskList;
