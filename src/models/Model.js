const MissionUtils = require("@woowacourse/mission-utils");

class Model {
  computerNumber;
  computerNumber;

  constructor() {
    this.computerNumber = [];
    this.inputNumber = [];
    this.result = [];
  }

  resetComputerNumber() {
    this.computerNumber = [];
  }

  setComputerNumber() {
    while (this.computerNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computerNumber.includes(number)) {
        this.computerNumber.push(number);
      }
    }
    this.computerNumber = [...this.computerNumber.join("").toString()];
  }

  getComputerNumber() {
    console.log(this.computerNumber);
    return this.computerNumber;
  }

  setInputNumber(number) {
    this.inputNumber = [...number];
  }

  getInputNumber() {
    return this.inputNumber;
  }

  setResult([strike, ball]) {
    this.result = [strike, ball];
  }

  getResult() {
    return this.result;
  }
}

// const model = new Model();
// model.setComputerNumber();
// model.getComputerNumber();

module.exports = Model;
