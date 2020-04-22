import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Users from "./views/Users.vue"

// useはvueの提供するプラグイン（vuerouter)を適用する
Vue.use(Router);

export default new Router({
    //開発環境のみ/#/コンポーネント名/でアクセスできる
    mode: 'history',
    // URLとコンポーネントをマッピングする
    routes: [
        { path: "/", component: Home },
        { path: "/users/:id", component: Users, props: true }
    ]
});