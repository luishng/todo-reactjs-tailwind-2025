import useLocalStorage from "use-local-storage";
import { TASKS_KEY, type Task } from "../models/task";

export default function useTasks() {
  const [tasks] = useLocalStorage<Task[]>(TASKS_KEY, [])

  return {
    tasks,
    tasksCount: tasks.length,
    concluedTasksCount: tasks.filter((tasks) => tasks.concluded).length
  }
}