<div align="center">
    <img src="https://play-lh.googleusercontent.com/1QWtJPBqbtDBw9RGPVK8AmTu3XLrFfRdksluzr4HW-C3EoYK4rxcGl1_3ClPupSKNdxy" alt="Logo" width="400px"/>
</div>

<br/>

<div align="center">
    <h1>Challenge Plataforma de pagamentos</h1>
    <p align="center">Este é o Back-End de uma aplicação feita em <a href="https://nodejs.org/en">Node</a> que consiste em ser uma plataforma de pagamentos com algumas funcionalidades.
    </p>
</div>

<div align="center">
    <img src="https://img.shields.io/static/v1?label=Node&message=20.9.0&color=#009CA3%3CCOLOR%3E&style=plastic%3CSTYLE%3E&logo=react%3CLOGO%3E" alt="Versão do Nodejs" />
      <img src="https://img.shields.io/static/v1?label=Express&message=4.8.12&color=#009CA3%3CCOLOR%3E&style=plastic%3CSTYLE%3E&logo=react%3CLOGO%3E" alt="Versão do Nodejs" />
    <img src="https://img.shields.io/static/v1?label=Bcrypt&message=5.1.1&color=#009CA3%3CCOLOR%3E&style=plastic%3CSTYLE%3E&logo=react%3CLOGO%3E" alt="Versão do Bcrypt" />
    <img src="https://img.shields.io/static/v1?label=jsonwebtoken&message=9.0.2&color=#009CA3%3CCOLOR%3E&style=plastic%3CSTYLE%3E&logo=react%3CLOGO%3E" alt="Versão do jsonwebtoken" />
    <img src="https://img.shields.io/static/v1?label=pg%20Library&message=8.11.3&color=#009CA3%3CCOLOR%3E&style=plastic%3CSTYLE%3E&logo=react%3CLOGO%3E" alt="Versão do PG" />
    <img src="https://img.shields.io/static/v1?label=joi%20Css&message=17.11.1&color=#009CA3%3CCOLOR%3E&style=plastic%3CSTYLE%3E&logo=react%3CLOGO%3E" alt="Versão do Joi" />
</div>

<div align="center">
    <a href="#tecnologias">Tecnologias</a> •
    <a href="#como-usar">Como usar</a> •
    <a href="#desafios">Desafios</a> •
    <a href="#melhorias">Melhorias</a> •
    <a href="#contato"> Contato</a>
</div><br>

**Demo API:** [**https://plataforma-de-pagamentos.onrender.com**](https://plataforma-de-pagamentos.onrender.com)


<br/>

# Tecnologias
#### Linguagens e Ferramentas:
- [NodeJs](https://nodejs.org/en)
- [Express](https://www.typescriptlang.org/)

#### BIBLIOTECAS:
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Joi](https://www.npmjs.com/package/joi)
- [JsonWebToken(JWT)](https://www.npmjs.com/package/jsonwebtoken)
- [NodePostgres(PG)](https://node-postgres.com/)
  
#### Padronização de Código:
- [Prettier](https://prettier.io/)

<br/>

# Módulo de Usuarios

<details>
  <summary><b>Criar Usuário</b></summary>

  <p><b>Rota:</b></p>
  <pre><code>POST /</code></pre>

  <p><b>Descrição:</b></p>
  <p>Cria um novo usuário com os dados fornecidos.</p>

  <p><b>Requisição:</b></p>
  <pre><code>{
    "nome": "Nome do Usuário",
    "email": "usuario@example.com",
    "senha": "senha123"
  }</code></pre>

  <p><b>Resposta de Sucesso:</b></p>
  <pre><code>{
    "message": "Usuário criado com sucesso"
  }</code></pre>

  <p><b>Possíveis Erros:</b></p>

  <p><b>Email já Associado:</b></p>
  <pre><code>{
    "message": "O email já está associado a outra conta de usuário."
  }</code></pre>

  <p><b>Dados Inválidos:</b></p>
  <pre><code>{
    "message": "Os dados fornecidos são inválidos."
  }</code></pre>

  <p><b>Exemplo de Uso:</b></p>
  <pre><code>curl -X POST -H "Content-Type: application/json" -d '{"nome":"Nome do Usuário", "email":"usuario@example.com", "senha":"senha123"}' http://seu-servidor/api/usuario/criar</code></pre>
</details>

<details>
  <summary><b>SignIn</b></summary>
  <p><b>Rota:</b></p>
  <pre><code>POST /singin</code></pre>

  <p><b>Descrição:</b></p>
  <p>Autentica o usuário com as credenciais fornecidas.</p>

  <p><b>Requisição:</b></p>
  <pre><code>{
    "email": "usuario@example.com",
    "senha": "senha123"
  }</code></pre>

  <p><b>Resposta de Sucesso:</b></p>
  <pre><code>{
    "message": "Usuário autenticado com sucesso",
    "token": "token_de_autenticacao"
  }</code></pre>

  <p><b>Possíveis Erros:</b></p>
  <pre><code>{
    "message": "Credenciais inválidas. Verifique seu email e senha."
  }</code></pre>
</details>

<details>
  <summary><b>Signout</b></summary>
  <p><b>Rota:</b></p>
  <pre><code>POST /singout</code></pre>
  <p><b>Descrição:</b></p>
  <p>Encerra a sessão do usuário autenticado.</p>

  <p><b>Resposta de Sucesso:</b></p>
  <pre><code>{
    "message": "Sessão encerrada com sucesso"
  }</code></pre>
</details>

<details>
  <summary><b>Deletar usúario</b></summary>
  <p><b>Rota:</b></p>
  <pre><code>DELETE /:ID</code></pre>

  <p><b>Descrição:</b></p>
  <p>Exclui o usuário com o ID especificado.</p>

  <p><b>Resposta de Sucesso:</b></p>
  <pre><code>204 No Content</code></pre>

  <p><b>Possíveis Erros:</b></p>
  <pre><code>{
    "message": "Usuário não encontrado."
  }</code></pre>
</details>

<details>
  <summary><b>Buscar usúario</b></summary>
  <p><b>Rota:</b></p>
  <pre><code>GET /user/:ID</code></pre>

  <p><b>Descrição:</b></p>
  <p>Obtém os detalhes do usuário com o ID especificado.</p>

  <p><b>Resposta de Sucesso:</b></p>
  <pre><code>{
    "id": 1,
    "nome": "Nome do Usuário",
    "email": "usuario@example.com",
    "senha":"criptografada"
  }</code></pre>

  <p><b>Possíveis Erros:</b></p>
  <pre><code>{
    "message": "Usuário não encontrado."
  }</code></pre>
</details>


# Modulos de Saldos
<details>
  <summary><b>Buscar Saldos</b></summary>
  <p><b>Rota:</b></p>
  <pre><code>GET balance/:id/:page</code></pre>

  <p><b>Descrição:</b></p>
  <p>Obtém os saldos do usuário com o ID especificado na página indicada.</p>

  <p><b>Requisição:</b></p>
  <pre><code>Buscar saldos de um usuario</code></pre>

  <p><b>Resposta de Sucesso:</b></p>
  <pre><code>[
  {
    "id": 8,
    "nome": "Xd",
    "descricao": null,
    "valor_inicial": "500.00",
    "valor_utilizado": null,
    "valor_restante": null,
    "usuario_id": 31
  },
  {
    "id": 9,
    "nome": "Xdasdsad",
    "descricao": null,
    "valor_inicial": "5.00",
    "valor_utilizado": null,
    "valor_restante": "5.00",
    "usuario_id": 31
  }
]</code></pre>
</details>

<details>
  <summary><b>Criação de saldo</b></summary>
   <p><b>Rota:</b></p>
  <pre><code>POST /api/saldos/balance/:id</code></pre>

  <p><b>Descrição:</b></p>
  <p>Cria um novo saldo para o usuário com o ID especificado.</p>

  <p><b>Requisição:</b></p>
  <pre><code>POST /api/saldos/balance/31</code></pre>
  <pre><code>
   {
  "valor_inicial": 150,
  "nome":"Nome",
  "descricao":"Descrição"
   }
 </code></pre>
  <p><b>Resposta de Sucesso:</b></p>
  <pre><code>{
  "message": "Saldo criado com sucesso"
}</code></pre>
</details>

<details>
  <summary><b>Atualização de saldo</b></summary>
  <p><b>Rota:</b></p>
  <pre><code>PATCH /api/saldos/balance/update/:id</code></pre>


  <p><b>Descrição:</b></p>
  <p>Atualiza os valores do saldo com o ID especificado.</p>

  <p><b>Requisição:</b></p>
  <pre><code>PATCH /api/saldos/balance/update/8</code></pre>
  <pre><code>
   {
  "valor_inicial": 1500,
  "nome":"Nome Opcional",
  "descricao":"Descrição Opcional"
   }
 </code></pre>

  <p><b>Resposta de Sucesso:</b></p>
  <pre><code>{
  "message": "Valores do saldo atualizados com sucesso"
}</code></pre>
</details>

<details>
  <summary><b>Deletar saldo</b></summary>
  <p><b>Rota:</b></p>
  <pre><code>DELETE balance/delete/:id</code></pre>
  <p><b>Descrição:</b></p>
  <p>Exclui o saldo com o ID especificado.</p>

  <p><b>Requisição:</b></p>
  <pre><code>DELETE /api/saldos/balance/delete/8</code></pre>

  <p><b>Resposta de Sucesso:</b></p>
  <pre><code>{
  "message": "Saldo excluído com sucesso"
}</code></pre>
</details>

# Modulo de pagamentos

<details>
  <summary><b>Criação de pagamentos</b></summary>
  <p><b>Rota:</b></p>
  <pre><code>POST /payment/:id/?balanceID=:id</code></pre>
  <p><b>Descrição:</b></p>
  <p>Cria um novo pagamento para o usuário com o ID especificado.</p>

  <p><b>Requisição de Exemplo:</b></p>
  <pre><code>{
  "nome": "pagamento",
  "descricao": "Descrição",
  "valor": 600
}</code></pre>

  <p><b>Resposta de Sucesso:</b></p>
  <pre><code>{
  "message": "Pagamento criado com sucesso"
}</code></pre>
</details>

<details>
  <summary><b>Atualização de pagamento</b></summary>
  <p><b>Rota:</b></p>
  <pre><code>PATCH /payment/:id:/?balanceID=:id</code></pre>
  <p><b>Descrição:</b></p>
  <p>Atualiza os valores do pagamento com o ID especificado.</p>

  <p><b>Requisição de Exemplo:</b></p>
  <pre><code>{
  "nome": "valor atualizado",
  "valor": 150
}</code></pre>

  <p><b>Resposta de Sucesso:</b></p>
  <pre><code>{
  "message": "Valores do pagamento atualizados com sucesso"
}</code></pre>
</details>

<details>
  <summary><b>Deleta o pagamento vinculado ao saldo</b></summary>
  <p><b>Rota:</b></p>
  <pre><code>DELETE /payment/:id:/?balanceID=:id</code></pre>

  <p><b>Descrição:</b></p>
  <p>Exclui o pagamento com o ID especificado.</p>

  <p><b>Requisição de Exemplo:</b></p>
  <pre><code>DELETE /api/pagamentos/payment/36?paymentId=19</code></pre>

  <p><b>Resposta de Sucesso:</b></p>
  <pre><code>{
  "message": "Pagamento excluído com sucesso"
}</code></pre>
</details>

<details>
  <summary><b>Busca pagamentos vinculados ao usúario por páginas</b></summary>
  <p><b>Rota:</b></p>
  <pre><code>GET GET /pagamentos/payment/:id/:page</code></pre>

  <p><b>Descrição:</b></p>
  <p>Obtém os pagamentos do usuário com o ID especificado na página indicada.</p>

  <p><b>Requisição de Exemplo:</b></p>
  <pre><code>GET /api/pagamentos/payment/36/5</code></pre>

  <p><b>Resposta de Exemplo:</b></p>
  <pre><code>[
  {
    "id": 19,
    "nome": "Nome do Pagamento",
    "descricao": "Descrição do Pagamento",
    "valor": "5000.00",
    "saldo_id": 24,
    "usuario_id": 36
  },
  ...
]</code></pre>
</details>


# Como usar
**Clone o projeto e acesse a pasta:**

```bash
$ git clone git@github.com:darlanbbs/BackEnd-projeto-selecao-incentiveme.git && cd BackEnd-projeto-selecao-incentiveme
```

___

**Siga os passos a baixo para rodar a aplicação localmente:**

```bash

# Instale as dependências:
$ yarn
$ npm install

# Inciar a aplicação
$ yarn run dev
$ npm run dev
```


# Desafios
- <p>Enfrentei desafios significativos nas partes relacionadas a atualizações de usuário, saldos e pagamentos. O cerne dessas dificuldades reside na necessidade de lidar com valores opcionais, o que exigiu uma abordagem cuidadosa e estratégica para garantir a flexibilidade e a usabilidade do sistema.</p>
<br/>

# Melhorias
- <p>Realizar análises de desempenho para identificar áreas que podem ser otimizadas. Isso pode incluir melhorias no código, consultas ao banco de dados ou no carregamento de recursos.</p>
<br/>

# Contato

Qualquer dúvida, sugestão ou crítica estarei à disposição!

**Obrigado pela oportunidade!**

E-mail: **darlanbs05@gmail.com**

WhatsApp: (71) 98604-7621

LinkedIn: [**https://www.linkedin.com/in/darlan-bomfim-903582260/**](https://www.linkedin.com/in/darlan-bomfim-903582260/)
