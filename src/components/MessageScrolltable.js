
import {food,createResource,fish,fishBox} from './item';
import store from '../store/index'

setTimeout(() => {
  vm=store.state.vm;
}, 0);
let vm=null;
class eventManagement {//随机事件生成器
  constructor(setting, strategy) {
    this.setting = setting;
    this.strategy = strategy;
  }
  start() {
    let sum = 0,
      factor = 0,
      random = Math.random();
    let set = Object.entries(this.setting);

    for (const [key, value] of set) {
      sum += value; // 统计概率总和
    }
    random *= sum; // 生成概率随机数
    for (const [key, value] of set) {
      factor += value;
      if (random <= factor) return this.strategy[key]();
    }
    return null;
  }
}
let boatingEventManagement = new eventManagement(
  {
    nothing: 0.1,
    finding: 0.1
  },
  {
    nothing: function() {

      vm.megs.push("你向前划行，但无事发生,周围依然是茫茫大海");
    },
    finding: function() {
      vm.megs.push("远处出现了一个小圆点,你向前划去,是一座小岛！");
      vm.isFinding=true;
    }
  }
);

let FishingEventManagement = new eventManagement(
  {

    jiyu:0.3,
    luyu:0.3,
  },
  {
    jiyu(){
      let newFish=new fish({
        name:'鲫鱼',
        speed:0.2,
        complex:0.05,
        foodProp:{'hunger|+':5,'thirst|+':1},
        introduce:'我是鲫鱼,可以被吃',
        meg:'突然,鱼竿传来阵阵颤动,你收起鱼竿,钓到鲫鱼'
      })
      //启动钓鱼执行动画
      vm.initFishAnimation(newFish);
    },
    luyu(){
      let newFish=new fish({
        name:'鲈鱼',
        speed:0.2,
        complex:0.05,
        foodProp:{'hunger|+':1,'thirst|+':5},
        introduce:'我是鲈,可以被吃',
        meg:'水面上荡你阵阵波纹,你觉得,是时候了，你猛力收杆,是鲈鱼'
      })
      vm.initFishAnimation(newFish);
    }
  }
);
let exploreIslandManagement=new eventManagement(
  {
    commonEvent:0.5,
    findResource:0.2,
    battle:0.2,
  },
  {
    commonEvent(){
      vm.megs.push('无事发生')
      return '.'
    },
    findResource(){
      let resource=createResource();
      resource.meg=`发现资源: ${resource.name} x${resource.amount}`
      resource.megs(resource.meg)
      resource.addToPack();
      return 'r'
    },
    battle(){
      vm.megs.push('遭遇怪物,开始战斗')
      vm.isBattle=true;
      return 'b'
    }
  }
)

let MessageScrolltable = {
  event: [],
  trigger(eventName) {
    return this.event[eventName].start();
  },
  init(eventName, eventManagement) {
    this.event[eventName] = eventManagement;
  },
};
MessageScrolltable.init("boating", boatingEventManagement);
MessageScrolltable.init("fishing", FishingEventManagement);
MessageScrolltable.init("explore",exploreIslandManagement)
export default MessageScrolltable;
