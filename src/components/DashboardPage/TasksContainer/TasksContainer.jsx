import React, { useState,useEffect } from "react";
import "./TasksContainer.styles.css";
import { Link } from "react-router-dom";
import plus from '../../../assets/svg/plus.svg'
import Task from "../Task";

const TasksContainer = () => {

    const [tasks, setTasks] = useState([]);

useEffect(() => {
fetch('https://jsonplaceholder.typicode.com/todos')
.then(response=>{
    return response.json();
})
.then(data=>{
    console.log("Data:", data);
    setTasks(data);
})
.catch(err=>{
    console.log("Error Fetching Tasks!");
})
}, [])

console.log("Tasks:", tasks);
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
                School
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
                <Link className="pending-btn active-item" to="/">
                    Pending
                </Link>
                <Link className="complete-btn" to="/">
                    Completed
                </Link>
            </div>
        </div>
        <div className="search-container">
            <input type="text" placeholder="Search"  className="search-bar"/>
            <span>Search</span>
        </div>

        <div className="tasks-container">
            {tasks.map((task,index)=>{
                return <Task key={index} value ={task}/>
            })}
        </div>
          <div className="add-tasks">
            <img src={plus} alt="" />
          </div>
    </div>
  );
};

export default TasksContainer;