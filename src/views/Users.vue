<template>
    <div>
        <h3>Users</h3>
        <router-link to="/users/1">ユーザー１</router-link>
        <router-link to="/users/2">ユーザー２</router-link>
        <hr>
        <!-- paramsを取得できる -->
        <!-- ライフサイクルフックが呼ばれないのでwatchをつける -->
        <h1>User No. {{ id }}</h1>
        <router-link :to="'/users/'+ (Number(id) + 1) + '/profile'" >次のユーザー</router-link>
        <!-- 上記の動的書き換え -->
        <router-link :to="{ name: 'users-id-profile', params: { id: Number(id) + 1 }, query: { lang: 'ja', page: 2} }" >次のユーザー</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    props: ["id"]
}
</script>