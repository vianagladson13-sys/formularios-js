// Capturar o formulário 
const formEx03 = document.getElementById("formEx03");

formEx03.addEventListener("submit", function (evento) {

    evento.preventDefault();

    //Capturar inputs do html
    const Titulo = document.getElementById("Titulo");
    const Autor = document.getElementById("Autor");
    const Ano = document.getElementById("Ano");
    const Genero = document.getElementById("Genero");

    //Testar nome 
    if (Titulo.value.trim() == "") {
        // invalido 
        Titulo.classList.add("is-invalid")
        Titulo.classList.remove("is-valid")
    } else {
        // valido
        Titulo.classList.add("is-valid");
        Titulo.classList.remove("is-invalid")
    }

    if (Autor.value.trim() == "") {
        // invalido 
        Autor.classList.add("is-invalid")
        Autor.classList.remove("is-valid")
    } else {
        // valido
        Autor.classList.add("is-valid");
        Autor.classList.remove("is-invalid")
    }
    if (Ano.value.trim() == "") {
        // invalido 
        Ano.classList.add("is-invalid")
        Ano.classList.remove("is-valid")
    } else {
        // valido
        Ano.classList.add("is-valid");
        Ano.classList.remove("is-invalid")
    }
    if (Genero.value.trim() == "") {
        // invalido 
        Genero.classList.add("is-invalid")
        Genero.classList.remove("is-valid")
    } else {
        // valido
        Genero.classList.add("is-valid");
        Genero.classList.remove("is-invalid")
    }
    console.log("Titulo: " + Titulo.value);
    console.log("Autor: " + Autor.value);
    console.log("Ano: " + Ano.value);
    console.log("Genero: " + Genero.value);


});
