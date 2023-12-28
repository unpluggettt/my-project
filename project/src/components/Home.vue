<template>
    <div class="home-container1">
      <div class="home-container">
        <h1 class="main-header">SMM агентство Planner</h1>
        <p class="main-subheader">
          Помогает бизнесу решать задачи и достигать целей через эффективное продвижение в социальных сетях.
        </p>
        <p class="main-text">
          Мы разрабатываем комплексные SMM-стратегии с учетом специфики и потребностей клиента. Формируем бренд-платформу и позиционирование. Создаем качественный контент и настраиваем таргетированную рекламу для привлечения реальных клиентов.
        </p>
        <p class="main-text">
          Гарантируем достижение прогнозируемых KPI по охвату аудитории и конверсиям. Защищаем инвестиции клиента и соблюдаем правила социальных сетей.
        </p>
        <p class="main-subheader">
          Получите экспертный аудит сообществ и коммерческое предложение прямо сейчас!
        </p>
            <div class="checkmarks">
                <button class="send" @click="showMessage">Получить экспертный аудит</button>
                <div class="chek">
                    <span class="checkmark"><span class="first-word1">✓ &nbsp;</span> 
                    <span class="last-word1">Создаем интересный, <br> яркий контент</span></span>
                </div>
                <div class="chek">
                    <span class="checkmark"><span class="first-word1">✓ &nbsp;</span> 
                    <span class="last-word1">Вызываем симпатию у <br> потенциальных <br> клиентов</span></span>
                </div>
                <div class="chek">
                    <span class="checkmark"><span class="first-word1">✓ &nbsp;</span> 
                    <span class="last-word1">Генерируем заявки <br> из соцсетей</span></span>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <style>
  .home-container1{
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    height: 90%;
    background-image: url('@/assets/fon.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
  }
  .home-container{
    color: white;
    text-align: left;
    width: 90%;
    margin: 5%;
  }
  .main-header {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 40px;
    margin-bottom: 20px;
  }
  .main-subheader {
    font-size: 26px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    margin-bottom: 10px;
  } 
  .main-text {
    font-size: 18px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    margin-bottom: 10px;
  }
  .send {
    height: 50px;
    width: 350px;
    display: block;
    margin: 50px auto;
    border: none; 
    border-radius: 5px; 
    text-align: center; 
    text-decoration: none; 
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    background-color: #E667AF;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 18px;
    color: #333;
  }
  .send:hover {
     background-color: #5a2a45;  
     color: white;
  }
  .chek{
    margin: 50px 5px 0px 100px;
    width: 300px;
    height: auto;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 18px; 
  }
  .checkmarks{
    display: flex;
    flex-direction: row;
    justify-content: flex-start; 
    align-items: stretch;
  }
  .first-word1{
    font-size: 30px;
    color: #E667AF;
  }
  .last-word1{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 18px;
    margin-bottom: 10px;    
  }
  </style>

<script> 
export default {
  methods: {
    showMessage() {
      alert('Специалист позвонит Вам через 15 минут!');
    }
  }
}; 
</script>