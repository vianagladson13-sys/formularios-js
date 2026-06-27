// Capturar o formulário 
const formEx02 = document.getElementById("formEx02");

formEx02.addEventListener("submit", function (evento) {

    evento.preventDefault();

    //Capturar inputs do html
    const cliente = document.getElementById("cliente");
    const Tamanho = document.getElementById("Tamanho");
    const Pizza = document.getElementById("Pizza");
    const Bebida = document.getElementById("Bebida");

    //Testar nome 
    if (cliente.value.trim() == "") {
        // invalido 
        cliente.classList.add("is-invalid")
        cliente.classList.remove("is-valid")
    } else {
        // valido
        cliente.classList.add("is-valid");
        cliente.classList.remove("is-invalid")
    }

    if (Tamanho.value.trim() == "") {
        // invalido 
        Tamanho.classList.add("is-invalid")
        Tamanho.classList.remove("is-valid")
    } else {
        // valido
        Tamanho.classList.add("is-valid");
        Tamanho.classList.remove("is-invalid")
    }
    if (Pizza.value.trim() == "") {
        // invalido 
        Pizza.classList.add("is-invalid")
        Pizza.classList.remove("is-valid")
    } else {
        // valido
        Pizza.classList.add("is-valid");
        Pizza.classList.remove("is-invalid")
    }
    if (Bebida.value.trim() == "") {
        // invalido 
        Bebida.classList.add("is-invalid")
        Bebida.classList.remove("is-valid")
    } else {
        // valido
        Bebida.classList.add("is-valid");
        Bebida.classList.remove("is-invalid")
    }
    console.log("cliente: " + cliente.value);
    console.log("Tamanho: " + Tamanho.value);
    console.log("Tamanho: " + Pizza.value);
    console.log("Tamanho: " + Bebida.value);


});
