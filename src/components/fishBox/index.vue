<template>
<div id="fishWrapper">
  <div id="fishBox" ref="fishBox">
    <div id="mainBox">
      <div class="groove">
        <div class="slideBlock" ref="slideBlock"></div>
        <div id="fish" ref="fish"></div>
      </div>
    </div>
    <div class="progressBar" ref="progressBar">
      <div class="contain" ref="bar"></div>
      <p class="time">{{ time }}s</p>
    </div>
  </div>
</div>

</template>

<script>

import { fishBox, slideBlock} from "./index";
import store from '../../store/index'
let vm=null;
setTimeout(() => {
  vm=store.state.vm;
}, 0);
export default {
  props:['fishProp'],
  name: "",
  data() {
    return {
      fish: {
        speed: this.fishProp.speed,
        complex: this.fishProp.complex
      },
      isPull: true,
      pullCheck: true,
      time: 0,
      count:0,
    };
  },
  components: {},
  mounted() {
    this.fishingStart(); //让鱼根据自身属性移动
    slideBlock.init(this.$refs.slideBlock);
    document.addEventListener("keydown", () => {
      if (this.pullCheck == true) {
        this.isPull = true;
        this.pullCheck = false;
      } else {
        return;
      }
    });
  },
  methods: {
    fishingStart() {
      let fishDom = this.$refs.fish;
      let slideBlockDom=this.$refs.slideBlock;
      let complex = this.fish.complex;
      let fish = new fishBox({
        speed: this.fish.speed,
        change: this.fish.complex
      });
      let id=setInterval(() => {
        fish.fishMove(fishDom);
        this.pullCheck = true;
        slideBlock.countSite(this.isPull);
        this.isPull = false;
        if(this.count>=200){ //每100 代表5s
          let rem=Number.parseInt(window.getComputedStyle(document.getElementsByTagName('body')[0]).fontSize);
          let fTop=fishDom.getBoundingClientRect().top;
          let sTop=slideBlockDom.getBoundingClientRect().top
          let distance=sTop-fTop
          if(distance>(-4)*rem&&distance<2*rem){
            console.log(fTop);
            console.log(sTop);
            this.fishingEnd('win')
          }else{
            this.fishingEnd('fail')
          }
          clearInterval(id);
          return;
        }
        if(this.count++%20==0){
            this.time++;
        }
      }, 50); //20帧刷新一次画面
    },
    fishingEnd(status){
     if(status=='win'){
        this.$message({
          showClose: true,
          message: '钓鱼成功!',
          type: 'success'
        });
        this.fishProp.addToPack(); //添加鱼到背包，并附上添加后的滚动信息
        this.fishProp.megs(this.fishProp.meg)
     }else{
       this.$message({
          showClose: true,
          message: '钓鱼失败',
          type: 'warning'
        });
        this.fishProp.megs('突然,鱼竿传来阵阵颤动,你收起鱼竿,却发现钩子上空无一物')
     }
     vm.isFishing=false;
    }

  }
};

</script>

<style lang="scss" scoped>
#fishWrapper{
     content: " ";
  position:absolute;
  z-index:998;
  width:100vw;
  height:100vh;
  top:0;
  left:0;
}
#fishBox {
  position: absolute;
  z-indeX:999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30rem;
  border: 1px solid black;
  background: #34495e;
  border-radius: 1rem;
  color: white;
  text-align: center;
  padding: 3rem 0;
  z-index: 6;
  display: flex;
  justify-content: center;
  align-items: center;
  #mainBox {
    width: 6rem;
    height: 22rem;
    background: white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    .groove {
      width: 2rem;
      height: 100%;
      border: 5px solid rgba(110, 110, 110, 0.5);
      border-top: none;
      border-bottom: none;
      position: relative;
      .slideBlock {
        bottom: 0;
        position: absolute;
        width: 100%;
        height: 4rem;
        background: rgb(175, 175, 175);
      }
      #fish {
        bottom: 0;
        position: absolute;
        width: 100%;
        height: 2rem;
        background: rgb(197, 76, 76);
        transition: 0.05s;
      }
    }
  }
  .progressBar {
    border-radius: 10px;
    width: 2rem;
    height: 20rem;
    background: white;
    margin-left: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    .contain {
      background: black;
      width: 2rem;
      height: 1px;
      animation:move 10s linear;
    }
    @keyframes move {
      0%{
        height:1px;
      }
      100%{
        height:100%;
      }
    }
    .time {
      position: absolute;
      bottom: 0;
      left:0;
      color: white;
    }
  }
}
</style>
