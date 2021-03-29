import React, { createContext, useEffect, useState } from 'react'

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
  const [tasks, setTasks] = useState(null);

  const [taskName, setTaskName] = useState("");
  const [createDate, setCreateDate] = useState("");
  const [taskPriority, setTaskPriority] = useState("");
  const [taskAddInfo, setTaskAddInfo] = useState("");
  const [doUntil, setDoUntil] = useState("");

  const [singleTask, setSingleTask] = useState(false);
  const [taskAge, setTaskAge] = useState(undefined);
  const [timeBetween, setTimeBetween] = useState(undefined);

  const [isLoading, setIsLoading] = useState(false);
  const URL = "http://localhost:3000/React_To_Do/data/tasks.json";

  const fetchData = () => {
    fetch(URL)
      .then(response => {
        if (response.ok) {
          return response
        }
        throw Error(response.status);
      })
      .then(response => response.json())
      .then(data => {
        setTasks(data.tasks);
        setIsLoading(true);
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <StoreContext.Provider
      value={{
        tasks,
        setTasks,
        taskName,
        setTaskName,
        taskPriority,
        setTaskPriority,
        createDate,
        setCreateDate,
        taskAddInfo,
        setTaskAddInfo,
        doUntil,
        setDoUntil,
        singleTask,
        setSingleTask,
        taskAge,
        setTaskAge,
        timeBetween,
        setTimeBetween,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </StoreContext.Provider>
  )

}

export default StoreProvider;