<template>
  <div style="width: 700px; margin: auto;">
    <nav>
      <!-- アクセスせずにjsのコンポーネントを呼び出してページを表示させるリンクの書き方 -->
      <!-- //urlが完全一致の時activeにする -->
      <router-link 
        to="/" 
        active-class="link--active"
        exact
        class="link"
        >Home</router-link>
      <router-link 
        to="/users" 
        active-class="link--active"
        exact
        class="link"
        >Users</router-link>
    </nav>
    <!-- URLを判断してページに移動させる※動的コンポーネント的 -->
    <router-view></router-view>
  </div>
</template>

<style scoped>
  .link {
    margin-right: 10px;
  }
  .link--active {
    font-size: 20px;

  }
</style>