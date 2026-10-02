const formulario = document.querySelector("form");
const botaoContraste = document.getElementById("contraste");

botaoContraste.addEventListener("click", function () {
    document.body.classList.toggle("alto-contraste");
});

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    alert(`Obrigado, ${nome}! Recebemos seu contato pelo e-mail ${email}.`);

    formulario.reset();
});
