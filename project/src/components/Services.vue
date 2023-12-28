<template>
    <div>
      <h1>SMM услуги</h1>
      <div class="carousel">
        <carousel-item v-for="item in carouselItems" :key="item.id" :item="item"></carousel-item>
      </div>
    </div>
  </template>
  
  <script>
  import CarouselItem from '@/components/CarouselItem.vue';
  
  export default {
    components: {
      CarouselItem
    },
    data() {
      return {
        carouselItems: [
          { id: 1, image: require('@/assets/image1.jpg'), caption: 'Продвижение в Instagarm' },
          { id: 2, image: require('@/assets/image2.jpg'), caption: 'Продвижение в TikTok' },
          { id: 3, image: require('@/assets/image3.jpg'), caption: 'Продвижение во "Вконтакте"' },
          { id: 4, image: require('@/assets/image4.jpg'), caption: 'Разработка SMM-стратегии' },
          { id: 5, image: require('@/assets/image5.jpg'), caption: 'Оформление социальных сетей' },
          { id: 6, image: require('@/assets/image6.jpg'), caption: 'Таргетированная реклама' },
          { id: 7, image: require('@/assets/image7.jpg'), caption: 'Ведение групп в социальных сетях' },
          { id: 8, image: require('@/assets/image8.jpg'), caption: 'Фото/видео продакшн' },
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .carousel {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  
  .carousel-item {
    width: 200px;
    height: 200px;
    margin: 10px;
    text-align: center;
  }
  
  .carousel-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  </style>