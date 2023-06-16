//Função Validar

function validar() {
    //pegando o valor do nome pelos IDs
    var nome = document.getElementById("Nome");

    //Verificar se o nome está vazio
    if (nome.value == ""){
        alert("Nome não informado")
        
        //DEIXA O INPUT COM O FOCUs
        nome.focus();
    
    }

}