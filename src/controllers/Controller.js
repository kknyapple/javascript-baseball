const MissionUtils = require("@woowacourse/mission-utils");

const Model = require("../models/Model");
const View = require("../views/View");
const { ERROR } = require("../constant/error");

class Controller {
  view;
  model;

  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.result = "";
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

  compareNumber(input, computer) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      (input[i] === computer[i] && strike++) ||
        (input[i] !== computer[i] && input.includes(computer[i]) && ball++);
    }
    this.model.setResult([strike, ball]);
  }

  setResultMessage([strike, ball]) {
    (this.result = strike === 3 && "3스트라이크") ||
      (this.result =
        strike !== 0 && ball !== 0 && `${ball}볼 ${strike}스트라이크`) ||
      (this.result = strike === 0 && ball !== 0 && `${ball}볼`) ||
      (this.result = strike !== 0 && ball === 0 && `${strike}스트라이크`) ||
      (this.result = strike === 0 && ball === 0 && "낫싱");
  }

  getResultMessage() {
    return this.result;
  }

  startGame() {
    this.view.printStart();
    this.model.setComputerNumber();
    console.log(this.model.getComputerNumber());
  }

  playGame() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      this.model.setInputNumber(input);
      console.log(this.model.getInputNumber());
      this.validateInputNumber(input);
      this.compareNumber(
        this.model.getComputerNumber(),
        this.model.getInputNumber()
      );
      this.setResultMessage(this.model.getResult());
      MissionUtils.Console.print(this.getResultMessage());

      this.playGame();
    });
  }

  game() {
    this.startGame();
    this.playGame();
  }
}

module.exports = Controller;
