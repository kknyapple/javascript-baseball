const MissionUtils = require("@woowacourse/mission-utils");

class View {
  model;

  constructor(model) {
    this.model = model;
  }

  printStart() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  printRestartGame(callback) {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (code) => {
        callback(code);
      }
    );
  }
}

module.exports = View;
