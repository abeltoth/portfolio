<template>
  <div class="header">
    <div class="home-link-container">
      <router-link to="/" class="link-item home-link" active-class="active">
        <div class="svg-container" @click="isMenuVisible=false">
          <svg class="svg no-width">
            <clipPath id="logo-clip-path" clipPathUnits="objectBoundingBox"><path d="M0.585,0 L0.516,0.166 l0.021,0.051 l0.048,-0.115 l0.354,0.853 h-0.128 L0.415,0 L0,1 h0.171 h0.001 h0.03 h0.013 c0.009,-0.017,0.018,-0.034,0.029,-0.049 c0.061,-0.088,0.153,-0.145,0.257,-0.145 s0.197,0.057,0.257,0.145 c0.011,0.016,0.02,0.032,0.029,0.049 h0.012 h0.031 h0.001 H1 L0.585,0 M0.274,0.853 l0.129,-0.311 h0.161 l-0.019,-0.045 H0.422 l0.062,-0.15 l-0.021,-0.051 L0.189,0.955 H0.061 L0.415,0.103 l0.31,0.748 c-0.062,-0.056,-0.14,-0.09,-0.225,-0.09 C0.415,0.761,0.337,0.795,0.274,0.853"></path></clipPath>
          </svg>
        </div>
      </router-link>
    </div>
    <!-- Desktop menu -->
      <div v-if="!mobileMode" class="desktop-links">
        <router-link to="/about" class="link-item" active-class="active"><a>About</a></router-link>
        <router-link to="/skills" class="link-item" active-class="active"><a>Skills</a></router-link>
        <router-link to="/work-experience" class="link-item" active-class="active"><a>Work experience</a></router-link>
        <router-link to="/portfolio" class="link-item" active-class="active"><a>Portfolio</a></router-link>
        <router-link to="/contact" class="link-item" active-class="active"><a>Contact</a></router-link>
      </div>
    <!-- Mobile menu -->
      <div v-if="mobileMode" class="menu-icon-container" @click="isMenuVisible = !isMenuVisible">
        <i class="material-icons menu-icon">menu</i>
      </div>
    <transition name="translateY">
      <div v-if="mobileMode && isMenuVisible" class="mobile-links">
        <router-link to="/about" class="link-item" active-class="active"><a @click="isMenuVisible=false">About</a></router-link>
        <router-link to="/skills" class="link-item" active-class="active"><a @click="isMenuVisible=false">Skills</a></router-link>
        <router-link to="/work-experience" class="link-item" active-class="active"><a @click="isMenuVisible=false">Work experience</a></router-link>
        <router-link to="/portfolio" class="link-item" active-class="active"><a @click="isMenuVisible=false">Portfolio</a></router-link>
        <router-link to="/contact" class="link-item" active-class="active"><a @click="isMenuVisible=false">Contact</a></router-link>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "navbar",
    data() {
      return {
        isMenuVisible: false,
        mobileMode: false
      }
    },
    created() {
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
    },
    destroyed() {
      window.removeEventListener('resize', this.handleResize);
    },
    methods: {
      handleResize() {
        if (window.innerWidth < 768) {
          this.mobileMode = true;
        } else {
          this.mobileMode = false;
        }
      }
    }
  };
</script>

<style scoped>
  .translateY-enter-active, .translateY-leave-active {
    transition: all 1s ease;
  }
  .translateY-enter, .translateY-leave-to {
    transform: translateY(-420px);
  }

  .header {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    background-color: #262626;
  }
  .mobile-links {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    background-color: #262626;
    position: absolute;
    top: 70px;
    width: 100%;
    z-index: 50;
  }
  .desktop-links {
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-template-rows: auto;
  }
  .link-item {
    color: #a0a0a0;
    margin: auto;
    height: 70px;
    font-size: 20px;
    display: grid;
    align-content: center;
  }
  .link-item:hover {
    text-decoration: none;
    color: #c29800;
  }
  .svg-container {
    width: 56px;
    height: 40px;
    background-color: #a0a0a0;
    background-size: cover;
    -webkit-clip-path: url(#logo-clip-path);
    clip-path: url(#logo-clip-path);
  }
  .home-link-container {
    z-index: 100;
  }
  .home-link {
    margin: 0 17px;
  }
  .home-link img {
    height: 70px;
  }

  .menu-icon-container {
    color: #a0a0a0;
    height: 100%;
    background-color: #262626;
    cursor: pointer;
    z-index: 100;
    grid-column-start: 2;
  }
  .menu-icon-container:hover {
    color: #c29800;
  }
  .menu-icon {
    font-size: 36px;
    float: right;
    margin: 17px;
  }

  @media (min-width: 576px) {
    .svg-container {
      width: 70px;
      height: 50px;
    }
  }

  @media (min-width: 768px) {
    .links {
      grid-template-columns: repeat(5, auto);
    }
    .header {
      grid-template-columns: 1fr minmax(10px, 800px);
    }
  }
</style>