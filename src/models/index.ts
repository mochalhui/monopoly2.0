import createProvider from '@ad/vue-hook-model';
import AccessControl from './contoler';
import User from './user';
import { reactive, computed, watch } from '@vue/composition-api'
import { areaAddressList, behaviour, updateCost } from './interface';
const getN = () => {
    // TODO:zzh 
    return Math.ceil(Math.random() * 6);
}
export const {
    createContext,
    useContext,
} = createProvider(() => {
    const controller = reactive(new AccessControl());
    const user2 = reactive(new User({
        userName: '大聪明',
        moneySum: 10000,
        eachCoin: 300,
        image: '',
    }));

    const user1 = reactive(new User(
        {
            userName: '爱德华',
            moneySum: 8000,
            eachCoin: 400,
            image: ''
        }
    ));
    controller.activeUser(user1.id); // 激活用户1
    controller.setActiveBehavior('move');

    // 用户列表
    const userList = computed(() => [
        user1,
        user2,
    ])
    // 当前活跃用户
    const currentUser = computed(() => userList.value.find(item => item.id === controller.currentUserId))
    // 用户1是否活跃
    const isUser1Active = computed(() => {
        return currentUser.value?.id === user1.id;
    })

    // 展示在页面的详细信息
    const pageInfo = computed(() => {
        return {
            userName: currentUser.value?.userName,
            behaviour: behaviour[controller.activeBehavior],
        }
    })

    watch(() => user1.currentStep, (step) => {
        // 每次走动都到这里
        const owner = areaAddressList[step].owner;
        const houseLevel = areaAddressList[step].houseLevel;
        if (owner) {
            // 消费酒店
            if (owner === user2.id) {
                // TODO: 考虑级别
                user2.changeMoney(100);
                user1.changeMoney(-200);
                // 如果是单纯的移动，结束后把控制权给另一个用户
                controller.activeUser(user2.id);
            } else {
                // 房子升级
                if (houseLevel && houseLevel < 3 && user1.moneySum >= updateCost) {
                    controller.setActiveBehavior('update');
                } else {
                    // 不能升级的时候，控制权给另一个人
                    controller.activeUser(user2.id);
                }
            }
        } else {
            controller.setActiveBehavior('buy');
        }
    })

    // 谁的钱小于0游戏都终止
    watch(() => user1.moneySum, money =>{
        if(money < 0) {
            alert(user1.userName);
        }
    })
    watch(() => user2.moneySum, money =>{
        if(money < 0) {
            alert(user2.userName);
        }
    })

    // ArrowDown w s ArrowUp
    document.addEventListener('keydown', (e) => {
        if (!currentUser.value || !controller.activeBehavior) {
            return;
        }
        // 用户一逻辑
        if (isUser1Active.value) {
            if (e.key === 'w') {
                if (controller.activeBehavior === 'move') {
                    user1.moveTo(getN());
                    // 移动完了，看看对应step有没有需要特殊按键的
                    controller.setActiveBehavior('');
                } else if (controller.activeBehavior === 'buy') {
                    areaAddressList[user1.currentStep].owner = user1.id;
                } else if (controller.activeBehavior === 'update') {
                    areaAddressList[user1.currentStep].houseLevel!++;
                }
                // 无论按了什么最终都把控制器交给另一个用户
                controller.activeUser(user2.id);
            } else if (e.key === 's') {
                controller.activeUser(user2.id);
            }
        }
        // 用户二逻辑 先注释掉，后面写
        // else {
        //     if (e.key === 'ArrowUp') {
        //         user2.moveTo(getN());
        //     }
        // }
    })

    return {
        state: {
            controller,
            user1,
            user2,
            userList,
            areaAddressList,
            pageInfo,
        },
        reducers: {

        },
        effects: {

        }
    }
})