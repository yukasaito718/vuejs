// :css=""cssを使用しない宣言
<template>
  <div class="main">
    <button @click="myAnimation = 'slide'">Slide</button>
    <button @click="myAnimation = 'fade'">Fade</button>
    <p>{{myAnimation}}</p>
    <br>
    <button @click="add">追加</button>
    <ul style="width: 200px; margin: auto;">
      <!-- transition-groupは複数の要素に対して使う事ができる 必ずkey属性をつける -->
      <transition-group name="fade">
      <li 
        style="cursor: poi"
        v-for="(number, index) in numbers" 
        :key="number" 
        @click="remove(index)" 
        >{{ number }}</li>
      </transition-group>
    </ul>
    <br>
    <button @click="show = !show">切り替え</button>
    <br><br>
    <transition
      :css="false"
      @befor-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <div class="circle" v-if="show"></div>
    </transition>
    <br>
    <button @click="myComponent = 'ComponentA'">Slide</button>
    <button @click="myComponent = 'ComponentB'">Fade</button>
    <transition name="fade" mode="out-in">
      <component :is="myComponent"></component>
    </transition>
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
import ComponentA from "./components/ComponentA.vue";
import ComponentB from "./components/ComponentB.vue";
export default {
  components: {
    ComponentA,
    ComponentB
  },
  data() {
    return {
      numbers: [ 0, 1, 2 ],
      show: true,
      myAnimation: "slide",
      myComponent: "ComponentA"
    };
  },
  // doneはjsの動作が終わったことを教える関数※非同期によく使う elはhtmlのこと
  methods: {
    randomIndex() {
      return Math.floor(Math.random() * this.numbers.length);
    },
    add() {
      this.numbers.splice(this.randomIndex(), 0, this.nextNumber);
      this.nextNumber += 1;
    },
    remove(index) {
      this.numbers.splice(index, 1);
    },
    beforeEnter(el) {
      // 現れる前
      el.style.transform = "scale(0)";
    },
    enter(el,done) {
      // 現れる時
      let scale = 0;
      const interval = setInterval(() =>{
        el.style.transform = `scale(${scale})`;
        scale += 0.1;
        if( scale > 1 ){
          clearInterval(interval);
          done();
        }
      }, 30);
    },
    // afterEnter(el) {
    //   // 現れた後
    // },
    // enterCancelled(el) {
    //   // 現れるアニメーションがキャンセルされた時
    // },
    // beforeLeave(el) {
    //   // 消える前
    // },
    leave(el,done) {
      // 消える時
      let scale = 1;
      const interval = setInterval(() =>{
        el.style.transform = `scale(${scale})`;
        scale -= 0.1;
        if( scale < 0 ){
          clearInterval(interval);
          done();
        }
      }, 30);
    }
    // afterLeave(el) {
    //   // 消えた後
    // },
    // leaveCancelled(el) {
    //   // 消えるアニメーションがキャンセルされた時※v-showの時のみ実行される
    // }

  }
};
</script>

<style scoped>
.circle {
  width: 200px;
  height: 200px;
  margin: auto;
  border-radius: 100px;
  background-color: deeppink;
}
.fade-move {
  transition: transform 10s;
}

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
  position: absolute;
  width: 200px;
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