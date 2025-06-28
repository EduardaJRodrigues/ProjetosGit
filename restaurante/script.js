document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form-reserva');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Impede o envio real

      // Pegando os valores dos campos
      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const telefone = document.getElementById('telefone').value.trim();
      const data = document.getElementById('data').value;
      const hora = document.getElementById('hora').value;
      const pessoas = document.getElementById('pessoas').value;

      // Validação personalizada
      if (!nome) {
        alert("Por favor, preencha o nome completo.");
        return;
      }

      if (!email) {
        alert("Por favor, preencha o e-mail.");
        return;
      }

      if (!telefone) {
        alert("Por favor, preencha o telefone.");
        return;
      }

      if (!data) {
        alert("Por favor, selecione a data da reserva.");
        return;
      }

      if (!hora) {
        alert("Por favor, selecione o horário.");
        return;
      }

      if (!pessoas) {
        alert("Por favor, selecione o número de pessoas.");
        return;
      }

      // Se todos os campos estiverem preenchidos:
      alert("Reserva confirmada com sucesso!");
      form.reset();
    });
  } else {
    console.error("Formulário com id 'form-reserva' não encontrado.");
  }
});
