<template>
  <div class="wrapper">
    <h2 class="title">About me</h2>
    <div class="subtitle">Here is some information about me</div>
    <div class="main-area">
      <div class="profile-img-container">
        <img src="../assets/images/profile.jpg" alt="profile-image" class="profile-img">
      </div>
      <div class="about">
        <div class="name">Abel Toth</div>
        <div class="profession">Web developer</div>
        <div class="details">I am a web developer from Budapest, Hungary. I enjoy building everything from small business sites to rich interactive web apps. If you are a business seeking a web presence, or an employer looking to hire, you can get in touch with me here.</div>
        <div class="resume-btn">Download resume</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    padding: 16px;
  }
  .title {
    margin: auto;
    text-transform: uppercase;
    border-top: 3px solid #262626;
    border-bottom: 3px solid #c29800;;
  }
  .subtitle {
    margin: auto;
  }
  .main-area {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
  .profile-img-container {
    margin: auto;
    text-align: center;
  }
  .profile-img {
    border-radius: 50%;
    max-width: 80%;
    margin: auto;
    filter: grayscale(1) brightness(1);
  }
  .about {
    margin: auto;
    display: grid;
  }
  .name {
    margin: auto;
  }
  .profession {
    margin: auto;
  }
  .details {
    margin: auto;
  }
  .resume-btn {
    margin: auto;
    width: 160px;
    height: 50px;
    cursor: pointer;
    color: #c29800;
    background-color: transparent;
    border: 2px solid #c29800;
    border-radius: 5px;
    font-size: 18px;
    line-height: 45px;
    text-align: center;
  }

  .resume-btn:hover {
    background-color: #c29800;
    color: #f5f5f8;
  }
</style>
