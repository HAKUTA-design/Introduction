<template>
  <div id="skills">
      <div class="main">
        <section class="list_item" id="page_1">
          <div class="item_image">
            <img src="~assets/img/htmlcss.jpg" alt="">
          </div>
          <div class="item_text">
            <div class="item_title">掌握 HTML5 + CSS3 的操作</div>
          </div>
        </section>

        <section class="list_item" id="page_2">
          <div class="item_image">
            <img src="~assets/img/jquery.jpg" alt="">
          </div>
          <div class="item_text">
            <div class="item_title">掌握 jS 和 jQuery框架</div>
          </div>
        </section>
        
        <section class="list_item" id="page_3">
          <div class="item_image">
            <img src="~assets/img/ajax.jpg" alt="">
          </div>
          <div class="item_text">
            <div class="item_title">熟悉 ajax 的前后端交互</div>
          </div>
        </section>

        <section class="list_item" id="page_4">
          <div class="item_image">
            <img src="~assets/img/vue.jpg" alt="">
          </div>
          <div class="item_text">
            <div class="item_title">熟悉 Vue 全家桶</div>
          </div>
        </section>

        <section class="list_item" id="page_5">
          <div class="item_image">
            <img src="~assets/img/nodejs.jpg" alt="">
          </div>
          <div class="item_text">
            <div class="item_title">对服务器开发 nodejs 有一定了解</div>
          </div>
        </section>

        <section class="list_item" id="page_5">
          <div class="item_image">
            <img src="~assets/img/mongodb.jpg" alt="">
          </div>
          <div class="item_text">
            <div class="item_title">懂得如何操作 mongoose 数据库</div>
          </div>
        </section>

        <section class="list_item" id="page_6">
          <div class="item_image">
            <img src="~assets/img/wechat.jpg" alt="">
          </div>
          <div class="item_text">
            <div class="item_title">对微信小程序框架有一定的了解</div>
          </div>
        </section>

        <section class="list_item" id="page_7">
          <div class="item_image">
            <img src="~assets/img/last.jpg" alt="">
          </div>
          <div class="item_text">
            <div class="item_title">并且每天都在扩充自己的技能库！</div>
          </div>
        </section>
      </div>

    <!-- 插槽 -->

    <go-back>
      <div slot="goback"></div>
    </go-back>
  </div>
</template>

<script>
import GoBack from 'components/GoBack'

export default {
  name: 'Skills',
  components: {
    GoBack
  },
  data() {
    return {
      totalPage: 7,
      changeIndex: 0
    }
  },
  methods: {
    pageClick(index) {
      console.log(index);
    }
  }
}
</script>

<style scoped>
#skills {
  overflow: hidden;
}
.main {
  position: relative;
  min-width: 60vw;
  height: 100vh;
  background-color: #fff;
  perspective: 105px;
  transform-style: preserve-3d;
  overflow-x: hidden;
  overflow-y: visible;
}
.list_item {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 80vh;
  margin-bottom: 6px;
  overflow: hidden;
}
.main section:last-child {
  margin-bottom: 0;
}
.item_image::before {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  transition: all 0.4s ease;
}
.list_item:hover .item_image::before {
  background-color: rgba(0, 0, 0, 0.7);
}
.list_item:hover .item_title {
  animation: rubberBand 0.35s;
}
.item_image {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  transform: translateZ(-50px) scale(1.5);
}
.item_image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.item_text {
  text-align: center;
  color: #fff;
  text-shadow: 0 0 10px rgba(0,0,0,.7);
}
.item_title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
}
</style>