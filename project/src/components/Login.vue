<template>
    <div class="login-container">
      <h2 style="text-align: center;">Авторизация</h2>
      <form>
        <div class="form-group">
          <label for="emailPhone">Почта/Номер телефона:</label>
          <input type="text" id="emailPhone" v-model="emailPhone" required>
        </div>
        <div class="form-group">
          <label for="password">Пароль:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button class="log" @click="login">Войти</button>
      </form>
    </div>
  </template>
  
  <script>
export default {
  data() {
    return {
      emailPhone: '',
      password: ''
    };
  },
  methods: {
    login() {
      this.$router.push('/');
    }
  }
};
</script>
  
  <style>
  .login-container {
    max-width: 400px;
    margin: 5% auto;
    padding: 20px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }
  
  .form-group {
    margin-bottom: 20px;
    width: 380px;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  input {
    width: 100%;
    padding: 10px;
  }
  
  .log {
    width: 400px;
    padding: 10px;
    background-color: #333333;
    color: #ffffff;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }
  
  .log:hover {
    background-color: #555555;
  }
  </style>