<template>
  <div class="wrapper">
    <h2 class="title">About me</h2>
    <div class="subtitle">Here is some information about me</div>
    <div class="main-area">
      <div class="profile-img-container">
        <img src="../assets/images/profile.jpg" alt="profile-image" class="profile-img" draggable="false">
      </div>
      <div class="about">
        <h3 class="name">Abel Toth</h3>
        <h4 class="profession">Web developer</h4>
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
    margin: 20px auto;
    text-transform: uppercase;
    border-top: 3px solid #262626;
    border-bottom: 3px solid #c29800;;
  }
  .subtitle {
    margin: 0 auto 30px;
  }
  .main-area {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
  .profile-img-container {
    margin: 0 auto 30px;
    padding: 0 10%;
  }
  .profile-img {
    border-radius: 50%;
    margin: auto;
    object-fit: cover;
    width: 100%;
    height: 100%;
    filter: grayscale(1) brightness(1);
    box-shadow: 0 0 5px;
  }
  .about {
    margin: auto;
    display: grid;
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
    margin-bottom: 20px;
  }
  .resume-btn {
    margin: 0 auto 20px;
    width: 160px;
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
</style>
