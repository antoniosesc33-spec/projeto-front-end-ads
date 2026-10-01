const formulario = document.querySelector("form");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;

  alert(`Obrigado, ${nome}! Recebemos seu contato pelo e-mail ${email}.`);

  formulario.reset();
});
