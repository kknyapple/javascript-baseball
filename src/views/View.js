const MissionUtils = require("@woowacourse/mission-utils");

const Model = require("../models/Model");
const { ERROR } = require("../constant/error");

class View {
  model;

  constructor(model) {
    this.model = model;
  }

  isThreeDigitNumber(number) {
    if (!isNaN(number)) return number.length === 3 ? true : false;
    else return false;
  }

  isOneToNine(number) {
    return /^[1-9]+$/.test(number);
  }

  isDifferentDigitNumber(number) {
    const numArr = [...String(number)];

    return new Set(numArr).size == numArr.length ? true : false;
  }

  validateInputNumber(number) {
    if (
      this.isThreeDigitNumber(number) &&
      this.isOneToNine(number) &&
      this.isDifferentDigitNumber(number)
    ) {
      return true;
    } else {
      throw new Error(ERROR.INPUT.NUMBER);
    }
  }

  printStart() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      this.model.setInputNumber(input);
      console.log(this.model.getInputNumber());
      this.validateInputNumber(input);
    });
  }
}

module.exports = View;
