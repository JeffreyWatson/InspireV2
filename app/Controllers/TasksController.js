import { appState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";


function _drawTasks() {
  let tasks = appState.tasks
  let template = ''
  let completed = 0
  let total = 0
  tasks.forEach(t => {
    template += t.Template
    if (t.completed) {
      completed++
    }
    if (t.id) {
      total++
    }
  })
  setText('completed', completed)
  setText('total', total)
  setHTML('tasks', template)
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

  async addTasks() {
    window.event?.preventDefault()
    let form = window.event?.target
    let taskData = {
      // @ts-ignore
      description: form?.description.value
    }
    // @ts-ignore
    form?.reset()
    try {
      await tasksService.addTasks(taskData)
    } catch (error) {
      console.log(error)
      Pop.toast(error.message, 'error')
    }
  }

  async deleteTasks(id) {
    try {
      if (await Pop.confirm('Are you sure you want to trash this task?'))
        await tasksService.deleteTasks(id)
    } catch (error) {
      console.log(error)
      Pop.toast(error.message, 'error')
    }
  }

  async completeTasks(id) {
    try {
      await tasksService.completeTasks(id)
    } catch (error) {
      console.log(error)
      Pop.toast(error.message, 'error')
    }
  }

}