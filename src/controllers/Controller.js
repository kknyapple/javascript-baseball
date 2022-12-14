const Model = require("../models/Model");
const View = require("../views/View");

class Controller {
  view;
  model;

  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  game() {
    this.view.printStart();
  }
}

const model = new Model();
const view = new View(model);
const controller = new Controller(view, model);

controller.game();

module.exports = Controller;
