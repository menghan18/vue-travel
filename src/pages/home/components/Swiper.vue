<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="去哪儿门票">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: 2500,
        loop: true
      }
    }
  },
  computed: {
    // 使swiper组件在接收到list数据后再创建，防止渲染完成时展示的不是首张图
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background: #fff
.wrapper
  overflow: hidden
  // height 31.25vw
  width: 100%
  // 高度设为0，以padding填充，防止轮播图下方内容因网络原因抖动
  height: 0
  padding-bottom: 31.25%
  .swiper-img
    width: 100%
</style>
