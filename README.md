# API de Cadastro e Login de Usuário e Manipulação de Recados
Essa é uma API que fornece ao usuário a opção de criar e logar em um perfil e manipular recados nele.

# Informações Gerais
Versão da API: 1.0.0

Servidores disponíveis:

[API de Teste](http://localhost:3001/): Para testes e desenvolvimento local.

[API de Produção](https://taskedtask-api.onrender.com/): API em produção.

# Endpoints
## Cadastro de Usuários
### POST /user/create

Essa rota é responsável por cadastrar um novo usuário.

#### Requisição:

```json
POST /user
Content-Type: application/json

{
  "name": "Doe",
  "email": "john@doe.com",
  "password": "john2345"
}
```
#### Respostas:


* 201: Created

```json
{
  "status": "success",
  "message": "Conta cadastrada com sucesso!",
  "data": {
    "name": "Doe",
    "email": "john@doe.com"
  }
}
```
* 400: Error: Bad Request

```json
{
  "status": "error",
  "message": "Ops.Email já cadastrado!"
}
```

* 500: An Error Occurred, Please Try Again Later


## Criação da Sessão do Usuário (Login)
### POST /user/login

Essa rota é responsável por criar uma sessão de login para o usuário.

#### Requisição:

```json
POST /auth
Content-Type: application/json

{
  "email": "john@doe.com",
  "password": "john2345"
}
```

#### Respostas:

* 200: Success

```json
{
  "status": "success",
  "acceess_token": "{token}",
  "data": {
    "firstName": "John",
    "name": "Doe",
    "email": "john@doe.com"
  }
}
```

* 400: Error: Bad Request

```json
{
  "status": "error",
  "message": "Erro: Requisição inválida"
}
```

* 500: An Error Occurred, Please Try Again Later

## Edição do Recado pelo ID do Usuário e do Recado
### PUT /errands/update/{userId}/{id}

Essa rota é responsável por buscar um recado existente do usuário e editá-lo.

#### Requisição:

```json
PUT /messages/40863b80-aa9f-4b87-9bbe-d327029e8301/fee033fc-73ad-4610-94cf-d89ca8229932
Authorization: Bearer {token}
Content-Type: application/json

{
  "id": "fee033fc-73ad-4610-94cf-d89ca8229932",
  "message": "Meu primeiro recado alterado",
  "userId": "40863b80-aa9f-4b87-9bbe-d327029e8301"
}
```

#### Respostas:

* 201: Created

```json
{
  "status": "success",
  "message": "Recado editado com sucesso",
  "data": {
    "id": "fee033fc-73ad-4610-94cf-d89ca8229932",
    "message": "Meu primeiro recado alterado",
    "userId": "40863b80-aa9f-4b87-9bbe-d327029e8301"
  }
}
```

* 400: Error: Bad Request

```json
{
  "status": "error",
  "message": "Erro: Requisição inválida"
}
```

* 401: Error: Unauthorized

```json
{
  "status": "error",
  "message": "Erro: Não autorizado"
}
```

* 500: An Error Occurred, Please Try Again Later

## Deletar Recado
### DELETE /errands/delete/{userId}/{id}

Essa rota é responsável por deletar um recado pelo seu ID.

#### Requisição:

```json
DELETE /messages/fee033fc-73ad-4610-94cf-d89ca8229932
Authorization: Bearer {token}
```

#### Respostas:

* 200: Success

```json
{
  "status": "success",
  "message": "Recado deletado com sucesso"
}
```

* 400: Error: Bad Request

```json
{
  "status": "error",
  "message": "Erro: Requisição inválida"
}
```

* 401: Error: Unauthorized

```json
{
  "status": "error",
  "message": "Erro: Não autorizado"
}
```

* 500: An Error Occurred, Please Try Again Later

## Criação de um Recado para o Usuário
### POST /errands/create/{userId}

Essa rota é responsável por criar um recado para o usuário.

#### Requisição:

```json
POST /messages/40863b80-aa9f-4b87-9bbe-d327029e8301
Authorization: Bearer {token}
Content-Type: application/json

{
  "message": "Meu primeiro recado",
  "userId": "40863b80-aa9f-4b87-9bbe-d327029e8301"
}
```

#### Respostas:

* 201: Created

```json
{
  "status": "success",
  "message": "Recado criado com sucesso",
  "data": {
    "id": "fee033fc-73ad-4610-94cf-d89ca8229932",
    "message": "Meu primeiro recado",
    "userId": "40863b80-aa9f-4b87-9bbe-d327029e8301"
  }
}
```

* 400: Error: Bad Request

```json
{
  "status": "error",
  "message": "Erro: Requisição inválida"
}
```

* 401: Error: Unauthorized

```json
{
  "status": "error",
  "message": "Erro: Não autorizado"
}
```

* 500: An Error Occurred, Please Try Again Later

## Busca dos Recados do Usuário
### GET /errands/{userId}

Essa rota é responsável por buscar todos os recados de um usuário existente.

#### Requisição:

```json
GET /messages/40863b80-aa9f-4b87-9bbe-d327029e8301
Authorization: Bearer {token}
```

#### Respostas:

* 200: Success

```json
{
  "status": "success",
  "data": [
    {
      "id": "fee033fc-73ad-4610-94cf-d89ca8229932",
      "message": "Meu primeiro recado",
      "userId": "40863b80-aa9f-4b87-9bbe-d327029e8301"
    },
    {
      "id": "2ab0a8e3-efc6-4e59-92c3-37ce6f8a4dd6",
      "message": "Meu segundo recado",
      "userId": "40863b80-aa9f-4b87-9bbe-d327029e8301"
    }
  ]
}
```

* 400: Error: Bad Request

```json
{
  "status": "error",
  "message": "Erro: Requisição inválida"
}
```

* 401: Error: Unauthorized

```json
{
  "status": "error",
  "message": "Erro: Não autorizado"
}
```

* 500: An Error Occurred, Please Try Again Later

## Modelos de Dados
### User
Modelo de dados para o cadastro de usuários:

```json
{
  "name": "string",
  "email": "string",
  "password": "string"
}
```

### Messages
Modelo de dados para os recados:

```json
{
  "id": "string",
  "message": "string",
  "userId": "string"
}
```

### Response
Modelo de dados para as respostas da API:

```json
{
  "status": "string",
  "message": "string",
  "data": "object"
}
```

### ResponseErrands
Modelo de dados para as respostas da API relacionadas aos recados:

```json
{
  "status": "string",
  "message": "string",
  "data": "object"
}
```

### ResponseErrandsGet
Modelo de dados para as respostas da API relacionadas à busca dos recados:

```json
{
  "status": "string",
  "data": "array"
}
```

### ResponseMiddle
Modelo de dados para as respostas da API intermediárias:

```json
{
 "status": "string",
 "message": "string"
}
```

### UserAuth
Modelo de dados para autenticação do usuário:

```json
{
  "email": "string",
  "password": "string"
}
```

### ResponseAuth
Modelo de dados para as respostas da API relacionadas à autenticação do usuário:

```json
{
  "ok": "boolean",
  "message": "string",
  "access_token": "string",
  "data": "object"
}
```

## Autenticação
Para utilizar as rotas que requerem autenticação, inclua o token de autenticação no header da requisição:

```json
Authorization: Bearer {token}
```

O token deve ser obtido na rota de criação de sessão do usuário (`POST /auth`).
