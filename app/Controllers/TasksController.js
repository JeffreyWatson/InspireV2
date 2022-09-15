import { appState } from "../AppState";
import { tasksService } from "../Services/TasksService";
import { Pop } from "../Utils/Pop";


function _drawTasks() {

}

export class TasksController {

  constructor() {
    appState.on('tasks', _drawTasks)
    this.getTasks()
  }

  async getTasks() {
    try {
      await tasksService.getTasks()
    } catch (error) {
      console.log(error)
      Pop.toast(error.message, 'error')
    }
  }

}