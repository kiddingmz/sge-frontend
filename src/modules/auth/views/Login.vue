<template>
  <div class="container">
    <div class="content-form">
      <div class="header-form">
        <h2 class="text-uppercase text-center">SISTEMA DE GESTÃO DE ESTUDANTES</h2>
      </div>
      <form class="d-flex flex-column body-form">
        <div class="d-flex flex-column body-form-input">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" placeholder="email" />
        </div>
        <div class="d-flex flex-column body-form-input">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" placeholder="password"/>
        </div>
        <button type="submit" class="btn btn-success">Entrar</button>
        <a href="#" class="a-link">Esqueceu senha?</a>
      </form>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
  export default {
    name: 'Login',
  };
</script>

<style>
  .content-form {
    width: 100%;
    max-width: 350px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 5px;
    background-color: #ECECEC;
  }

  .header-form {
    margin-bottom: 20px;
    height: 130px;
  }

  .body-form {
    background-color: #fff;
    border-radius: 5px;
    gap: 20px;
    padding: 20px 20px 50px;
  }

  .body-form-input {
    gap: 6px;
  }

  .a-link {
    color: #1E1E1E;
  }

  input {
  }

</style>

