import { appState } from "../AppState"
import { Task } from "../Models/Task"
import { tasksApi } from "./ApiService"

class TasksService {
  async getTasks() {
    const res = await tasksApi.get()
    appState.tasks = res.data.map(t => new Task(t))
  }

}

export const tasksService = new TasksService()