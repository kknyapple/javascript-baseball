const MissionUtils = require("@woowacourse/mission-utils");

class Model {
  computerNumber;
  computerNumber;

  constructor() {
    this.computerNumber = [];
    this.inputNumber = [];
  }

  setComputerNumber() {
    while (this.computerNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computerNumber.includes(number)) {
        this.computerNumber.push(number);
      }
    }
  }

  getComputerNumber() {
    console.log(this.computerNumber);
    return this.computerNumber;
  }
}

const model = new Model();
model.setComputerNumber();
model.getComputerNumber();

module.exports = Model;
