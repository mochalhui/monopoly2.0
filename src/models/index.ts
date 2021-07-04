import createProvider from '@ad/vue-hook-model';
import AccessControl from './contoler';
import User from './user';
import { reactive, computed, watch } from '@vue/composition-api'
import { areaAddressList, behaviour } from './interface';
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
        const owner = areaAddressList[step].owner;
        if (owner) {
            // 消费酒店
            if (owner === user2.id) {
                // TODO: 考虑级别
                user2.changeMoney(100);
                user1.changeMoney(-200)
            } else {
                controller.setActiveBehavior('update');
                // TODO: // 房子升级
            }
        } else {
            controller.setActiveBehavior('buy');
            // TODO: 购买地
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
                user1.moveTo(getN());
            }
        }
        // 用户二逻辑
        else {
            if (e.key === 'ArrowUp') {
                user2.moveTo(getN());
            }
        }
        controller.setActiveBehavior('');
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