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
  // if文も使える※roundはbooleanで返ってくるので以下の条件式で良い
  if (binding.modifiers.round){
    el.style.borderRadius = "0.5rem";
  }
  if (binding.modifiers.shadow){
    el.style.boxShadow = "0 2px 5px rgba(0,0,0,1)";
  }
});

new Vue({
  render: h => h(App)
}).$mount("#app");