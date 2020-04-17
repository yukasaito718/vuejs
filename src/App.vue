<!-- scope でこのファイルを修飾することを設定する-->
<!--  // パスカルケースLikeHeader ケバブケースlike-header htmlとの見分けがつきやすいのでパスカルで-->
<!--// app内でしか使えないローカル登録-->
<!-- v-slot:引数で slotタグに値を渡せる-->
<!--名前付きvslotがないときはcomponentにdefaultを指定する※<LikeHeader v-slot:default="slotPlops">※省略は#default-->



<template>
  <div>
    <LikeHeader>
      <template v-slot:title="slotProps">
        <h2>こんにちは</h2>
        <h2>{{slotProps.user.firstName}}</h2>
      </template>
      <template v-slot:default>
        <p>皆さん </p>
        <p>初めまして</p>
      </template>
      <template v-slot:number>
        <p>{{ number }}</p>
      </template>
      <template #[title]></template>
    </LikeHeader>

    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>
    <LikeNumber :total-number="number"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";

export default {
  data() {
    return {
      number: 14,
      title: "title" 
    }
  },
  components: {
    LikeHeader
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