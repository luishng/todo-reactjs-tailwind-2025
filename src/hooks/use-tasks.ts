import useLocalStorage from "use-local-storage";
import { TASKS_KEY, TaskState, type Task } from "../models/task";
import { useEffect, useState } from "react";
import { delay } from "../helpers/utils";

export default function useTasks() {
  const [tasksData] = useLocalStorage<Task[]>(TASKS_KEY, [])
  const [tasks, setTasks] = useState<Task[]>([])
  const [isLoadingTasks, setIsLoadingTasks] = useState(true)

  async function fetchTasks() {
    if(isLoadingTasks) {
      await delay(2000);
      setIsLoadingTasks(false)
    }

    setTasks(tasksData)
  }

  useEffect(() => {
    fetchTasks();
  }, [tasksData])

  return {
    tasks,
    createdTasksCount: tasks.filter((task) => task.state === TaskState.Created).length,
    concluedTasksCount: tasks.filter((tasks) => tasks.concluded).length,
    isLoadingTasks,
  }
}