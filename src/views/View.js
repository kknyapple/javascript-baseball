const MissionUtils = require("@woowacourse/mission-utils");

class View {
  model;

  constructor(model) {
    this.model = model;
  }

  printStart() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }
}

module.exports = View;
