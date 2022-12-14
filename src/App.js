const Model = require("./models/Model");
const View = require("./views/View");
const Controller = require("./controllers/controller");

class App {
  play() {
    const model = new Model();
    const view = new View(model);

    const controllers = new Controller(view, model);

    controllers.game();
  }
}

const app = new App();
app.play();

module.exports = App;
