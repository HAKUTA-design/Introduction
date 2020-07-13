<template>
  <div id="hobbies">
    <div class="container">
      <button v-for="(item, index) in hobbies" :key="index" 
      @click="hbClick(index)" 
      :class="{active: index === currentIndex}">
        <span v-if="index === currentIndex"
        :class="setClass(index)"></span>
        {{item}}
      </button>
      <div class="changebg" :class="changebg(currentIndex)"></div>
    </div>
    <!-- 插槽 -->
    <go-back>
      <div slot="goback"></div>
    </go-back>
  </div>
</template>

<script>
import GoBack from 'components/GoBack';

export default {
  name: 'Hobbies',
  components: {
    GoBack
  },
  data() {
    return {
      currentIndex: -1,
      bgclass: 'bgclass_',
      hobbies: ['敲代码', '篮球', '读书', '架子鼓', '摄影', '英雄联盟'],
      icon: ['icon-code', 'icon-basketball', 'icon-reading', 'icon-drum', 'icon-camera', 'icon-game']
    }
  },
  methods: {
    hbClick(index) {
      this.currentIndex = index
      // index.isActive = !index.isActive
    },
    setClass(index) {
      return 'iconfont' + ' ' + this.icon[index]
    },
    changebg(index) {
      return 'changebg_' + index
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100vh;
}
button {
  position: relative;
  width: 15rem;
  height: 5rem;
  margin: 10px;
  background-color: #000;
  color: #fff;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  border-radius: 5rem;
  box-shadow: 0 8px 28px rgba(0,0,0,.8);
  cursor: pointer;
  transition: 0.5s;
}
button span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.5rem;
  color: #fff;
}
button:nth-child(1):hover .container {
  background: linear-gradient(#03a9f4,#e91e63);
}
.active {
  width: 5rem;
  color: transparent;
}
.changebg {
  position: absolute;
  padding: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  background-color: #283e56;
  transition: all 0.5s;
}
.changebg_0 {
  opacity: 0.8;
  background: url(~assets/img/code.jpg) no-repeat center/100%;
  background-size: cover;
  /* background: linear-gradient(#03a9f4,#e91e63); */
}
.changebg_1 {
  opacity: 0.8;
  background: url(~assets/img/basketball.jpg) no-repeat center/100%;
  background-size: cover;
  /* background: linear-gradient(#03a9f4,#e91e63); */
}
.changebg_2 {
  opacity: 0.8;
  background: url(~assets/img/reading.jpg) no-repeat center/100%;
  background-size: cover;
  /* background: linear-gradient(#03a9f4,#e91e63); */
}
.changebg_3 {
  opacity: 0.8;
  background: url(~assets/img/drum.jpg) no-repeat;
  background-size: cover;
  /* background: linear-gradient(#03a9f4,#e91e63); */
}
.changebg_4 {
  opacity: 0.8;
  background: url(~assets/img/camera.jpg) no-repeat;
  background-size: cover;
  /* background: linear-gradient(#03a9f4,#e91e63); */
}
.changebg_5 {
  opacity: 0.8;
  background: url(~assets/img/game.jpg) no-repeat;
  background-size: cover;
  /* background: linear-gradient(#03a9f4,#e91e63); */
}
</style>