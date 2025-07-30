 window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  const dataAlvo = new Date("2026-10-31T00:00:00");

function atualizarContagem() {
  const agora = new Date();
  const diferenca = dataAlvo - agora;

  if (diferenca <= 0) {
    document.querySelector(".timer").innerHTML = "<h2>🎉 Chegou o grande dia! 🎉</h2>";
    clearInterval(intervalo);
    return;
  }

  const segundosTotais = Math.floor(diferenca / 1000);
  const dias = Math.floor(segundosTotais / 86400);
  const horas = Math.floor((segundosTotais % 86400) / 3600);
  const minutos = Math.floor((segundosTotais % 3600) / 60);
  const segundos = segundosTotais % 60;

  document.getElementById("dias").textContent = String(dias).padStart(3, '0');
  document.getElementById("horas").textContent = String(horas).padStart(2, '0');
  document.getElementById("minutos").textContent = String(minutos).padStart(2, '0');
  document.getElementById("segundos").textContent = String(segundos).padStart(2, '0');
}

const intervalo = setInterval(atualizarContagem, 1000);
atualizarContagem();