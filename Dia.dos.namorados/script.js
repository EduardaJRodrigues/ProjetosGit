const motivos = [
  "Eu amo que, sempre que estamos juntos, você me faz rir a todo momento",
  "Eu amo que você me envie tiktok de gurizinho",
  "Eu amo quando você fala que me ama",
  "Eu amo que você fala que to linda o tempo todo, mesmo que nao esteja, rs",
  "Eu amo o fato de sentir que teu abraço é o melhor lugar do mundo",
  "Eu amo quando você da pulinho assistindo filme de terror",
  "Eu amo a sensação de saber que vamos nos ver",
  "Eu amo o fato de que sempre que chega uma mensagem sua, eu sorrio",
  "Eu amo o seu cheiro",
  "Eu amo ficar deitada no seu peito",
  "Eu amo ir na petiskeira com você",
  "Eu amo o fato de estavamos no lugar certo e na hora certa para nos conhecermos",
  "Eu amo (mas também odeio) sentir saudades de você",
  "Eu amo o teu sorriso",
  "Eu amo o jeito que você me olha",
  "Eu amo o fato de que você é a primeira pessoa que eu quero contar as coisas",
  "Eu amo o fato de que você é a última pessoa que eu quero falar antes de dormir",
  "Eu amo as suas graças (mais ou menos)",
  "Eu amo o fato que eu te amo",
  "Eu amo o fato de que eu me sinto a pessoa mais sortuda do mundo por ter você",
  "Eu amo o fato que eu não consigo imaginar minha vida sem você",
  "Eu amo o fato de você ter chegado do nada e ter se tornado tudo",
  "Eu amo teu jeito timido",
  "Eu amo te dar ponto KKKK",
  "Eu amo o fato de que sempre temos algo para conversar, mesmo que seja besteira",
  "Eu amo que você sempre ta mostrando o que sente",
  "Eu amo quando você fala que vamos casar (e vamos mesmo)",
  "Eu amo quando você fala dos nossos futuros filhos (que vão ser lindos)",
  "Eu amo quando você me manda bom dia",
  "Eu amo que minhas pupilas dilatam quando eu te vejo",
  "Eu amo que você me deixa com cólica toda vez que to perto de você rs",
  "Eu amo me sentir segura quando estou com você",
  "Eu amo que a cada dia você me conquista mais",
  "Eu amo o fato de que eu me apaixono por você mais e mais a cada dia",
  "Eu amo quando você ve desenho comigo",
  "Eu te amo por ser uma pessoa incrível",
  "Eu te amo por ser tão carinhoso",
  "Eu amo que 10 minutos depois que me despeço de você, já to com saudades",
  "Eu amo me sentir sortuda por ter te conhecido",
  "Eu amo o fato de que sou completamente apaixonada por você",
];

let motivosRestantes = [...motivos];

const cores = [
  "#ffffff",
  "#ffe4e1",
  "#ffd1dc",
  "#ffc0cb",
  "#ffb6c1",
  "#ffe4b5",
  "#e6e6fa",
  "#d8bfd8",
  "#f8c8dc"
];

let contador = 0;

function mostrarMotivo() {

  if (motivosRestantes.length === 0) {

    document.getElementById("motivo").innerText =
      "Mesmo com 40 motivos... eu continuaria encontrando infinitos jeitos de te amar ❤️";

    return;
  }

  const numeroAleatorio =
    Math.floor(Math.random() * motivosRestantes.length);

  const motivoEscolhido =
    motivosRestantes[numeroAleatorio];

  document.getElementById("motivo").innerText =
    motivoEscolhido;

  motivosRestantes.splice(numeroAleatorio, 1);

  contador++;

  document.getElementById("contador").innerText =
    `Motivo ${contador} de ${motivos.length}`;

  criarCoracao();

  const corAleatoria =
    cores[Math.floor(Math.random() * cores.length)];

  document.getElementById("card").style.backgroundColor =
    corAleatoria;
}