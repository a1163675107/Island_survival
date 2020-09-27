<template>
  <div id="craftGuide">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item
        v-for="(val, key) in data"
        :title="key"
        :name="val.id"
        :key="val.id"
      >
        <template slot="title" >
          <div class="headline">{{ key }} </div>
        </template>
        <div class="row" v-for="v in val" :key="v.id">
          <popover :content="v.name" :popContent="v.introduce" @click="createPrimaryTool($event, v.createFunc)"></popover>
          <div class="detailed" ref="item">{{ v.materials }}</div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import craftList from "./craftGuide";
import { resourceList } from "../item";
import popover from "../popover/index"

export default {
  name: "",
  data() {
    return {
      pack: this.items,
      activeName: "1",
      data: undefined, //合成表数据
      resouceData: {}
    };
  },
  props: ["items"],
  mounted() {
    this.data = craftList; //合成表数据
  },
  methods: {
    createPrimaryTool(event, cb) {
      let dom = this.$refs.item[0];
    }
  },
  watch: {
    items: {
      handler(val, oldVal) {
        for (const listEle of resourceList) {
          //得到资源列表
          if (val[listEle] != undefined) {
            this.resouceData[listEle] = val[listEle].amount;
          }
        }
        for (const dom of this.$refs.item) {
          let isActived = false;
          let data = JSON.parse(dom.innerHTML);
          for (const key of Object.keys(data)) {
            //木材 50，石材 50
            if (this.resouceData[key] >= data[key]) {
              isActived = true;
            } else {
              isActived = false;
            }
          }
          if (isActived == true) {
            dom.classList.add("activate");
          } else {
            dom.classList.remove("activate");
          }
        }
      },
      deep: true
    }
  },
  components:{
    popover
  }
};
</script>

<style lang="scss" scoped>
#craftGuide {
  .row {
    display: flex;
    justify-content: space-between;
    .detailed {
      color: rgba(165, 165, 165, 0.521);
      letter-spacing: 3px;
    }
    .activate {
      color: rgb(138, 43, 43);
    }
  }
  .el-button {
    margin: 0;
    margin-bottom: 1rem;
    padding: 0.5rem;
    display: block;
    text-align: center;
    background: rgb(110, 182, 255);
    color: white;
    border-radius: 5px;
  }

}

</style>
