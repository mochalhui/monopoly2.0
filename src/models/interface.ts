import JailImg from '@/assets/监狱.png';
export interface AreaItem {
	id: string;
	gridarea: string;
	areaname: string;
	customProps?: {
		// 超市
		storeGoods?: {
			// 商品列表
			goodsList: [
				// TODO
			]
		},
		suspend?: number; // 停留回纥
		lucky?: boolean; // 是否抽奖，小羽毛
	},
	moneyCost?: number; // 一片地多少钱
	owner?: '' | number; // id或者无
    houseLevel?: 0; // 房子级别
    background?:string; //地皮颜色
    backgroundImg? : string;//特殊地皮img 超市、监狱、医院 等
}

export const createAreaAddressList = (): Array<AreaItem> => [
	{
		id: 'store',
		gridarea: "1/1/1/2",
		areaname: "store 1",
		customProps: {
			//超市特有属性
			storeGoods: {
				goodsList: [],
			}
		},
	},
	{
		id: "1",
		gridarea: "1/2/1/3",
		areaname: " ",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#e6b8af'
	},
	{
		id: "1",
		gridarea: "1/3/1/4",
		areaname: "area1 1000块",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#e6b8af'
	},
	{
		id: "1",
		gridarea: "1/4/1/5",
		areaname: "",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#e6b8af'
	},
	{
		id: "jail",
		gridarea: "1/5/1/6",
		areaname: "",
		customProps: {
			suspend: 2
        },
        backgroundImg: JailImg
       
	},
	{
		id: "2",
		gridarea: "1/6/1/7",
		areaname: "area2",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#f4cccc'
	},
	{
		id: "2",
		gridarea: "1/7/1/8",
		areaname: "1000块",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#f4cccc'
	},
	{
		id: "3",
		gridarea: "1/8/1/9",
		areaname: "",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#fce5cd'
	},
	{
		id: "3",
		gridarea: "1/9/1/10",
		areaname: "area3",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#fce5cd'
	},
	{
		id: "3",
		gridarea: "1/10/1/11",
		areaname: "1000块",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#fce5cd'
	},
	{
		id: "3",
		gridarea: "1/11/1/12",
		areaname: "",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#fce5cd'
	},
	{
		id: "store",
		gridarea: "1/12/1/13",
		areaname: "store 2",
		customProps: {
			storeGoods: {
				goodsList: [],
			}
		}
	},
	{
		id: "4",
		gridarea: "2/12/2/13",
		areaname: "",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#fff2cc'
	},
	{
		id: "4",
		gridarea: "3/12/3/13",
		areaname: 'area4 1000',
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#fff2cc'
	},
	{
		id: "4",
		gridarea: "4/12/4/13",
		areaname: "",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#fff2cc'
	},
	{
		id: "lucky",
		gridarea: "5/12/5/13",
		areaname: "lucky1",
		customProps: {
			lucky: true
		}
	},
	{
		id: "5",
		gridarea: "6/12/6/13",
		areaname: "",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#d9ead3'
	},
	{
		id: "5",
		gridarea: "7/12/7/13",
		areaname: "area5 1000",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#d9ead3'
	},
	{
		id: "5",
		gridarea: "8/12/8/13",
		areaname: "",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#d9ead3'
	},
	{
		id: "store",
		gridarea: "9/12/9/13",
		areaname: "store3",
		customProps: {
			storeGoods: {
				goodsList: [],
			}
		}
	},
	{
		id: "6",
		gridarea: "9/11/9/12",
		areaname: "",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#d0e0e3'
	},
	{
		id: "6",
		gridarea: "9/10/9/11",
		areaname: "area6 1000块",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#d0e0e3'
	},
	{
		id: "6",
		gridarea: "9/9/9/10",
		areaname: "",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#d0e0e3'
	},
	{
		id: "hospital",
		gridarea: "9/8/9/9",
		areaname: "hospital",
		customProps: {
			suspend: 4
		}
	},
	{
		id: "7",
		gridarea: "9/7/9/8",
		areaname: "",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#c9daf8'
	},
	{
		id: "7",
		gridarea: "9/6/9/7",
		areaname: "1000块",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#c9daf8'
	},
	{
		id: "7",
		gridarea: "9/5/9/6",
		areaname: "area7",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#c9daf8'
	},
	{
		id: "7",
		gridarea: "9/4/9/5",
		areaname: "",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#c9daf8'
	},
	{
		id: "lucky",
		gridarea: "9/3/9/4",
		areaname: "lucky2",
		customProps: {
			lucky: true
		}
	},
	{
		id: "8",
		gridarea: "9/2/9/3",
		areaname: "area8 1000",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#cfe2f3'
	},
	{
		id: "store",
		gridarea: "9/1/9/2",
		areaname: "store3",
		customProps: {
			storeGoods: {
				goodsList: [],
			}
		}
	},
	{
		id: "9",
		gridarea: "8/1/8/2",
		areaname: "",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#d9d2e9'
	},
	{
		id: "9",
		gridarea: "7/1/7/2",
		areaname: "1000",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#d9d2e9'
	},
	{
		id: "9",
		gridarea: "6/1/6/2",
		areaname: "area9",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#d9d2e9'
	},
	{
		id: "9",
		gridarea: "5/1/5/2",
		areaname: "",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#d9d2e9'
	},
	{
		id: "bank",
		gridarea: "4/1/4/2",
		areaname: "bank",
	},
	{
		id: "10",
		gridarea: "3/1/3/2",
		areaname: "1000",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#ead1dc'
	},
	{
		id: "10",
		gridarea: "2/1/2/2",
		areaname: "area10",
		moneyCost: 1000,
		owner: '',
        houseLevel: 0,
        background: '#ead1dc'
	},
];

export interface UserInfo {
	userName: string;
	moneySum: number; // 钱数
	eachCoin: number; // 每次多少钱
	image: string; // 头像url
	stopCount: number; // 停留回合
	currentStep: 0; // 当前位置
}

// export const userData: Array<UserInfo> = [
// 	{
// 		userName: "小啵",
// 		moneySum: 10000,
// 		eachCoin: 300,
// 		image: '',
// 		stopCount: 0,
// 	},
// 	{
// 		userName: "胖啵",
// 		moneySum: 10000,
// 		eachCoin: 300,
// 		image: '',
// 		stopCount: 0
// 	},
// ];
export const pass = [//经过房子的属性
	{
		0: () => 0
	},
	{
		1: () => 200,
	},
	{
		2: () => 400,
	},
	{
		3: () => Math.ceil(Math.random() * 100 * 6)
	}
]
export interface luckyList {
	eachCoin: () => number;// 每回合变更金币, number
	coin: number;//  Number 直接给或者扣的钱
	stopTime: number;// 炸弹停留次数
}
// 问号
const asyncList: Array<luckyList> = [{
	eachCoin: () => -100,
	coin: 100,
	stopTime: 100,
}]

// 购买升级
export type actions = 'move' | '' | 'buy' | 'update' | 'store';

export const behaviour: Partial<Record<actions, string>> = {
	move: '移动',
	buy: '买地',
	update: '升级',
	store: '商城购买',
}

export const updateCost = 200; // 升级需要的钱