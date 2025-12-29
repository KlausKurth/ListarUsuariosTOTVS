# ListarUsuariosTOTVS
ReactJS + API-REST-Protheus

# Arquitetura

Single page aplication "Tudo rendereiza em uma página única"

App.jsx ( Arquivo principal de configuração de rotas)
Main.jsx ( Todas as rotas vão ser renderizadas em Main.jsx)
Outlet ( Renderiza todo conteúdo das rotas )

components/
Cabeçalho
Rodapé
Área central

pages/
Home
Login
Logout
NewUser
Users
UserDetails
ErrorPage



# Install pré-requisitos

choco install nodejs-lts
npm install react-router-dom

# Criar app react

npx create-react-app 1_app

cd 1_app

npm start


# TOTVS API
https://localhost:8080/rest


# URL GET USERS


# TEST POSTMAN HTTPS

BASIC AUTH : Username:klaus.kurth 
             Password:123456


# TEST POSTMAN HTTP (modificar o arquivo appserver.ini)
[HTTPREST]
Port=8080
URIs=HTTPURI
SECURITY=0


https://localhost:8080/rest/users/

ou

https://localhost:8080/rest/users?userName=klaus.kurth


# Fluxo da lógica de login

- Você consulta o Protheus com o userName.
- Se o Protheus retorna exatamente um usuário, o login é aceito.
- O displayName desse usuário é salvo no localStorage.
- O Header só checa se existe esse valor no localStorage para decidir se mostra menu de logado ou não.

