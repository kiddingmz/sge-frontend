<template>
    <div class="container-md">
        <div class="row">
            <hr class="pt-2 mt-3">
            <div class="col-12 text-center m-3"> Avaliacoes </div>
            <hr class="mt-3 pt-2">
            <div class="row ms-auto  d-flex align-items-center justify-content-between col-12">
            <div class="col-8  d-flex align-items-center justify-content-start gap-4"> <span>Icon</span> <h3>Nome do Docente</h3></div>
            <div class="col-2 flex-end">Disciplina</div>
            </div>
    </div>
    <div class="body">
        <div class="row">
        <div class="col-12">
            <div class="card ">
                <div class="card-body w-100">
                    <div class="row  gap-3 d-flex justify-content-between align-items-center">
                        <div class="input-group mb-3 col">
                        <label class="input-group-text" for="inputGroupSelect01">Tipo do Avaliacao</label>
                        <select class="form-select" id="inputGroupSelect01">
                            <option selected>Nao selecionado</option>
                            <option value="1">Teste 1</option>
                            <option value="2">Teste 2</option>
                            <option value="3">Teste 3</option>
                        </select>
                        </div>
                        
                        <div class="input-group mb-3 col">
                            <span class="input-group-text" id="inputGroup-sizing-peso">Peso</span>
                            <input type="text" class="form-control" aria-label="Sizing peso input" aria-describedby="inputGroup-sizing-peso">
                        </div>

                    </div>
                    <div class="row gap-3 d-flex justify-content-between align-items-center">
                        <div class="input-group mb-3 col">
                            <span class="input-group-text" id="inputGroup-sizing-ano">Ano</span>
                            <input type="text"  value="2024" class="form-control " aria-label="Sizing Ano input" aria-describedby="inputGroup-sizing-ano">
                        </div>
                        
                        <div class="input-group mb-3 col">
                            <span class="input-group-text" id="inputGroup-sizing-data">Data Realizada</span>
                            <input type="date" class="form-control" aria-label="Sizing data input" aria-describedby="inputGroup-sizing-data">
                        </div>
                        <div class="input-group mb-3 col">
                            <label class="input-group-text" for="inputGroupSelect02">Estado</label>
                            <select class="form-select" id="inputGroupSelect02">
                                <option selected>Nao selecionado</option>
                                <option value="1">Activo</option>
                                <option value="2">Publicado</option>
                            </select>
                        </div>
                        <div class="col-1 btn-add-style mb-3">
                            <button class="btn btn-base btn-primary w-100">Add</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>

    <div class="row mt-5">
        <div class="col-12">
            <div class="card">
            <div class="card-body w-100">
                <label>Testes adicionados</label>
                <div class="table-body">
                    <table class="table">
                    <tr>
                        <th class="col">Tipo de Avaliacao</th>
                        <th class="col">Peso</th>
                        <th class="col">Data Realizada</th>
                        <th class="col">Estado</th>
                        <th class="col">Operacoes</th>
                    </tr>
                        <tr>
                            <td>teste 1</td>
                            <td>30</td>
                            <td>2024-10-12</td>
                            <td>Activo</td>
                            <td><span class="btn-operation d-flex justify-content-center align-items-center gap-5"><button class="btn-edit">Edit</button><button class="btn-closee">X</button></span></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>

        </div>
    </div>
    </div>
    </div>
</template>
<script>
    export default {
        name:'AvaliacaoView',
        components:{
            
        },
        data(){
                return{
                   teste1:'teste 1' 
                }
            }
    }
</script>
<style>
.btn-edit{
    background-color:#0093e6; 
}
.btn-operation button{
    width: 4rem;
    padding: 0.25rem; 
    border-radius: .6rem;
    border: none;
    color: #fff;
    
}
.btn-add-style{
    display: flex;
    align-items: center;
    justify-content: space-between;
    
}
.btn-edit:hover{
        background:#33a9eb;
    }
.btn-closee:hover{
    background:#ea474a;

}

.btn-closee{
    background-color: #b80c09;
}
.table{
    tr>th,td{
        text-align: center;
    }
    border: 1px solid black;
    width: 100%;
}
</style>