import store from '../store/index'
let vm;
setTimeout(() => {
  vm=store.state.vm;
}, 0);

class item{
  constructor(name,introduce){
     this.name=name;
     this.amount=1;
     this.introduce=introduce;
  }
  add(){
    this.amount++;
  }
  reduce(){
    this.amount--;
  }
  addToPack(){
    if(!vm.items[this.name]){
      vm.$set(vm.items,this.name,this)
    }
    else{
      vm.items[this.name].amount+=this.amount;
    }

  }
  megs(meg){
    vm.megs.push(meg);
  }
}
class food extends item{
  constructor(setting){
    super(setting.name,setting.introduce);
    this.foodProp=setting.foodProp
  }
  func(){
    if(this.amount>=1){
       for (let [key,value] of Object.entries(this.foodProp)) {
            let keys=key.split('|')
            if(keys[1]==="+"){
              vm.status[keys[0]]+=value;

            }else{
              vm.status[keys[0]]-=value
            }
       }

      this.amount--;
    }
  }
}
class fish extends food{
  constructor(setting){
    super(setting);
    this.speed=setting.speed,
    this.complex=setting.complex
    this.meg=setting.meg
  }
}

let resourceList=[
  '木材','石材','草药'
]


class resource extends item{
  constructor(setting){
    super(setting.name,setting.introduce);
  }
  func(){
   console.log('这只是一个资源,要发挥效用请合成');
  }
}
function createResource(filterList=[]){
  for (const ele of filterList) {      //f['木材',石材]  in r['木材','石材','草药'] ->r['草药']
    let findResult=resourceList.indexOf(ele);
    if(findResult!=-1){
     resourceList.splice(findResult,1)
    }
  }
  let rLength=resourceList.length;
  let selectOne=Math.floor(Math.random()*rLength);
  selectOne=resourceList[selectOne];
  return new resource({name:selectOne,introduce:'资源,用于合成'})
}
class tool extends item{
  constructor(setting){
    super(setting);
  }
  func(){
   console.log('这是一个工具,目前还在开发工具能力中.....');
  }
}
export {fish,food,createResource,tool,resourceList}
