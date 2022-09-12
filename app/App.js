import { ClocksController } from "./Controllers/ClocksController.js";
import { ImagesController } from "./Controllers/ImagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { TasksController } from "./Controllers/TasksController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
import { WeathersController } from "./Controllers/WeathersController.js";

class App {
  // valuesController = new ValuesController();
  imagesController = new ImagesController();
  weathersController = new WeathersController();
  clocksController = new ClocksController();
  quotesController = new QuotesController();
  tasksController = new TasksController();

}

window["app"] = new App();
