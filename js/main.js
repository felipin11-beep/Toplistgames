// Classificação pela nota
const classificar = (nota) => (nota >= 9.5 ? 'Obra-prima' : nota >= 9 ? 'Excelente' : 'Muito bom');
const formatar = (n) => n.toFixed(1).replace('.', ',');

// Lê os dados dos cards já presentes no HTML
const jogos = [...document.querySelectorAll('.card')].map((card) => ({
  card,
  nome: card.querySelector('h3').textContent,
  nota: Number(card.dataset.nota),
  categoria: card.closest('[data-categoria]').dataset.categoria,
}));

// Melhor jogo de cada categoria
const melhorDaCategoria = {};
jogos.forEach((j) => {
  const atual = melhorDaCategoria[j.categoria];
  if (!atual || j.nota > atual.nota) melhorDaCategoria[j.categoria] = j;
});

jogos.forEach((j) => {
  j.card.querySelector('.selo').textContent = classificar(j.nota);
  if (melhorDaCategoria[j.categoria] === j) {
    const etiqueta = document.createElement('span');
    etiqueta.className = 'topo';
    etiqueta.textContent = 'Melhor da categoria';
    j.card.prepend(etiqueta);
    j.card.classList.add('destaque');
  }
});

// Painel de resumo (map, filter e reduce)
const media = (lista) => lista.reduce((soma, j) => soma + j.nota, 0) / lista.length;
const melhor = jogos.reduce((a, b) => (b.nota > a.nota ? b : a));

document.getElementById('total').textContent = jogos.length;
document.getElementById('media').textContent = formatar(media(jogos));
document.getElementById('melhor').textContent = `${formatar(melhor.nota)} (${melhor.nome})`;
document.getElementById('obras').textContent = jogos.filter((j) => j.nota >= 9.5).length;

const categorias = [...new Set(jogos.map((j) => j.categoria))];
const listaMedias = document.getElementById('medias-categoria');
categorias
  .map((cat) => ({ cat, media: media(jogos.filter((j) => j.categoria === cat)) }))
  .sort((a, b) => b.media - a.media)
  .forEach(({ cat, media: m }) => {
    const li = document.createElement('li');
    li.textContent = `${cat}: ${formatar(m)}`;
    listaMedias.appendChild(li);
  });

// Formulário de sugestão
const form = document.getElementById('form-sugestao');
const mensagem = document.getElementById('mensagem');
const listaSugestoes = document.getElementById('lista-sugestoes');

form.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const campos = form.elements;
  const nome = campos.nome.value.trim();
  const nota = campos.nota.value === '' ? NaN : Number(campos.nota.value);
  const motivo = campos.motivo.value.trim();
  const erros = [];

  if (nome.length < 2) erros.push('Informe o nome do jogo.');
  if (!campos.categoria.value) erros.push('Escolha uma categoria.');
  if (Number.isNaN(nota) || nota < 0 || nota > 10) erros.push('A nota deve estar entre 0 e 10.');
  if (motivo.length < 10) erros.push('Explique o motivo em pelo menos 10 caracteres.');

  if (erros.length) {
    mensagem.className = 'erro';
    mensagem.textContent = erros.join(' ');
    return;
  }

  const li = document.createElement('li');
  li.textContent = `${nome} (${campos.categoria.value}), nota ${formatar(nota)}: ${motivo}`;
  listaSugestoes.appendChild(li);
  mensagem.className = 'ok';
  mensagem.textContent = 'Sugestão enviada!';
  form.reset();
});
