<template>
<div id="batWrapper">
  <div id="batBox">
    <h1>战斗</h1>
    <main>
      <article>
        <div id="player">
          <div class="Show">人物</div>
          <el-progress :percentage="player.HP"></el-progress>
        </div>
        <div id="monster">
          <div class="Show">{{ monster.name }}</div>
          <el-progress :percentage="monster.HP"></el-progress>
        </div>
      </article>
      <nav>
        <div class="btn">
          <el-button @click="playerAtk" id="atkBtn">攻击</el-button>
          <div class="mask" :class="cdAnimation[0]"></div>
        </div>
        <div class="btn">
          <el-button @click="escape">逃跑</el-button>
          <div class="mask" :class="cdAnimation[1]"></div>
        </div>
        <div class="btn">
          <el-button>武器</el-button>
          <div class="mask" :class="cdAnimation[2]"></div>
        </div>
      </nav>
    </main>
  </div>
</div>

</template>

<script>
import { createMonster, monsterAtk } from "./bat";
import { createCD } from "../../utils/index";
export default {
  name: "batBox",
  data() {
    return {
      player: this.status,
      monster: { HP: 100, name: "test", atk: 0, def: 0 },
      battleCheck: undefined,
      cdAnimation: []
    };
  },
  components: {},
  mounted() {
    let self = this;
    this.monster = createMonster(); //随机怪物生成器
    this.battleCheck = monsterAtk(this.monster, this.player); //怪物循环攻击
    this.playerAtk = createCD(
      //玩家攻击指令生成器
      function() {
        self.monster.beAttacked(5);
        self.$set(self.cdAnimation, 0, "cdAnimation");
      },
      function() {
        self.$set(self.cdAnimation, 0, null);
      },
      1000
    );
  },
  methods: {
    playerAtk() {
      throw new Error("请先定义攻击函数");
    },
    escape() {
      clearInterval(this.battleCheck);
      this.$emit("batEnd");
    }
  },
  props: ["status"]
};
</script>

<style lang="scss" scoped>
#batWrapper::before{
   content: " ";
  position:absolute;
  z-index:998;
  width:100vw;
  height:100vh;
  top:0;
  left:0;
}
#batBox {
  position: absolute;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50rem;
  border: 1px solid black;
  background: #34495e;
  border-radius: 1rem;
  color: white;
  text-align: center;
  padding: 1rem 0 3rem 0;
  article {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 2rem auto;
    #player {
      width: 50%;
    }
    #monster {
      width: 50%;
    }
  }
  nav {
    display: flex;
    justify-content: center;
    .btn {
      margin: 0 1rem;
      position: relative;
      overflow: hidden;
      .mask {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 100%;
        background: rgba(136, 133, 133, 0.5);
      }
    }
    .cdAnimation {
      animation: cd 1s ease-in-out;
    }
    @keyframes cd {
      0% {
        top: 100%;
      }
      100% {
        top: 0;
      }
    }
  }
}
</style>
