class fishBox  {
  constructor(setting){
    this.change=setting.change,  //改变方向的几率 即"狡诈程度"
    this.speed=setting.speed, //前进速度
    this.direction= "+", //初始方向
    this.site=0
    this.top=-20/this.speed;
    this.bottom=0
  }
  getNextDirection() {
    let sum = 0,
      factor = 0,
      random = Math.random(),
      setting={
        change:this.change,
        keep:1-this.change
      }
    let set = Object.entries(setting);
    for (const [key, value] of set) {
      sum += value; // 统计概率总和
    }
    random *= sum; // 生成概率随机数
    for (const [key, value] of set) {
      factor += value;
      if (random <= factor) {
        this.toggleDirection(key);
        break;
      }
    }
    return this.direction;
  }
  toggleDirection(key) {
    if (key == "change") {
      if (this.direction == "+") {
        this.direction = "-";
      } else {
        this.direction = "+";
      }
    }
  }
  fishMove(dom) {
    let direction=this.getNextDirection()
    if(direction=="+"){
     this.site--;//site变小在视图上显示的是往上走 ,这与右手系x轴朝下有关系
     if(this.site<=this.top){//触顶侦测
       this.site=this.top;
     }
    }else{
      this.site++;
      if(this.site>=0){//触底侦测
        this.site=0;
      }
    }
    dom.setAttribute('style',`transform:translateY(${this.site*this.speed}rem)`)//移动距离0~20
  }
};
let slideBlock={ //滑块检测，重力算法
  site:0,//初始位置
  speed:0,//初始速度
  gravity:10,//重力系数
  t:0.05,
  dom:null,
  init(dom){
    this.site=0;
    this.speed=0;
    this.gravity=10;
    this.t=0.05
    this.dom=dom
  },
  countSpeed(isPull){
    let t=this.t;
    let g=this.gravity;
    if(isPull==true){
      this.speed-=g*t;
    }
    else{
      this.speed+=g*t;
    }

  },
  countSite(isPull){
    let s=this.site
    let v=this.speed;
    let g=this.gravity;
    let t=this.t;
    if(isPull==true){
      this.site=s+v*t-0.5*g*t*t;//s=s+△s,△s=vo*t+(1/2)gt^2,因为x轴向下，所以这里要用符号
      this.countSpeed(isPull)
    }else{
      this.site=s+v*t+0.5*g*t*t;
      this.countSpeed(isPull)
    }
    this.move();
  },
  move(){
    if(this.site<=-18){
      this.site=-18;
      this.speed=0;
    }
    else if(this.site>=0){
    this.site=0;
    this.speed=0;
    }
    this.dom.setAttribute('style',`transform:translateY(${this.site}rem)`)//移动距离-18` 0
  }
}

export {fishBox,slideBlock};
