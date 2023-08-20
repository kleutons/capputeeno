
# Desafio FrontEnd - eCommerce Capputeeno

Seja bem-vindo(a)! Neste repositório, apresento minha solução para o Desafio Frontend proposto pela [Rocketseat](https://github.com/Rocketseat/frontend-challenge), em colaboração com a talentosa [@Fernanda Kipper](https://github.com/Fernanda-Kipper/). Gostaria de expressar meu profundo agradecimento à Fernanda Kipper pelo inestimável apoio durante todo o desenvolvimento deste projeto.

### Screenshots

![App Screenshot](https://raw.githubusercontent.com/kleutons/capputeeno/master/.github/prototype.png)


Minha abordagem trouxe várias melhorias significativas, incluindo:

- <b>[Servidor Backend Graphql:](https://capputeeno-api-vercel.vercel.app/api/graphql)</b> Implementei um servidor backend GraphQL, isso permite que o site seja alimentado com dados de maneira eficiente e dinâmica.

- <b>Sistema de Paginação:</b> Integrei um sistema de paginação para melhorar a experiência do usuário ao navegar pelos produtos. Agora, a navegação entre diferentes páginas de produtos é mais fluída e organizada.

- <b>Sistema de Loading:</b> Implementei uma técnica de pré-carregamento de páginas, garantindo que os usuários tenham uma experiência mais suave ao carregar novos conteúdos. Isso reduz a sensação de espera e mantém o engajamento do usuário.

- <b>Melhoria de Interação:</b> Introduzi um efeito de hover, destacando a interatividade do usuário com os produtos, proporcionando uma experiência mais envolvente.

## 🧠 Sobre

O Desafio com este projeto é implementar um e-commerce com design responsivo usando o [Protótipo no Figma](https://www.figma.com/file/rET9F2CeUEJdiVN7JRu993/E-commerce---capputeeno?node-id=680%3A6449), para venda de canecas e camisetas que deverá ter as seguintes funcionalidades:

- ✅Catálogo de produtos com paginação
- ✅Filtrar produtos por categoria
- ✅Pesquise pelo nome do produto
- ✅Adicionar e remover produtos do carrinho
- ✅página de checkout
## 💻 Tecnologias Utilizadas
- Design seguindo esse [Protótipo Figma](https://www.figma.com/file/rET9F2CeUEJdiVN7JRu993/E-commerce---capputeeno?node-id=680%3A6449)
- Next.js e Typescript
- Estilização com styled-components
- Local storage para gerenciar o carrinho, sem perda de dados
- README as instruções de instalação do projeto
- Consumir BackEnd com API GraphQL 

>Além das tecnologias principais, foram utilizadas as seguintes bibliotecas e ferramentas:
- Axios
- ESLint
- Tanstack/React-query (sistema de cache api)

## 📋 Instalação - Requisitos

### Frontend

1. Clonar este repositório
```bash
git clone https://github.com/kleutons/capputeeno.git
```
2. Criar um arquivo .env com o link do seu servidor BackEnd:
```
NEXT_PUBLIC_API_URL=https://localhost/4444
```
Você pode usar o servidor backEnd descrito abaixo.

3. Install dependencies
```bash
npm install
```

4. Executar Front-end
```bash
npm run dev
```

### Servidor BackEnd
Siga os passos nesse repositorio, para gerar o servidor GraphQL: 
- https://github.com/kleutons/capputeeno-api
## 👨‍💻 Sobre Mim
### Made with 💙 by [@Kleuton Novais](https://github.com/kleutons)

### Contato
- [LinkedIn](https://www.linkedin.com/in/kleuton-novais/)
- [Portfólio](https://kleuton.dev)

###
Estou ansioso para receber feedback e sugestões sobre esta solução.

Mais uma vez, agradeço à Rocketseat e à Fernanda Kipper por esta oportunidade de aprendizado e colaboração