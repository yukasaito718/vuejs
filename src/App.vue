<!-- scope でこのファイルを修飾することを設定する-->
<!--  // パスカルケースLikeHeader ケバブケースlike-header htmlとの見分けがつきやすいのでパスカルで-->
<!--// app内でしか使えないローカル登録-->
<!-- v-slot:引数で slotタグに値を渡せる-->
<!--名前付きvslotがないときはcomponentにdefaultを指定する※<LikeHeader v-slot:default="slotPlops">※省略は#default-->



<template>
  <div>
    <LikeHeader>
        <h2>初めまして</h2>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <!-- destroyedを発火させなくする -->
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    


    <!-- <About v-if="currentComponent === 'About'"></About>
    <Home v-if="currentComponent === 'Home'"></Home> -->
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";
import About from "./components/About.vue";
import Home from "./components/Home.vue";

export default {
  data() {
    return {
      number: 14,
      currentComponent: "Home"
    };
  },
  components: {
    LikeHeader,
    About,
    Home
  },
  methods: {
    incrementNumber(value) {
      this.number = value;
    }
  }
};
</script>

<style scoped>
div {
  border: 1px solid blue;
}
</style>