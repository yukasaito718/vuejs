<template>
    <div>
        <h3>Users</h3>
        <router-link to="/users/1">ユーザー１</router-link>
        <router-link to="/users/2">ユーザー２</router-link>
        <hr>
        <!-- paramsを取得できる -->
        <!-- ライフサイクルフックが呼ばれないのでwatchをつける -->
        <h1>User No. {{ id }}</h1>
    </div>
</template>

<script>
export default {
    props: ["id"],
    watch: {
        //$routeが変わったら動く(未来のページ、過去のページ)
        $route(to, from) {
            console.log(to);
            console.log(from);
            
        }
    }
}
</script>