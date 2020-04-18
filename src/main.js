// コンポーネントのオブジェクトをインポートしてる
import Vue from "vue";
import App from "./App.vue";
import LikeNumber from "./components/LikeNumber.vue";

Vue.config.productionTip = false;
// グローバル登録
Vue.component("LikeNumber", LikeNumber);
//elはディレクティブが紐づくHTML要素を表す※今回はp要素
Vue.directive("border", function(el, binding) {
  el.style.border = "solid black 2px";
  el.style.borderWidth = binding.value;
});

new Vue({
  render: h => h(App)
}).$mount("#app");