<!-- テンプレートタグ内は一つの要素に纏まっていないとエラーが出るのでまとめる -->
 <!--props親子間でデータを渡す時に使用 HTMLは大文字小文字に区別がつかない props htmlはケバブでscript内ではキャメルケースを使うのが良い-->
<!--//type や defaultでプロパティと値を設定し、バリデーションをかける事ができる-->
// カスタムイベントはケバブケースで定義
// 名前付きslotはtemplateにしか付けられない
  

<template>
  <div>
    <p>いいね({{ halfNumber }})</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  props: ["totalNumber"],
  computed: {
    halfNumber() {
      return this.totalNumber / 2;
    }
  },
  methods: {
    increment() {
      this.$emit("my-click", this.totalNumber + 1);
    }
  }
};
</script>

<style scoped>
div {
  border: 1px solid red;
}
</style>