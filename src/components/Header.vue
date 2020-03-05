<template>
  <div class="header">
    <div class="home-link-container">
      <router-link to="/" class="link-item home-link" active-class="active"><img src="../assets/logo.png" alt="logo" @click="isMenuVisible=false"></router-link>
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

<style>
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
  }
  .mobile-links {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    background-color: #262626;
    position: absolute;
    top: 70px;
    width: 100%;
  }
  .desktop-links {
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-template-rows: auto;
    background-color: #262626;
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
    color: #f5f5f8;
  }

  .home-link-container {
    background-color: #262626;
    z-index: 1;
  }
  .home-link {
    margin-left: 17px;
  }
  .home-link img {
    height: 70px;
  }

  .menu-icon-container {
    color: #a0a0a0;
    height: 100%;
    background-color: #262626;
    cursor: pointer;
    z-index: 1;
    grid-column-start: 2;
  }
  .menu-icon-container:hover {
    color: #f5f5f8;
  }
  .menu-icon {
    font-size: 36px;
    float: right;
    margin: 17px;
  }

  @media (min-width: 768px) {
    .links {
      grid-template-columns: repeat(5, auto);
    }
    .header {
      grid-template-columns: 1fr 2fr;
    }
  }
</style>