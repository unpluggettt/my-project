<template>
    <div class="vue-carousel-container">
      <h1>SMM услуги</h1>
      <vue-carousel>
        <slide class="vue-carousel-slide">
          <img src="@/assets/image1.jpg" alt="Картинка 1">
          <div class="caption">Продвижение в Instagarm</div>
        </slide>
        <slide class="vue-carousel-slide">
          <img src="@/assets/image2.jpeg" alt="Картинка 2">
          <div class="caption">Продвижение в TikTok</div>
        </slide>
        <slide class="vue-carousel-slide">
          <img src="@/assets/image3.jpg" alt="Картинка 3">
          <div class="caption">Продвижение во "Вконтакте</div>
        </slide>
        <slide class="vue-carousel-slide">
          <img src="@/assets/image4.jpg" alt="Картинка 4">
          <div class="caption">Разработка SMM-стратегии</div>
        </slide>
        <slide class="vue-carousel-slide">
          <img src="@/assets/image5.png" alt="Картинка 5">
          <div class="caption">Оформление социальных сетей</div>
        </slide>
        <slide class="vue-carousel-slide">
          <img src="@/assets/image6.jpg" alt="Картинка 6">
          <div class="caption">Таргетированная реклама</div>
        </slide>
        <slide class="vue-carousel-slide">
          <img src="@/assets/image7.jpg" alt="Картинка 7">
          <div class="caption">Ведение групп в социальных сетях</div>
        </slide>
        <slide class="vue-carousel-slide">
          <img src="@/assets/image8.jpg" alt="Картинка 8">
          <div class="caption">Фото/видео продакшн</div>
        </slide>
      </vue-carousel>
    </div>
  </template>
  
  <script>
    import VueCarousel, {slide } from 'vue-carousel';

        export default {
        components: {
            VueCarousel,
            slide
        }
    };
</script>