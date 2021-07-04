
import { actions } from './interface';
export default class AccessControl {
    currentUserId: null | number;
    activeBehavior: actions; // 当前激活行为

    constructor() {
        this.currentUserId = null;
        this.activeBehavior = '';
    }
    activeUser(id: number) {
        this.currentUserId = id;
        this.setActiveBehavior('move');
    }
    setActiveBehavior(val: actions) {
        this.activeBehavior = val;
    }
}