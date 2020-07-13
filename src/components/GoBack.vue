<template>
  <div class="goback" @click="goBackClick">
    <slot name="goback"></slot>
  </div>
</template>

<script>
export default {
  name: 'GoBack',
  props: {
    path: {
      type: String,
      default: '/home'
    }
  },
  methods: {
    goBackClick() {
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
.goback {
  position: fixed;
  top: 50px;
  left: 50px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  opacity: 0.2;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  z-index: 2;
  cursor: pointer;
  transition: 0.3s;
}
.goback::before {
  content: '\e6ca';
  text-align: center;
  font-size: 80px;
  line-height: 80px;
  color: #6a6a6a;
}
.goback:hover {
  opacity: 1;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.6);
  animation: rubberBand 0.75s;
}
</style>