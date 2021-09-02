# TutorialWebservice

Este projeto foi desenvolvido para a demonstrar algumas capacidades do HttpClient, uma abordagem de comunicação de entre o front-end Angular e um backend remoto utilizando JSON.

Este projeto é de caracter puramente didático e tem como ponto de partida desenvolvedores iniciantes na tecnologia para aprendizagem de um recurso específico do Angular. A interface utilizada é bastante inicial e limitada.

Bons Estudos.

## Backend

Esse repositório utiliza-se um webservice externo hospedado em `https://banco-dados-teste.glitch.me/`. Ao acessar este endereço, há um período de espera onde a aplicação é reiniciada até seu processo de pausa, que ocorre após 5 minutos de inatividade.

### Rotas

O Backend possui as seguintes rotas:

**/api/produtos** (GET, POST, PUT, DELETE)
- GET: Retorna os produtos cadastrados
- POST: Adiciona um novo produto. É necessário repassar as informações `title`, `price` e `description` no corpo da requisição.
- PUT: Atualiza um produto já cadastrado. É necessário repassar as informações `title`, `price` e `description` no corpo da requisição. É necessário informar o **_id** do produto cadastro diretamente na URL de requisição: (Ex: */api/produtos/607048aa34f27b00cc12a2d4*).
- DELETE: Remove um produto cadastrado. É necessário informar o **_id** do produto cadastro diretamente na URL de requisição: (Ex: */api/produtos/607048aa34f27b00cc12a2d4*).

