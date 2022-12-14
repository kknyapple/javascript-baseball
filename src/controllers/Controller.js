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

module.exports = Controller;
