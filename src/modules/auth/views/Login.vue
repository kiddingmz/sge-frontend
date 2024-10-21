<template>
  <div class="container">
    <div class="content-form">
      <div class="header-form">
        <div class="logo-acronym">
          <img class="logo-image" :src="require('@/assets/logo-uem.png')" alt="imagem logo">
          <div class="div-bar"></div>
          <h3 class="text-uppercase text-center">SIGE</h3>
        </div>
        <h5 class="text-logo text-center">SISTEMA DE GESTAO DE ESTUDANTES</h5>
      </div>
      <form @submit.prevent="login" class="d-flex flex-column body-form">
<!--        <div class="input-group mb-3">-->
<!--          <div class="input-group-prepend">-->
<!--            <span class="input-group-text" id="basic-addon1">@</span>-->
<!--          </div>-->
<!--          <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">-->
<!--        </div>-->
        <div class="d-flex flex-column body-form-input">
          <label for="email" class="size-n">Email</label>
          <input type="email" class="size-n" v-model="email" id="email" name="email" placeholder="email" />
        </div>
        <div class="d-flex flex-column body-form-input">
          <label for="password" class="size-n">Password</label>
          <input type="password" class="size-n" v-model="password" id="password" name="password" placeholder="password"/>
        </div>
        <button type="submit" class="btn btn-success size-n" :disabled="loading">Entrar</button>
        <a href="#" class="a-link size-n">Esqueceu senha?</a>
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
            this.showSuccessAlert('Login efectuado com sucesso')
            // if (this.$router.history.current.name) {
            //   this.$router.go(-1);
            // } else {
            //   this.$router.push({ name: 'Home' });
            // }
            this.$router.push({ name: 'Home'});
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
    showSuccessAlert(msg) {
      this.$swal({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        icon: "success",
        title: msg,
      });
    },
  },

  mounted() {},
};
</script>

<style>
.size-n {
  font-size: 0.8rem !important;
}

.size-m {
  font-size: 0.9rem !important;
}

.size-l {
  font-size: 1rem !important;
}

.content-form {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
  background-color:#fff;
  border: 1px solid #047D4B;
}

.header-form .logo-acronym{
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin:.5rem;
  height: 130px;
  
}
.header-form .logo-image{
  height: 80px;
  width: 80px;
}
.header-form .div-bar{
  border-left: 5px solid black;
  height: 70px;
  border-color: #047D4B;
}
.header-form .text-uppercase{
  font-weight: 900;
  font-size: 1.8rem;
  color: #047D4B;
  
}
.header-form .text-logo{
  display: block;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1rem;
  width: 100%;
  margin:0 10px 25px 0px;

}

.body-form {
  background-color: #fff;
  border-radius: 5px;
  gap: 11px;
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