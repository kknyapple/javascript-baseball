const MissionUtils = require("@woowacourse/mission-utils");

const Model = require("../models/Model");

class View {
  model;

  constructor(model) {
    this.model = model;
  }

  printStart() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      this.model.setInputNumber(input);
      console.log(this.model.getInputNumber());
    });
  }
}

const model = new Model();
const view = new View(model);
view.printStart();

module.exports = View;
