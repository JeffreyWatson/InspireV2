import { appState } from "../AppState.js"
import { Task } from "../Models/Task.js"
import { tasksApi } from "./ApiService.js"

class TasksService {
  async completeTasks(id) {
    let task = appState.tasks.find(t => t.id == id)
    // @ts-ignore
    task.completed = !task.completed
    // @ts-ignore
    await tasksApi.put(task.id, task)
    appState.tasks = appState.tasks

  }
  async deleteTasks(id) {
    const res = await tasksApi.delete(id)
    appState.tasks = appState.tasks.filter(t => t.id != id)
  }
  async addTasks(taskData) {
    const res = await tasksApi.post('', taskData)
    appState.tasks = [...appState.tasks, new Task(res.data)]
  }
  async getTasks() {
    const res = await tasksApi.get()
    appState.tasks = res.data.map(t => new Task(t))
    console.log(res.data);
  }

}

export const tasksService = new TasksService()