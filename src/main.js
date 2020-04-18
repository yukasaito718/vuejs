// コンポーネントのオブジェクトをインポートしてる
import Vue from "vue";
import App from "./App.vue";
import LikeNumber from "./components/LikeNumber.vue";

Vue.config.productionTip = false;
// グローバル登録
Vue.component("LikeNumber", LikeNumber);
// フック関数の省略記法 ※bindingとupdateのみ使える
Vue.direcrive("border",function(el,bindind){
});

new Vue({
  render: h => h(App)
}).$mount("#app");