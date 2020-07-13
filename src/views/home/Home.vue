<template>
  <div id="home">
    <div class="bg"></div>
    <div class="item" @click="itdClick">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      简介
    </div>
    <div class="item" @click="skClick">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      技能库
    </div>
    <div class="item" @click="hbClick">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      兴趣爱好
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {

    }
  },
  methods: {
    itdClick() {
      this.$router.push('/introduction')
    },
    skClick() {
      this.$router.push('/skills')
    },
    hbClick() {
      this.$router.push('/hobbies')
    }
  }
}
</script>

<style scoped>
#home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 100vh;
  background-color: #050801;
  /* background: url(~assets/img/background.jpg) no-repeat 100%; */
  /* animation: bganimation 20s linear infinite forwards; */
}
.bg {
  position: absolute;
  margin: 0;
  top: 0;
  right: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: url(~assets/img/background.jpg) no-repeat 100%;
  opacity: 0.1;
}

.item {
  position: relative;
  display: inline-block;
  padding: 25px 50px;
  margin: 40px 50px;
  color: #03e9f4;
  font-size: 2rem;
  letter-spacing: 4px;
  overflow: hidden;
  transition: 0.5s;
  -webkit-box-reflect: below 0px linear-gradient(transparent, #000500);
  cursor: pointer;
}
.item:nth-child(1) {
  filter: hue-rotate(290deg);
}
.item:nth-child(2) {
  filter: hue-rotate(320deg);
}
.item:nth-child(3) {
  filter: hue-rotate(110deg);
}
.item:hover {
  background-color: #03e9f4;
  color: #050801;
  box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
    0 0 200px #03e9f4;
}
.item span {
  position: absolute;
  display: block;
}
.item span:nth-child(1) {
  top: 0;
  left: -100px;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: neonBtn1 1s linear infinite;
}

.item span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: neonBtn2 1s linear infinite;
  animation-delay: 0.25s;
}

.item span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: neonBtn3 1s linear infinite;
  animation-delay: 0.5s;
}
.item span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: neonBtn4 1s linear infinite;
  animation-delay: 0.75s;
}
</style>
