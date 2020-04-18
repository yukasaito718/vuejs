<template>
    <p v-border:solid.round.shadow="{width: '10px', color: 'blue'}">Home</p>
</template>

<script>
export default {
    directives: {
        border(el, binding){
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
        }
    }
}
</script>