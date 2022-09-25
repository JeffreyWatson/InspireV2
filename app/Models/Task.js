import { generateId } from "../Utils/generateId.js";

export class Task {
  constructor(data) {
    this.id = data.id || generateId()
    this.completed = data.completed || false
    this.user = data.user
    this.description = data.description
  }

  get Template() {
    return `
    <div>
    <input type="checkbox" ${this.completed ? 'checked' : ''} onclick="app.tasksController.completeTasks('${this.id}')" <li>${this.description}<span><i class="mdi mdi-delete" onclick="app.tasksController.deleteTasks('${this.id}')"></i></span></li>
    </div>
    `
  }
}