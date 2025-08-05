import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../assets/styles/TaskForm.css";

const TaskForm = ({ task, onSubmit }) => {
  const initialValues = task || {
    name: "",
    description: "",
    priority: "Low",
    dueDate: "",
    status: "pending",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    dueDate: Yup.date().required("Required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await axios.post("http://localhost:5000/tasks", values);
      toast.success("Task Added Successfully!");
      resetForm();
      onSubmit();
    } catch (error) {
      console.error("Error submitting task:", error);
    }
  };

  return (
    <section className="task-form-section" id="add-t-section">
      <div className="task-form-text">
        <h2>Add New Task</h2>
        <p>Fill in the details below to add a new task.</p>
      </div>
      <div className="task-form-container">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="task-form">
            <Field type="text" id="name" name="name" placeholder="Task Name" />
            <ErrorMessage name="name" component="div" className="error" />

            <Field
              type="text"
              id="description"
              name="description"
              placeholder="Description"
            />
            <ErrorMessage
              name="description"
              component="div"
              className="error"
            />

            <Field as="select" id="priority" name="priority">
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </Field>
            <ErrorMessage name="priority" component="div" className="error" />

            <Field
              type="date"
              id="dueDate"
              name="dueDate"
              placeholder="Due Date"
            />
            <ErrorMessage name="dueDate" component="div" className="error" />

            <Field as="select" id="status" name="status">
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </Field>
            <ErrorMessage name="status" component="div" className="error" />

            <button type="submit" className="submit-btn">
              Add Task
            </button>
          </Form>
        </Formik>
      </div>
      <ToastContainer />
    </section>
  );
};

export default TaskForm;
