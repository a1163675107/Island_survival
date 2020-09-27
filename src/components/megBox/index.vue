<template>
  <div id="megBox">
    <div v-for="m in megs" class="meg" :key="m.id">
      {{ m }}
    </div>
  </div>
</template>

<script>
export default {
  name: "megBox",
  data() {
    return {
      megs: this.megInfo
    };
  },
  components: {},
  mounted() {},
  methods: {},
  props: ["megInfo"]
};
</script>

<style lang="scss" scoped>
#megBox {
  display: flex;
  flex-direction: column-reverse;
  .meg {
    width: fit-content;
    margin: 5px 0;
    padding: 0.5rem;
    border-radius: 4px;
    animation: slipInto 0.5s linear;
    color: white;
    background: linear-gradient(
      to right,
      rgb(95, 110, 220),
      rgb(122, 149, 241)
    );
    z-index: 5;
  }
  @keyframes slipInto {
    0% {
      transform: translateX(5rem);
    }
    30% {
      transform: translateX(-1rem);
    }
    60% {
      transform: translateX(-0.5rem);
    }
    90% {
      transform: translateX(0.3rem);
    }
    100% {
      transform: translateX(0px);
    }
  }
}
</style>
