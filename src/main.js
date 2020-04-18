// コンポーネントのオブジェクトをインポートしてる
import Vue from "vue";
import App from "./App.vue";
import LikeNumber from "./components/LikeNumber.vue";

Vue.config.productionTip = false;
// グローバル登録
Vue.component("LikeNumber", LikeNumber);
//elはディレクティブが紐づくHTML要素を表す※今回はp要素
Vue.directive("border", function(el, binding) {
  //データを受け取りたいときはbinding.valueで受け取れる
  //複数データを受け取りたいときは送り側をオブジェクトにして、受け取り側でプロパティを指定して取得する
  el.style.borderWidth = binding.value.width;
  el.style.borderColor = binding.value.color;
  //ディレクティブの引数を取得したいときはargument;をつける
  el.style.borderStyle = binding.arg;
});

new Vue({
  render: h => h(App)
}).$mount("#app");