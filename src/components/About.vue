<template>
  <div class="wrapper">
    <h2 class="title">About me</h2>
    <div class="main-area">
      <div class="profile-img-container">
        <img src="../assets/images/profile.jpg" alt="profile-image" class="profile-img" draggable="false">
      </div>
      <div class="about">
        <div class="name">Abel Toth</div>
        <div class="profession">Web developer</div>
        <div class="details">
          I am a web developer from Budapest, Hungary. I enjoy building everything from small business sites to rich interactive web apps. If you are a business seeking a web presence, or an employer looking to hire, you can get in touch with me 
          <span class="contact-link" @click="navigateToContactPage()">here.</span>
        </div>
        <div class="details">My expertise is in Frontend development, I build various web applications since 2016.</div>
        <div class="resume-btn">Download resume</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      navigateToContactPage() {
        this.$router.push('contact');
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    padding: 16px;
    max-width: 1120px;
    margin: auto;
  }
  .title {
    margin: 20px auto;
    text-transform: uppercase;
    border-top: 3px solid #262626;
    border-bottom: 3px solid #c29800;;
  }
  .main-area {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
  .profile-img-container {
    margin: 8px auto 30px;
    height: 200px;
  }
  .profile-img {
    border-radius: 50%;
    margin: auto;
    object-fit: cover;
    height: 100%;
    filter: grayscale(1) brightness(1);
    box-shadow: 0 0 5px;
  }
  .about {
    display: grid;
    grid-template-rows: repeat(4, min-content);
  }
  .name {
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: 600;
    text-transform: uppercase;
    color: #c29800;
  }
  .profession {
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
  }
  .details {
    margin-bottom: 40px;
  }
  .contact-link {
    text-decoration: underline;
    cursor: pointer;
  }
  .resume-btn {
    margin-bottom: 20px;
    width: 200px;
    height: 50px;
    cursor: pointer;
    color: #c29800;
    background-color: transparent;
    border: 2px solid #c29800;
    border-radius: 5px;
    font-size: 18px;
    line-height: 46px;
    text-align: center;
  }

  .resume-btn:hover {
    background-color: #c29800;
    color: #f5f5f8;
  }

  @media (min-width: 567px) {
    .profile-img-container {
      height: 300px;
    }
  }

  @media (min-width: 768px) {
    .main-area {
      grid-template-columns: 5fr 7fr;
      margin-top: 60px;
      gap: 20px;
    }
  }
</style>
