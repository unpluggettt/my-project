<template>
    <div class="registration-container">
      <h2 style="text-align: center;">Регистрация</h2>
      <form @submit="register">
        <div class="form-group">
          <label for="firstName">Имя:</label>
          <input type="text" id="firstName" v-model="firstName" required>
        </div>
        <div class="form-group">
          <label for="lastName">Фамилия:</label>
          <input type="text" id="lastName" v-model="lastName" required>
        </div>
        <div class="form-group">
          <label for="email">Почта:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="phone">Номер телефона:</label>
          <input type="text" id="phone" v-model="phone" required>
        </div>
        <div class="form-group">
          <label for="password">Пароль:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <div class="form-group">
          <label for="confirmPassword">Подтверждение пароля:</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" required>
        </div>
        <div v-if="password && confirmPassword && password !== confirmPassword" class="error">
          Пароли не совпадают.
        </div>
        <button class="reg" @click="registration">Зарегистрироваться</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
      };
    },
    methods: {
        registration() {
      this.$router.push('/login');
    },
      register(e) {
        e.preventDefault();
  
        if (this.password !== this.confirmPassword) {
          console.log('Пароли не совпадают');
          return;
        }
        console.log('Регистрация прошла успешно!');
      }
    }
    };
  </script>
  
  <style>
  .registration-container {
    max-width: 400px;
    margin: 6% auto;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .error {
    color: red;
  }
  
  .reg {
    width: 400px;
    padding: 10px;
    background-color: #333333;
    color: #ffffff;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }
  
  .reg:hover {
    background-color: #555555;
  }
  </style>