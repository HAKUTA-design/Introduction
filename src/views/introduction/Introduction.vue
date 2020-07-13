<template>
  <div id="introduction">
    <!-- 伸缩容器 -->
    <div class="wrapper">
      <div
        class="book"
        @click="bookClick"
        :class="{bookExpanded: isActive}"
      >
        <!-- 封面 -->
        <div>
          <div class="header_image"></div>
          <div class="title_wrap">
            <h1
              class="article_title"
              :class="{titleExpanded: isActive}"
            >个人简介</h1>
          </div>
          <p
            class="book_cover_expert"
            :class="{hidde: isActive}"
          >
            原先我是一名电气工程及其自动化专业的学生，由于对前端开发比较感兴趣，所以一步步走上了前端开发的道路。
          </p>
        </div>
        <!-- 正文 -->
        <div
          class="book_content"
          :class="{show: isActive}"
        >
          <p>
            <span class="drop_cap">大</span>
            学二年级的时候很幸运的选了一门网页制作的选修课，也是从那开始对网页制作产生了浓厚的兴趣，对前端开发有了一定的了解，为大三
            转行奠定了一定的基础。
          </p>
          <p>由于疫情的原因，大三下学期基本都在家，并且微信小程序越来越火，因此有了制作一个属于自己的小程序的想法，于是开始懵懵懂懂上B站学习 
            <strong>微信小程序开发</strong> ，由于对前端还不是很了解，所以只学了个七七八八，很多东西还不理解，因此开始继续学习前端的知识。
          </p>
          <p>从 <strong>HTML5、CSS3</strong> 再到 <strong>JS、ES6</strong> ，由于有一定的编程基础，所以学起来比较轻松，懂得了网页的基本制作之后，制作了 <strong>品优购</strong> 的电商网页布局，觉得学前端的时间比学习自己专业的时间还多，
            由于不想浪费所学的知识，于是有了转行的打算。在实习僧的APP上开到很多大公司前端开发的岗位都需要懂一些后端的知识以及热门的框架，于是继
            续学习了 <strong>nodejs、mongodb数据库、ajax原理</strong> 然后简单搭建了一个博客管理系统。
          </p>
          <p>接着继续向vue框架进军，在学完 <strong>webpack打包</strong> 后vue为我们提供了方便快捷的脚手架，在学习之前需要安装 <strong>vue-cli</strong> 但是
            由于不知名原因 <strong>安装报错</strong> ，在网上找了资料后需要卸载 <strong>nodejs</strong> 再重新安装，于是按步骤操作后不小心把
            之前制作博客的文件夹 <strong>blog也删掉了</strong> ，哭了好几天！想着只能学完vue再找时间重新制作了。在学习vue期间跟这B站大佬制作了一个 
            <strong>移动端的电商网页</strong> 由于接口被停掉了，因此只完成了一半功能。
          </p>
          <p>由于前段开发还有很多知识与经验需要实习的积累，因此带着不多的知识去找实习了，这是我用 <strong>vue3模块化开发</strong> 的一个简单网页，希望得到贵公司的栽培~</p>
        </div>
      </div>
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
  name: 'Introduction',
  components: {
    GoBack,
  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    bookClick() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style scoped>
#introduction {
  position: relative;
  overflow: hidden;
  background-color: #f3f3f3;
  background: url(~assets/img/bg.jpg) no-repeat;
}
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.book {
  overflow: hidden;
  padding: 10px;
  height: 510px;
  width: 400px;
  background: white;
  box-shadow: 0 20px 30px -10px #ccc;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  z-index: 9;
}
.book:hover {
  box-shadow: 0 5px 50px 10px #cfcfcf;
}
.header_image {
  position: relative;
  height: 290px;
  background: url(~assets/img/introduction.jpg) no-repeat center/100%;
  background-size: cover;
  transition: all 0.45s ease-in-out;
}
.title_wrap {
  position: relative;
}
.article_title {
  text-align: center;
  color: #7a7a7a;
  font-size: 2.2rem;
  letter-spacing: 0.025em;
  transition: font-size 0.45s ease-in-out, color 0.3s ease-out;
}
.book_cover_expert {
  padding: 0 1.5rem;
  line-height: 1.7;
  text-indent: 2rem;
  color: #7a7a7a;
  transition: all 0.25s ease-in-out;
}
.book_content {
  display: none;
  padding: 0 2rem;
  margin: 3.5rem auto;
  max-width: 750px;
  font-size: 1.1rem;
  text-align: justify;
  word-wrap: break-word;
  transition: all 1.5s ease-in-out;
}
.book_content p {
  margin-bottom: 2.25rem;
  line-height: 1.8;
  color: #575757;
}
.drop_cap {
  font-size: 3rem;
  line-height: 28px;
  color: #970c13;
}
.book_content strong {
  color: #970c13;
}
/* 伸缩扩大是 */
.bookExpanded {
  height: 100%;
  width: 100%;
  opacity: 1;
  overflow-y: scroll;
}
.titleExpanded {
  position: absolute;
  top: -233px;
  left: 0;
  right: 0;
  color: rgb(250, 250, 250);
  text-shadow: 0 0 10px rgba(0, 0, 0, 1);
  font-size: 6rem;
}
.hidde {
  display: none;
}
.show {
  display: block;
}
</style>
