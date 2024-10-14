<template>
  <div class="container">
    <div class="content-form">
      <div class="header-form">
        <h3 class="text-uppercase text-center">SISTEMA DE GESTÃO DE ESTUDANTES</h3>
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

.text-danger {
  color: red;
}

input {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
}
</style>