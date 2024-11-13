<template>
  <div class="bg-dark text-white py-5">
    <div class="container py-5">
      <div class="row">
        <div class="col-md-2 text-center">
          <p>
            <i class="fa fa-exclamation-triangle fa-5x"></i><br />Status Code:
            403
          </p>
        </div>
        <div class="col-md-10">
          <h3>OPSSS!!!! Desculpe...</h3> <p> Desculpe, seu acesso foi recusado devido a razões de segurança de nosso servidor e também pela proteção dos nossos dados sensíveis.<br />Por favor, volte para a página anterior para continuar navegando. </p>
          <a class="btn btn-danger" href="javascript:history.back()">Voltar</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PermissionDenied",
};
</script>

<style>
</style>