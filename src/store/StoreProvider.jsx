import React, { createContext, useEffect, useState } from 'react';
export const StoreContext = createContext(null);
const URL = "http://localhost:3000/React_To_Do/data/tasks.json";

const StoreProvider = ({ children }) => {
  const [tasks, setTasks] = useState(null);
  const [singleTask, setSingleTask] = useState(false);
  const [taskAge, setTaskAge] = useState(undefined);
  const [timeBetween, setTimeBetween] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);

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
        setIsLoaded(true);
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
        singleTask,
        setSingleTask,
        taskAge,
        setTaskAge,
        timeBetween,
        setTimeBetween,
        isLoaded,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}
export default StoreProvider;