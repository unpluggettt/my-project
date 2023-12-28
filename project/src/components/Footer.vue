<template>
    <div class="footer">
      <div class="contact-info">
        <span class="phone">Связаться с нами: 89285820482</span><br>
        <span class="company">ИП Шабалина К.К.</span>
      </div>
      <div class="social-media">
        <div class="social">
          <img src="@/assets/tg.png" class="social-icon">
          <span class="social-link">Telegram</span>
        </div>
        <div class="social">
          <img src="@/assets/inst.png" class="social-icon">
          <span class="social-link">Instagram</span>
        </div>
        <div class="social">
          <img src="@/assets/vk.png" class="social-icon">
          <span class="social-link">VK</span>
        </div>
      </div>
    </div>
  </template>
  
  <style>
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 75px;
    background-color: #333333;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    font-size: 16px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }
  
  .contact-info {
    margin-left: 30px;
    width: 500px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 16px;
    margin-bottom: 10px;  
  }
  
  .social-media {
    margin-right: 30px;
    display: flex;
    align-items: center;
  }
  
  .social {
    display: flex;
    align-items: center;
    margin-right: 20px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 18px;
    margin-bottom: 10px;  
  }
  
  .social-icon {
    width: 55px;
    height: 30px;
    margin-right: 2px;
  }
  
  .social-link {
    transition: all 0.2s;
    cursor: pointer;
  }
  
  .social-link:hover {
    color: #E667AF;
  }
  </style>