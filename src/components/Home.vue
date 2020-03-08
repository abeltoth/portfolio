<template>
  <div class="wrapper noselect">
    <div class="particles-container">
    <vue-particles
      color="#f5f5f8"
      :particleOpacity="0.5"
      clickMode="repulse">
    </vue-particles>
    </div>
    <div class="background-image-container">
      <img src="../assets/images/home.jpg" alt="background-image" class="background-image">
    </div>
    <div class="info-container">
      <h1 class="title">Abel Toth</h1>
      <h3 class="info">{{ newText }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      infoTextList: ['I am a web developer', 'This is my resume'],
      newText: ''
    }
  },
  created() {
    this.refreshInfoText(this.infoTextList[0]);
  },
  methods: {
    refreshInfoText(activeText) {
      this.typeInfoText(activeText)
      .then(() => {
        this.deleteInfoText(activeText)
        .then(() => {
          if (activeText === this.infoTextList[0]) {
            this.refreshInfoText(this.infoTextList[1]);
          } else {
            this.refreshInfoText(this.infoTextList[0]);
          }
        });
      });
    },
    typeInfoText(infoText) {
      return new Promise((resolve) => {
        let length = 1;
        const self = this;
        const interval = setInterval(
          function(){
            if (length === infoText.length) {
              clearInterval(interval)
              setTimeout(()=> {
                self.deleteInfoText(infoText);
                resolve();
              }, 2000);
            }
            self.newText = infoText.slice(0, length);
            length++;
          }, 100);
      });
    },
    deleteInfoText(infoText) {
      return new Promise((resolve) => {
        let length = infoText.length;
        const self = this;
        const interval = setInterval(
          function() {
            if (length === 0) {
              clearInterval(interval);
              setTimeout(()=> {
                resolve();
              }, 2000);
            }
            self.newText = infoText.slice(0, length);
            length--;
          }, 50);
      })
    }
  }
};
</script>

<style>
  .particles-container {
    position: absolute;
    z-index: 10;
    width: 100%;
    height: calc(100% - 70px);
  }
  .background-image {
    width: 100%;
    height: calc(100% - 70px);
    object-fit: cover;
    position: absolute;
    filter: brightness(50%);
  }
  .info-container {
    position: relative;
    top: -25vh;
    transform: translateY(50vh);
    text-align: center;
    display: grid;
  }
  .title {
    color: #f5f5f8;
  }
  .info {
    display: list-item;
    color: #f5f5f8;
    overflow: hidden;
    border-right: .1rem solid #f5f5f8;
    white-space: nowrap;
    margin: 0 auto;
    animation:
      blink-caret .75s step-end infinite;
  }

  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: #f5f5f8 }
  }

  @media (min-width: 576px) {
    .title {
      font-size: 60px;
    }
    .info {
      font-size: 42px;
    }
  }
  @media (min-width: 768px) {
    .title {
      font-size: 80px;
    }
    .info {
      font-size: 56px;
    }
  }
</style>