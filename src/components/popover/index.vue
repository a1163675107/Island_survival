<template>
  <div class="popover">
    <div class="content" @click="$emit('click')">
      {{ content}}
    </div>
    <div class="popContent">
      {{ popContent}}
    </div>
  </div>
</template>

<script>
export default {
  name: "popover",
  data() {
    return {

    };
  },
  components: {},
  mounted() {},
  methods: {},
  props: ["content", "popContent"]
};
</script>

<style lang="scss" scoped>
.popover {
  position: relative;
  width:max-content;
  .content {
    font-size:.9rem;
    padding:.1rem .5rem;
    width:max-content;
    text-align: center;
    background: rgb(110, 182, 255);
    color: white;
    border-radius: 5px;
    margin-right: 1rem;
    cursor: default;
  }
  .content:hover + .popContent {
    opacity: 1;
  }
  .content:hover {
    background: rgb(29, 126, 223);
  }
  .popContent {
    text-align: left;
    width: 10rem;
    padding: 1rem;
    background: rgb(29, 126, 223);
    color: white;
    z-index: 999;
    border-radius: 5px;
    position: absolute;
    left: 100%;
    opacity: 0;
    transition: 0.2s;
  }
}
</style>
