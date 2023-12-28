<template>
    <div class="menu">
      <div class="logo">
        <span class="logo-text"><span class="first-word">SMM</span> 
        <span class="last-word">planner</span></span>
      </div>
      <div class="links">
        <router-link to="/" class="menu-link">Главная</router-link>
        <router-link to="/services" class="menu-link">Услуги</router-link>
      </div>
      <div class="auth">
        <router-link to="/login" class="menu-link">Войти</router-link>
        <router-link to="/registration" class="menu-link">Зарегистрироваться</router-link>
      </div>
    </div>
  </template>
  
  <style>
  .menu {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #E667AF;
    height: 50px;
    width: 100%;
    padding: 10px;
    position: fixed; 
    top: 0; 
  }
  
  .logo-text {
    margin-left: 30%;
    font-style: Serif;
    font-size: 26px;
    color: #333;
  }
  
  .first-word {
    font-weight: bold;
  }
  
  .last-word {
    font-weight: normal;
  }
  
  .links {
    margin-left: 160px;
    display: flex;
    font-style: Serif;
    font-size: 20px;
    color: #333;
  }

  .auth {
    margin-right: 30px;
    display: flex;
    font-style: Serif;
    font-size: 20px;
    color: #333;
  }
  
  .menu-link {
  margin-right: 20px;
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease-out;
}

.menu-link:hover {
  color: #FFFFFF;
  transform: scale(1.1);
}
</style>