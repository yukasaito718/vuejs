// コンポーネントのオブジェクトをインポートしてる
import Vue from "vue";
import App from "./App.vue";
import LikeNumber from "./components/LikeNumber.vue";

Vue.config.productionTip = false;
// グローバル登録
Vue.component("LikeNumber", LikeNumber);
Vue.direcrive("border",{
  //フック関数
  bind(el,binding,vnode) {
    //ディレクディブで初めて対象の要素に紐付いた時
  },
  inserted(el,binding,vnode) {
    // 親Node（実DOM）に挿入された時

  },
  update(el,binding,vnode,oldVnode) {
    //コンポーネントが更新される度。子コンポーネントが更新される前

  },
  componentUpdated(el,binding,vnode,oldVnode) {
    //コンポーネントが更新される度。子コンポーネントが更新された後

  },
  unbind(el,binding,vnode) {
    //ディレクティブが紐付いている要素から取り除かれた時

  },
});

new Vue({
  render: h => h(App)
}).$mount("#app");