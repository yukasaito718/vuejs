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

export default {
    mixins: [tokyoNumber]
};
</script>