<template>
  <div class="home">
    <div class="gallery-container">
      <button class="arrow-button" @click="prevImage">&lt;</button> 
      <div class="image-container">
        <img :src="currentImage" alt="Image" class="gallery-image" /> 
        <div class="image-caption">{{ currentImageCaption }}</div>
      </div>
      <button class="arrow-button" @click="nextImage">&gt;</button> 
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          src: require('@/assets/image1.jpg'),
          caption: 'Продвижение в Instagram'
        },
        {
          src: require('@/assets/image2.jpeg'),
          caption: 'Продвижение в TikTok'
        },
        {
          src: require('@/assets/image3.jpg'),
          caption: 'Продвижение во Вконтакте'
        },
        {
          src: require('@/assets/image4.jpg'),
          caption: 'Разработка SMM-стратегии'
        },
        {
          src: require('@/assets/image5.png'),
          caption: 'Оформление социальных сетей'
        },
        {
          src: require('@/assets/image6.jpg'),
          caption: 'Таргетированная реклама'
        },
        {
          src: require('@/assets/image7.jpg'),
          caption: 'Ведение групп в социальных сетя'
        },
        {
          src: require('@/assets/image8.jpg'),
          caption: 'Фото/видео продакшн'
        }
      ],
      currentImageIndex: 0,
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentImageIndex].src;
    },
    currentImageCaption() {
      return this.images[this.currentImageIndex].caption;
    }
  },
  methods: {
    prevImage() {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    },
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }
  }
}
</script>

<style>
.home {
  background: linear-gradient(to bottom, #E667AF, #333);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 52px;
  left: 0;
  width: 100%;
  height: 90%;
}

.gallery-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%; 
  margin-bottom: 20px;
}

.arrow-button {
  background-color: transparent;
  border: none;
  font-size: 80px;
  cursor: pointer;
  color: #333;
} 

.image-container {
  position: relative;
}

.gallery-image {
  width: 900px;
  height: 550px;
  border-radius: 8px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.image-caption {
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: 90px;
  color: white;
  font-weight: bold;
}
</style>