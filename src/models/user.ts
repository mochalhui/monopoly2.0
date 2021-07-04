let id = 1; // 自增id

export default class User {
    userName: string; // 用户名
    id: number; // 用户id
    stopCount: number;
    moneySum: number;
    eachCoin: number;
    image: string;
    currentStep: number;

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
        // todo: //满一圈的逻辑
        this.currentStep += num;
    }
}
