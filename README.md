# Toplistgames

Projeto desenvolvido para a disciplina de **Desenvolvimento Front-end para Web**, com o objetivo de colocar em prática conceitos de HTML5, HTML semântico, acessibilidade, formulários e JavaScript.

## Sobre o projeto

O **Toplistgames** é uma página web criada para apresentar jogos muito bem avaliados de forma simples e organizada. A página reúne **12 jogos divididos em quatro categorias** (RPG, Ação e aventura, Indies, Corrida e esportes), acompanhados de resumo, nota e um link para saber mais. Também foi desenvolvido um formulário que permite ao usuário sugerir novos jogos, trabalhando conceitos de interação e validação de dados em páginas web.

O projeto busca demonstrar não apenas a construção visual de uma página, mas também a utilização correta dos elementos HTML de acordo com sua função, priorizando uma estrutura semântica e acessível.

## Tecnologias

- HTML5
- CSS3
- JavaScript
- Git e GitHub

## Semântica e acessibilidade

Foram utilizados elementos como `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` e `<footer>`, além de `<label>`, `<fieldset>` e `<legend>` no formulário. Cada seção é ligada ao seu título por `aria-labelledby`, as mensagens do formulário usam `role="status"` e os elementos interativos têm foco visível.

## Estrutura

```
assets/
└── images/
css/
└── style.css
js/
└── main.js
index.html
README.md
```

## Como executar

Clone o repositório:

```
https://github.com/felipin11-beep/Toplistgames.git
```

Depois, abra o `index.html` no navegador ou utilize o **Live Server** no VS Code.

## Versionamento

O desenvolvimento utiliza **Git e GitHub**, com commits, branches e Pull Requests para organização e controle das alterações.

## Atualizações do projeto

- **CSS:** tema azul escuro com variáveis CSS, layout geral com Grid, grade de cards responsiva com `auto-fit`/`minmax`, menu fixo com Flexbox, estados de `:hover` e `:focus-visible` e ajuste para telas estreitas.
- **JavaScript:** classificação de cada jogo pela nota, destaque do melhor jogo de cada categoria, painel de resumo calculado com `map`, `filter` e `reduce` e validação do formulário de sugestão.
- **Links externos:** cada jogo tem um link "Saiba mais" com `target="_blank"` e `rel="noopener noreferrer"`.

## Autor

**Felipe Assuncao** — Projeto desenvolvido para fins acadêmicos.


------------------------

Avaliação de Rafael Ângelo: 

A page tá ótima, tem tudo que o professor passou em sala e com extras, utilizou HTML, CSS e Javascript apresentando conhecimento sobre as tecnologias, aplicando algumas tecnicas de clean code e otimizando a page de maneira eficiente.

Dicas: Falta só fazer o deploy e já tá tudo pronto!