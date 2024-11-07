import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DashboardPage from "./components/DashboardPage";
import React from "react";

import { Auth0Provider } from '@auth0/auth0-react';
// For Notifications
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// minified version is also included
import "react-toastify/dist/ReactToastify.min.css";
import About from "./components/About";

import PrivateRoute from "./components/PrivateRoute";
// import Form from "./components/Form"; // Adjust this based on the actual file pathz

const FetchedContext = createContext();

function App() {
// Setting Tasks
  const [tasks, setTasks] = useState([]);
  // For Rendering Task Description
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [descriptionData, setDescriptionData] = useState({})

  // Showing UserAccount and Notification
  const [openUserAccount, setOpenUserAccount] = useState(false);

  // Setting Data to Local Storage
  const setDataToLocalStorage = (data) => {
    localStorage.setItem("tasks", JSON.stringify(data));
  };

  // API request to Fetch Tasks
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const data = await response.json();
        setTasks(data);
        setDataToLocalStorage(data);
      } catch (error) {
        notify("Error Fetching Tasks from API!", "error")
        console.log("Error Fetching Tasks!", error);
      }
    };
    // Storing Task in LOcal storage, if Doesnt exists then creating
    const storedTasks = JSON.parse(localStorage.getItem("tasks"))
    if (storedTasks && storedTasks.length>0) {
      setTasks(storedTasks);
    } else {
      fetchData();
    }
  }, []);


  // Deleting Task
  const deleteTask = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
    let updatedTask = tasks.filter((task)=>task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(updatedTask));
    setTasks(JSON.parse(localStorage.getItem('tasks')))
    notify("Task Deleted SuccessFully!","success")
    isDescriptionOpen && setIsDescriptionOpen(false);
  };

  // Function to show description
    const showDescription = (id)=>{
      setIsDescriptionOpen(!isDescriptionOpen)
      const updatedDesc = tasks.find((task) => task.id === id);
      setDescriptionData(updatedDesc)
    }

// Configured Notification
    const notify = (msg,type) => {
      if(type==="success"){
        toast.success(msg);
      }else{
        toast.error(msg);
      }
    }
  return (
    // Using Context API for data transfer

    <Auth0Provider
    domain="dev-d4u2gfxqyhg4cb11.us.auth0.com"
    clientId="JOh9J3owLjszb7ls8l30GDGq2JNt81Kg"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >

 
    <FetchedContext.Provider
      value={{
        tasks,
        setTasks,
        deleteTask,
        isDescriptionOpen, 
        setIsDescriptionOpen,
        showDescription,
        descriptionData,
        setDescriptionData,
        notify,
        openUserAccount,
        setOpenUserAccount
      }}
    >
      <div className="App">

       
      <ToastContainer />
        {/* <Home/> */}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/about" element={<About/>}/>
            <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />
          </Routes>
        </Router>

 
      </div>
    </FetchedContext.Provider>
    </Auth0Provider>
  );
}

export default App;
export { FetchedContext };
