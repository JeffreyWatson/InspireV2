import { generateId } from "../Utils/generateId";

export class Task {
  constructor(data) {
    this.id = data.id || generateId()
    this.completed = data.completed || false
    this.user = data.user
    this.description = data.description
  }
}