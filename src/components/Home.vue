<template>
    <div>
        <p v-border:solid.round.shadow="{width: '10px', color: 'blue'}">{{tmpData}}</p>
        <!-- フィルターの連結は|で繋ぐ -->
        <!-- 設定したfilterをtitleに適用する -->
        <h2>{{ title | lowerCase | upperCase }}</h2>
        <p>{{subTitle | lowerCase}}</p>
        <p>{{number}}</p>
        <button @click="number++">+1</button>
        <CountNumber></CountNumber>
    </div>
</template>

// ミックスインとはオプションのコードを共有化するためのもの
<script>
import CountNumber from "./CountNumber.vue"
import { tokyoNumber } from "@/tokyoNumber";

export default {
    mixins: [tokyoNumber],
    data() {
        return {
            tmpData: "hello",
        };
    },
    components: {
        CountNumber
    },
    //ローカルでのフィルターの定義方法※valueは必須
    //thisは使えないので注意
    // フィルターは再描画を頻発させてしまうリスクがあるためなるべくcomputedを使う方が良い
    directives: {
        border(el, binding){
            el.style.borderWidth = binding.value.width;
            el.style.borderColor = binding.value.color;
            el.style.borderStyle = binding.arg;
            if (binding.modifiers.round){
                el.style.borderRadius = "0.5rem";
            }
            if (binding.modifiers.shadow){
                el.style.boxShadow = "0 2px 5px rgba(0,0,0,1)";
            }
        }
    }
}
</script>