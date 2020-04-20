<template>
  <div class="main">
    <button @click="myAnimation = 'slide'">Slide</button>
    <button @click="myAnimation = 'fade'">Fade</button>
    <p>{{myAnimation}}</p>
    <button @click="show = !show">切り替え</button>
    <!-- mode属性 要素のタイミングをずらす 複数の要素がある場合はつけるとスムーズになる -->
    <transition name="fade" mode="out-in">
      <!-- transitionはコンテンツ内のタグが変わった時に発火するため同じタグ同士だと動かない keyを指定することによって違うタグとして判断する -->
      <p 
        v-if="show" 
        key="bye"
        >さよなら</p>
      <p 
        v-else 
        key="hello"
        >こんにちは</p>
    </transition>
    <transition 
      enter-active-class="animated bounce" 
      leave-active-class="animated shake" 
      appear
    >
    <p v-if="show">hello</p>
    </transition>
    <!-- トランジションにtype属性をつける -->
    <transition 
      :name="myAnimation" 
      appear
    >

      <p v-show="show">bye</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      myAnimation: "slide"
    };
  }
};
</script>

<style scoped>
.fade-enter {
/* 現れる時の最初の状態 */
  opacity: 0;
}
.fade-enter-active {
/* 現れる時のトランジションの状態 */
  transition: opacity 0.5s;
}
.fade-enter-to {
/* 現れる時の最後の状態 */
  opacity: 1;
}
.fade-leave {
/* 消える時の最初の状態 */
  opacity: 1;
}
.fade-leave-active {
/* 消える時のトランジションの状態 （どのように消えるのか？）*/
  transition: opacity 0.5s;
}
.fade-leave-to {
/* 消える時の最後の状態 */
  opacity: 0;
}

.slide-ender,
.slide-leave-to {
  opacity: 0;
}
.slide-ender-active {
  animation: slide-in 0.5s;
  transition: opacity 5s;
}

.slide-leave-active {
  animation: slide-in 0.5s reverse;
  transition: opacity 5s;
}


@keyframes slide-in {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0);
  }
}

.main {
  width: 70;
  margin: auto;
  padding-top: 5rem;
  text-align: center;
}

</style>