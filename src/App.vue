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
  @import url('https://fonts.googleapis.com/css?family=Unna&display=swap');
  body {
    background-color: #f5f5f8 !important;
    font-family: 'Unna', serif;
    font-size: 32px;
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
