<!-- scope でこのファイルを修飾することを設定する-->
<!--  // パスカルケースLikeHeader ケバブケースlike-header htmlとの見分けがつきやすいのでパスカルで-->
<!--// app内でしか使えないローカル登録-->
<!-- v-slot:引数で slotタグに値を渡せる-->
<!--名前付きvslotがないときはcomponentにdefaultを指定する※<LikeHeader v-slot:default="slotPlops">※省略は#default-->
<!-- lazy修飾子はフォーカスが外れた時（DOMイベントchange)に発火させる -->
<!-- v-modelは:value="eventData.title" @input="eventData.title = $event.target.value"のように書き換えられる -->


<template>
  <div>
    <LikeHeader>
        <h2>初めまして</h2>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    
    <!-- destroyedを発火させなくする -->
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    
    <div style="padding: 10rem;">
      <h2>イベントのフォーム</h2>
      <EventTitle v-model="eventData.title"></EventTitle>
      <label for="maxNumber">最大人数</label>
      <input type="number" id="maxNumber" v-model.number="eventData.maxNumber">
      <p>{{ typeof eventData.maxNumber}}</p>


      <label for="host">主催者</label>
      <!-- trim修飾子は先頭と後尾の空白を除く -->
      <input type="text" id="host" v-model.trim="eventData.host">
      <pre>{{eventData.host}}</pre>
      <label for="detail">イベント内容</label>
      <textarea id="detail" cols="30" rows="10" v-model="eventData.detail"></textarea>
      <p style="white-space: pre;">{{eventData.detail}}</p>

      <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate">
      <label for="isPrivate">非公開</label>
      <p>{{ eventData.isPrivate }}</p>

      <!-- チェックボックス -->
      <p>参加条件</p>
      <input type="checkbox" id="10" value="10代" v-model="eventData.target">
      <label for="10">10代</label>
      
      <input type="checkbox" id="20" value="20代" v-model="eventData.target">
      <label for="20">20代</label>

      <input type="checkbox" id="30" value="30代" v-model="eventData.target">
      <label for="30">30代</label>

      <p>{{eventData.target}}</p>

      <!-- ラジオボタン -->
      <p>参加費</p>
      <input type="radio" id="free" value="無料" v-model="eventData.price">
      <label for="free">無料</label>
      <input type="radio" id="payed" value="有料" v-model="eventData.price">
      <label for="payed">有料</label>
      
      <p>開催場所</p>
      <select v-model="eventData.location" maltiple>
        <option v-for="location in locations" :key="location">{{location}}</option>
      </select>
      <p>{{eventData.location}}</p>
      
    </div>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";
import About from "./components/About.vue";
import Home from "./components/Home.vue";
import EventTitle from "./components/EventTitle.vue";

export default {
  data() {
    return {
      number: 14,
      currentComponent: "Home",
      locations: ["東京","大阪","名古屋"],
      eventData: {
        title: "",
        maxNumber: 0,
        host: "",
        detail:"",
        isPrivate: false,
        target: [],
        price: "無料",
        location: []
      }
    };
  },
  components: {
    LikeHeader,
    About,
    Home,
    EventTitle
  },
  methods: {
    incrementNumber(value) {
      this.number = value;
    }
  }
};
</script>

