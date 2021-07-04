let id = 1; // 自增id

class User {
    userName: string; // 用户名
    id: number; // 用户id
    constructor(userName: string) {
        this.userName = userName;
        this.id = id++;
    }
}

