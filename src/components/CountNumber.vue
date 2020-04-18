<template>
    <div>
        <h2>{{ title | lowerCase | upperCase }}</h2>
        <p>{{subTitle | lowerCase}}</p>
        <p>{{number}}</p>
        <button @click="number++">+1</button>
    </div>
</template>

// ミックスインとはコードを再利用するためのもの
<script>
import { tokyoNumber } from "@/tokyoNumber";
// オプションが被ったときはコンポーネントが基本的に実行が優先されるが、ライフサイクルフックのみmixinが先に実行される
export default {
    mixins: [tokyoNumber],
    created () {
        console.log("created in component")
    }
};
</script>