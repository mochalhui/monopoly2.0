

class AccessControl {
    currentUserId: null | number;

    constructor() {
        this.currentUserId = null;
    }
    activeUser(id: number) {
        this.currentUserId = id;
    }
}