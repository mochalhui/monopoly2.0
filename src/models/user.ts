let id = 1; // 自增id

export default class User {
  userName: string; // 用户名
  id: number; // 用户id
  stopCount: number;
  moneySum: number;
  eachCoin: number;
  image: string;
  currentStep: number;
  gridArea: string;

  constructor({
    userName,
    moneySum,
    eachCoin,
    image,
  }: {
    userName: string,
    moneySum: number,
    eachCoin: number,
    image: string,
  }) {
    this.userName = userName;
    this.id = id++;
    this.stopCount = 0;
    this.moneySum = moneySum;
    this.eachCoin = eachCoin;
    this.image = image;
    this.currentStep = 0;
    this.gridArea = '1/1/1/2'
  }
  changeMoney(range: number) {
    // 增减钱
    this.moneySum = this.moneySum + range;
  }
  changeEachMoney(range: number) {
    // 每回合变多少钱
    this.eachCoin = this.eachCoin + range;
  }
  moveTo(num: number) {
    this.currentStep += num;
    const gridStr = this.gridArea;
    const gridArr = gridStr.split('/').map(Number);
    if (gridArr[2] === 1) {
      const tempColumn = gridArr[3] + num;
      if (gridArr[2] === 1) {
        if (tempColumn < 14) {
          gridArr[3] = tempColumn;
          gridArr[1] = tempColumn - 1;
        } else {
          const diffColumn = tempColumn - 13;
          gridArr[1] = 12;
          gridArr[3] = 13;
          gridArr[0] = gridArr[0] + diffColumn;
          gridArr[2] = gridArr[0];
        }
      }
    } else if (
      gridArr[3] === 13 &&
      gridArr[0] !== 9
    ) {
      const tempRow = gridArr[2] + num;
      if (tempRow < 10) {
        gridArr[2] = tempRow;
        gridArr[0] = tempRow;
      } else {
        const diffRow = tempRow - 8;
        gridArr[0] = 9;
        gridArr[2] = 9;
        gridArr[1] = 13 - diffRow;
        gridArr[3] = gridArr[1] + 1;
      }
    } else if (
      gridArr[0] === 9 &&
      gridArr[1] !== 1
    ) {
      const tempColumn = gridArr[1] - num;
      if (tempColumn > 0) {
        gridArr[1] = tempColumn;
        gridArr[3] = gridArr[1] + 1;
      } else {
        gridArr[0] = 9 + tempColumn - 1;
        gridArr[2] = gridArr[0];
        gridArr[1] = 1;
        gridArr[3] = 2;
      }
    } else {
      const tempRow = gridArr[0] - num;
      if (tempRow > 0) {
        gridArr[0] = tempRow;
        gridArr[2] = tempRow;
      } else {
        gridArr[0] = 1;
        gridArr[2] = 1;
        gridArr[1] = -tempRow + 2;
        gridArr[3] = gridArr[1] + 1;
      }
    }
    this.gridArea = gridArr.join("/").toString();
  }
 
}