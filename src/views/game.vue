<template>
  <div id="game">
    <div class="wrapper">
      <div id="status" class="backWhite">
        <div class="status_1">
          <el-row>
            <div class="container">
              <popover
                content="饥饿"
                popContent="划船/探索/钓鱼等动作会降低饥饿值,吃东西来补充"
              ></popover>
              <el-col :span="20">
                <el-progress
                  :percentage="status.hunger"
                  :color="color.hunger"
                ></el-progress>
              </el-col>
            </div>
            <div class="container">
              <popover
                content="口渴"
                popContent="划船/探索/钓鱼等动作会降低口渴,吃东西可补充"
              ></popover>
              <el-col :span="20">
                <el-progress
                  :percentage="status.thirst"
                  :color="color.thirst"
                ></el-progress>
              </el-col>
            </div>
            <div class="container">
              <popover
                content="血量"
                popContent="战斗时主要参考数据,如果血量为0，玩家将永久死去！"
              ></popover>
              <el-col :span="20">
                <el-progress
                  :percentage="status.HP"
                  :color="color.HP"
                ></el-progress>
              </el-col>
            </div>
            <div class="container">
              <popover
                content="SAN"
                popContent="有待开发,如果玩家缺少娱乐，SAN值将会降低，如果SAN足够低，将会发生一些不可名状的事件!"
              ></popover>
              <el-col :span="20">
                <el-progress
                  :percentage="status.san"
                  :color="color.san"
                ></el-progress>
              </el-col>
            </div>
          </el-row>
        </div>
      </div>
      <div id="messagePanel" class="backWhite">
        <div id="island">
          <div v-for="row in map" class="map" :key="row.id">
            <div
              v-for="ele in row"
              class="mapEle "
              @click="exploreIsland(ele)"
              :class="ele.show"
              :key="ele.id"
            >
              {{ ele.eventType }}
            </div>
          </div>
        </div>
        <megBox :megInfo="megs"></megBox>
      </div>
    </div>
    <div id="console" class="backWhite">
      <el-tabs type="border-card">
        <el-tab-pane label="物品">
          <popover
            @click="closeHint"
            content="悬浮到对象上可看详细信息!点我隐去这则提示"
            popContent="详细信息"
            v-if="hint"
          ></popover>
          <popover
            v-for="item in items"
            :key="item.name"
            @click="item.func.call(item)"
            :content="item.name + 'x' + item.amount"
            :popContent="item.introduce"
          ></popover>
        </el-tab-pane>
        <el-tab-pane label="装备">
          装备
        </el-tab-pane>
        <el-tab-pane label="合成"
          ><craftGuide :items="items"></craftGuide
        ></el-tab-pane>
        <el-tab-pane label="行动">
          <popover
            @click="boating"
            v-show="!ifIsland"
            content="划船"
            popContent="-1饥饿 -2口渴"
          ></popover>
          <popover
            @click="fishing"
            v-show="!ifIsland"
            content="钓鱼"
            popContent="-2饥饿 -4口渴"
          ></popover>
          <popover
            v-show="isFinding"
            @click="loginIsland"
            content="是否登岛?"
            popContent="-2饥饿 -1口渴"
          ></popover>
          <popover
            v-show="ifIsland"
            @click="leaveIsland"
            content="离开岛屿"
            popContent="-2饥饿 -1口渴"
          ></popover>
        </el-tab-pane>
      </el-tabs>

      <div id="gameLogo">
        <img src="../assets/logo.png" alt="" />
      </div>
    </div>
    <batBox v-if="isBattle" :status="status" @batEnd="battleEnd"></batBox>
    <fishBox v-if="isFishing" :fishProp="fishProp"></fishBox>
  </div>
</template>

<script>
// @ is an alias to /src
import megScrolltable from "../components/MessageScrolltable.js";
import CreateMap from "../components/map.js";
import SManager from "../components/StatueManager.js";
import { createResource } from "../components/item.js";

import store from "../store/index";
import batBox from "../components/battleBox/batBox.vue";
import craftGuide from "../components/craftGuide/craftGuide.vue";
import popover from "../components/popover/index.vue";
import megBox from "../components/megBox/index.vue";
import fishBox from "../components/fishBox/index.vue";

export default {
  name: "game",
  data: function() {
    return {
      status: {
        hunger: 100,
        thirst: 100,
        HP: 100,
        san: 100
      },
      site: "0|0",
      hint: true,
      ifIsland: false,
      isFinding: false,
      isBattle: false,
      isFishing:false,
      fishProp:null,
      megs: ["欢迎来到海岛冒险(暂定)，点击右边控制台行动进行游戏"],
      map: [],
      color: {
        hunger: "#2980b9",
        thirst: "#2980b9",
        HP: "#2980b9",
        san: "#2980b9"
      },
      items: {
        鱼竿: {
          name: "鱼竿",
          amount: "1",
          introduce: "点击行动，即可钓鱼!",
          func() {
            console.log("点击行动，即可钓鱼!");
          }
        }
      }
    };
  },
  methods: {
    closeHint() {

      this.hint = false; //关闭提示
    },
    boating() {
      SManager(this, { "hunger|-": 1, "thirst|-": 2 }); //更新人物状态;
      this.isFinding = false;
      this.ifIsland = false;
      megScrolltable.trigger("boating"); //触发相关函数
    },
    fishing() {
      SManager(this, { "hunger|-": 2, "thirst|-": 2 });
      megScrolltable.trigger("fishing");
    },
    initFishAnimation(setting){
      this.fishProp=setting;
      this.isFishing=true;
    },
    exploreIsland(ele, e) {
      if (ele.isDetect == true) return;
      ele.eventType = megScrolltable.trigger("explore"); //触发相关探索事件
      ele.isDetect = true; //格子改为以探索状态
      ele.show = "mapEle-2";
    },
    StatusManage(obj, that) {
      for (let [key, value] of obj) {
        if (value > 100) {
          that[key] = 100;
        } else if (value > 50 && value < 100) {
          this.color[key] = "#2980b9"; //蓝色
        } else if (value < 50 && value > 25) {
          this.color[key] = "#e67e22"; //黄色
        } else if (value < 25 && value > 0) {
          this.color[key] = "#c0392b"; //红色
        } else if (value < 0) {
          this.$alert("你死了刷新页面重新开始游戏！", "YOU DIED", {
            confirmButtonText: "确定",
            callback: action => {
              location.reload();
            }
          });
        }
      }
    },
    loginIsland() {
      SManager(this, { "hunger|-": 1, "thirst|-": 2 });
      this.map = CreateMap(5); //创建地图
      this.ifIsland = true;
      this.isFinding = false;
      this.megs.push("点击小岛方块,进行岛屿探索,点击离岛可返回小船");
    },
    leaveIsland() {
      SManager(this, { "hunger|-": 1, "thirst|-": 2 });
      this.map = [];
      this.ifIsland = false;
    },
    battleEnd() {
      this.isBattle = false;
    }
  },
  mounted() {
    store.commit("settingVm", this);
  },
  created() {
      this.$nextTick(() => {
        // 禁用右键
        document.oncontextmenu = new Function("event.returnValue=false");
        // 禁用选择
        document.onselectstart = new Function("event.returnValue=false");
      });
    },
  watch: {
    status: {
      handler(val, oldval) {
        this.StatusManage(Object.entries(val), val);
      },
      deep: true
    }
  },
  store,
  components: {
    batBox,
    craftGuide,
    popover,
    megBox,
    fishBox
  }
};
</script>

<style scoped lang="scss">
#game {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: rgb(192, 192, 192);
  min-width: 1000px;
  height: 100vh;
  .wrapper {
    min-width: 550px;
    width: 60vw;
    margin-right: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    #status {
      margin-bottom: 1rem;
      padding: 1rem;
      .status_1 {
        width: 50%;
        .container {
          display: flex;
          margin: 1rem;
        }
      }
    }
    #messagePanel {
      flex-grow: 1;
      padding: 1rem;
      overflow: auto;
    }
  }
}
#console {
  padding: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .el-col {
    text-align: center;
  }
  .el-tab-pane {
    height: max-content;
  }

  .popover {
    margin: 0.5rem 0;
  }
  #gameLogo {
    margin-bottom: 5rem;
    img {
      width: 50%;
      height: 100%;
      object-fit: cover;
      display: block;
      margin: 0 auto;
      animation: move 30s infinite alternate linear;
    }
    @keyframes move {
      0% {
        transform: translateX(1rem) translateY(-1rem);
      }
      100% {
        transform: translateX(-1rem) translateY(1rem);
      }
    }
  }
}
#island {
  width: max-content;
  margin: 0 auto;
  margin-bottom: 2rem;
  .map {
    height: 2rem;
    .mapEle {
      display: inline-block;
      width: 2rem;
      height: 2rem;
      border: rgb(255, 255, 255) 1px solid;
      cursor: pointer;
    }
    .mapEle-1 {
      //探索前状态
      background: gray;
      color: gray;
    }
    .mapEle-2 {
      background: white; //探索后状态
      color: gray;
    }
  }
}
</style>
