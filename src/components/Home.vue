<template>
    <p v-border:solid.round.shadow="{width: '10px', color: 'blue'}">{{tempData}}</p>
</template>

<script>
//カスタムディレクティブをローカル登録することもできる
export default {
    data() {
        return {
            tmpDta: "hello"
        };
    },
    //ローカル登録内ではthis.が使えないので注意する
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