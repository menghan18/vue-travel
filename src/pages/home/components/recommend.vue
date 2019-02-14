<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="item.title">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201403/07/30b534b0de51ccac2906bcb6ba159988.jpg_200x200_2f08733b.jpg',
        title: '长隆欢乐世界',
        desc: '熊猫三胞胎与您共享欢乐时光'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201405/27/ef08b0cb4a5afb2f570e5c4dff5f743e.jpg_200x200_f3ad8918.jpg',
        title: '长隆国际大马戏剧院',
        desc: '跟着大马戏团一起party~'
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1707/88/889ae02b07140066a3.img.jpg_200x200_d3b1427c.jpg',
        title: '长隆欢乐世界',
        desc: '爱挑战的你怎能错过垂直过山车'
      }, {
        id: '004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1410/20/41d723daadc98045fe6b7283ba0af40c.jpg_200x200_5a05d5bc.jpg',
        title: '碧水湾温泉度假村',
        desc: ''
      }, {
        id: '005',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201310/22/957335b50b114829c8d65eac.jpg_200x200_d302f58f.jpg',
        title: '长隆飞鸟乐园',
        desc: '长隆飞鸟乐园，一个真正看鸟飞的地方'
      }, {
        id: '006',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1601/3d/3dc7f222d6bca6a790.img.jpg_200x200_e0bb3017.jpg',
        title: '广州花城汇MAG环球魔幻世界',
        desc: '《奔跑吧兄弟》取景地'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/mixins.styl';
.title
  margin-top .2rem
  line-height .8rem
  background #eee
  text-indent .2rem
.item
  overflow hidden
  display flex
  height 1.9rem
  .item-img
    width  1.7rem
    height 1.7rem
    padding .1rem
  .item-info
    flex 1
    padding .1rem
    min-width 0
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #ccc
      ellipsis()
    .item-button
      line-height .44rem
      margin-top .16rem
      background #ff9300
      padding 0 .2rem
      border-radius .06rem
      color #fff
</style>
