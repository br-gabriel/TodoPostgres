# To Do Postgres - Front-end

## Sobre o projeto
Trata-se de uma aplicação de to do list com cadastro e login de usuário, utilizando o Postgres como banco de dados, React no front-end e NodeJS no back-end.

## Tecnologias
* React
  * Axios
  * React-modal
  * React-icons
  * React-dom
* Styled Components

## Observações sobre o projeto
A funcionalidade de validar o email cadastrado, através de um email de confirmação, não foi implementado. Qualquer endereço de email será considerado válido, mesmo se for inexistente.

## Funcionalidades
<strong>USUÁRIOS:</strong>
- Criar um novo usuário com email ainda não cadastrado
- Login de usuário registrado no banco de dados
- Logout do usuário

<strong>LISTA DE TAREFAS:</strong>
- Criar uma nova tarefa na conta do usuário
- Ler as tarefas criadas na conta do usuário
- Renomear a tarefa adicionada
- Marcar ou desmarcar a tarefa como concluida
- Deletar tarefa cadastrada

## Como rodar o projeto
### Pré-requisitos
Para rodar o projeto em modo de desenvolvimento será necessário ter o servidor local rodando na sua máquina. Você pode acessar o repositório e as instruções para instalar o server <a href="https://github.com/br-gabriel/todoPostgres-backend">aqui</a>.
### Instalação
<strong>Clonar o repositório</strong>
```
$ git clone https://github.com/br-gabriel/todoPostgres-frontend

$ cd todoPostgres-frontend
```

<strong>Instalação das dependências</strong>
```
$ yarn
```

ou

```
$ npm install
```

### Conectando o site ao servidor
1. Siga as intruções do <a href="https://github.com/br-gabriel/todoPostgres-backend">todoPostgres-backend</a> para configurar e rodar o server na sua máquina.

### Rodando o projeto
Após ter todas as dependências instaladas e as variáveis de ambiente definidas, você pode rodar a aplicação com o seguinte comando:
```
$ yarn dev
```

ou 

```
$ npm run dev
```
