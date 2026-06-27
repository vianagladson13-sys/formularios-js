// Capturar o formulário 
const formEx04 = document.getElementById("formEx04");

formEx04.addEventListener("submit", function (evento) {

    evento.preventDefault();

    //Capturar inputs do html
    const TamanhodoAcai = document.getElementById("TamanhodoAcai");
    const Autor = document.getElementById("Autor");
    const Ano = document.getElementById("Ano");
    const Genero = document.getElementById("Genero");

    //Testar nome 
    if (TamanhodoAcai.value.trim() == "") {
        // invalido 
        TamanhodoAcai.classList.add("is-invalid")
        TamanhodoAcai.classList.remove("is-valid")
    } else {
        // valido
        TamanhodoAcai.classList.add("is-valid");
        TamanhodoAcai.classList.remove("is-invalid")
    }

    if (saborDacalda.value.trim() == "") {
        // invalido 
        saborDacalda.classList.add("is-invalid")
        saborDacalda.classList.remove("is-valid")
    } else {
        // valido
        saborDacalda.classList.add("is-valid");
        saborDacalda.classList.remove("is-invalid")
    }
    if (Frutaadicional.value.trim() == "") {
        // invalido 
        Frutaadicional.classList.add("is-invalid")
        Frutaadicional.classList.remove("is-valid")
    } else {
        // valido
        Frutaadicional.classList.add("is-valid");
        Frutaadicional.classList.remove("is-invalid")
    }
    if (complemento.value.trim() == "") {
        // invalido 
        complemento.classList.add("is-invalid")
        complemento.classList.remove("is-valid")
    } else {
        // valido
        complemento.classList.add("is-valid");
        complemento.classList.remove("is-invalid")
    }
    console.log("Titulo: " + TamanhodoAcai.value);
    console.log("Autor: " + saborDacalda.value);
    console.log("Ano: " + Frutaadicional.value);
    console.log("Genero: " + complemento.value);


});
