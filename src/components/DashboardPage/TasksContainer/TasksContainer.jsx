import React, { useState, useEffect } from "react";
import "./TasksContainer.styles.css";
import { Link } from "react-router-dom";
import plus from "../../../assets/svg/plus.svg";
import Task from "../Task";

const TasksContainer = () => {
  const [tasks, setTasks] = useState([]);

  const setDataToLocalStorage = (data) => {
    localStorage.setItem('tasks', JSON.stringify(data));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await response.json();
        setTasks(data);
        setDataToLocalStorage(data);
      } catch (error) {
        console.log("Error Fetching Tasks!", error);
      }
    };

    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    } else {
      fetchData();
    }
  }, []);

  const [isCompletedTab, setIsCompletedTab] = useState(false);
  const showPending = () => {
    setIsCompletedTab(false);
  };

  const showCompleted = () => {
    setIsCompletedTab(true);
  };
  return (
    <div className="tasks-main-container light-glass">
      <div className="tasks-category light-glass">
        <Link className="tasks-category-item active-item" to="/">
          All
        </Link>
        <Link className="tasks-category-item" to="/">
          Personal
        </Link>
        <Link className="tasks-category-item" to="/">
          Work
        </Link>
        <Link className="tasks-category-item" to="/">
          Events
        </Link>
      </div>
      <div className="container-header">
        <div className="heading">
          <div className="heading-tasks">Tasks</div>
          <div className="date">August 23, 2023</div>
        </div>

        <div className="pen-comp-toggler light-glass">
        <div
            className={`pending-btn ${isCompletedTab ? "" : "active-item"}`}
            onClick={showPending}
          >
            Pending
          </div>
          <div
            className={`complete-btn ${isCompletedTab ? "active-item" : ""}`}
            onClick={showCompleted}
          >
            Completed
          </div>
        </div>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search" className="search-bar" />
        <span>Search</span>
      </div>

      <div className="tasks-container">
        {/* Conditional rendering for pending and completed tasks */}
        {isCompletedTab
          ? tasks
              .filter((task) => task.completed === true)
              .map((task, index) => {
                return <Task key={index} value={task} />;
              })
          : tasks
              .filter((task) => task.completed === false)
              .map((task, index) => {
                return <Task key={index} value={task} />;
              })}
      </div>
      <div className="add-tasks">
        <img src={plus} alt="" />
      </div>
    </div>
  );
};

export default TasksContainer;
