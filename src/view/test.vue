<template>
  <div class="main">
    <div>
      <button @click="queryFn('get')">get请求</button>
      <button @click="queryFn('post')">post请求</button>
      <button @click="queryFnTwo('get')">get2请求</button>
      <button @click="queryFnTwo('post')">post2请求</button>
    </div>
    <div>
      <div class="item-box" v-for="item in getListData">
        <div>
          <img :src="item.imgUrl" alt="">
        </div>
        <div>
          <span>{{item.title}}</span>---
          <span>{{item.name}}</span>
          <span>{{item.date}}</span>
        </div>
        <div>
          <button @click="queryFn('post',item.id)">删除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState, mapGetters, mapMutations } from 'vuex'

  export default {
    name: '',
    // variables
    data () {
      return {
        time: '',
        mgName: '',
        schoolCode: ''
      }
    },
    computed: {
      ...mapGetters('test', ['getListData']),
    },
    created: function () {
    },
    mounted: function () {

    },
    components: {},
    methods: {
      queryFn (type,id) {
        const that = this
        if (type === 'get') {
          that.$store.dispatch('test/queryListGet')
        }
        if (type === 'post') {
          that.$store.dispatch('test/queryListPost',{id:id})
        }
      },
      queryFnTwo (type,id) {
        const that = this
        if (type === 'get') {
          that.$store.dispatch('test/queryListGetTwo')
        }
        if (type === 'post') {
          that.$store.dispatch('test/queryListPostTwo',{id:id})
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/stylesheets/common.scss';

  .main {
    .item-box{
      padding: 20px 0;
    }
  }


</style>
