# React Native Mobile

Aplicação em React Native executando um CRUD na [Node Express API](https://github.com/osvaldokalvaitir/node-express-api).

## Índice

- [Desenvolvimento](#desenvolvimento)

  - [Configurações Iniciais](#configurações-iniciais)

  - [Instalação do Projeto](#instalação-do-projeto)

  - [Execução do Projeto](#execução-do-projeto)

  - [Bibliotecas](#bibliotecas)

  - [Erros Comuns](#erros-comuns)

  - [APIs](#apis)

## Desenvolvimento

### Configurações Iniciais

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/README.md) e siga as Configurações Iniciais.

### Instalação do Projeto

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/nodejs.md) e siga a Instalação de Projeto.

### Execução do Projeto

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-native-cli.md) e siga a Execução de Projeto.

### Bibliotecas

- [Axios](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/axios.md)

- [React Navigation](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-navigation.md)

- [react-native-cli](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-native-cli.md)

### Erros Comuns

No desenvolvimento, depois de instalar uma biblioteca que use recursos nativos (ex: a biblioteca de ícones) será necessário executar o comando abaixo e reiniciar a emulação do projeto:

```
react-native link nome-da-biblioteca
```

No desenvolvimento, se ocorrer um erro de módulo não encontrado, será necessário fechar a janela de execução do Metro Bundler, executar o comando abaixo e reiniciar a emulação do projeto:

```
react-native start --reset-cache
```

### APIs

- [Node Express API](https://github.com/osvaldokalvaitir/node-express-api)
