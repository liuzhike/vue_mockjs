<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

  export default {
    name: 'App',
    data () {
      return {}
    },
    components:{

    },
    computed:{

    }
  }
</script>

<style lang="scss">
  @import '~@/stylesheets/common.scss';
  @import '~@/stylesheets/base/reset.scss';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
