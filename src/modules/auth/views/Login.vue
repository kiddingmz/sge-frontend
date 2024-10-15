<template>
  <div class="container">
    <div class="content-form">
      <div class="header-form">
        <div class="logo-acronym">
          <img class="logo-image" :src="require('@/assets/logo-uem.png')" alt="imagem logo">
          <div class="div-bar"></div>
          <h3 class="text-uppercase text-center">SIGE</h3>
        </div>
        <h3 class="text-logo text-center">SISTEMA DE GESTAO DE ESTUDANTES</h3>
      </div>
      <form @submit.prevent="login" class="d-flex flex-column body-form">
<!--        <div class="input-group mb-3">-->
<!--          <div class="input-group-prepend">-->
<!--            <span class="input-group-text" id="basic-addon1">@</span>-->
<!--          </div>-->
<!--          <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">-->
<!--        </div>-->
        <div class="d-flex flex-column body-form-input">
          <label for="email">Email</label>
          <input type="email" v-model="email" id="email" name="email" placeholder="email" />
        </div>
        <div class="d-flex flex-column body-form-input">
          <label for="password">Password</label>
          <input type="password" v-model="password" id="password" name="password" placeholder="password"/>
        </div>
        <button type="submit" class="btn btn-success" :disabled="loading">Entrar</button>
        <a href="#" class="a-link">Esqueceu senha?</a>
      </form>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {

  name: "AuthLogin",
  data() {
    return {
      email: "",
      password: "",
      loading: false,
    };
  },
  methods: {
    login() {
      if (this.email === '' || this.password === '') {
        this.showErrorAlert('O nome e senha não podem estar vazios.');
        return;
      }
      this.loading = true;
      this.$store
          .dispatch("retrieveToken", {
            email: this.email,
            password: this.password,
          })
          .then((response) => {
            this.loading = false;
            // if (this.$router.history.current.name) {
            //   this.$router.go(-1);
            // } else {
            //   this.$router.push({ name: 'Home' });
            // }
            this.$router.push({ name: 'student'});
          })
          .catch((error) => {
            this.loading = false;
            this.showErrorAlert(error);
            this.password = "";
            this.email = "";
          });
    },
    showErrorAlert(msg) {
      this.$swal({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        icon: "error",
        title: msg,
      });
    },
  },

  mounted() {},
};
</script>

<style>
.content-form {
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
  background-color:#fff;
  border: 1px solid black;
}

.header-form .logo-acronym{
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin:.5rem;
  height: 130px;
  
}
.header-form .logo-image{
  height: 100px;
  width: 100px;
}
.header-form .div-bar{
  border-left: 5px solid black;
  height: 100px;
  border-color: #047D4B;
}
.header-form .text-uppercase{
  font-weight: 900;
  font-size: 2rem;
  color: #047D4B;
  
}
.header-form .text-logo{
  display: block;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.6rem;
  width: 100%;
  margin:0 10px 25px 0px;

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

.text-danger {
  color: red;
}

input {
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 10px;
  width: 100%;
  height: 34px;
  }
  input:focus{
   outline: solid .5px #047D4B;;
     
  }
 
</style>