<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/Header'
  export default {
    components: {
      appHeader: Header
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  body {
    background-color: #f5f5f8 !important; /* Needs !important because bootstrap */
    color: #262626 !important ;
    font-family: 'Roboto', sans-serif !important;
    font-size: 16px !important;
  }
  .noselect {
    -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
        -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;
}
</style>
