# Repositório com exemplos de implementação

Aqui você encontrará exemplos de implementação e uso da tecnologia GraphQL na construção de APIS modernas e flexíveis.

Curso da Udemy que usei para os primeiros estudos da tecnologia: "GraphQL: Criando APIs Profissionais e Flexíveis
" [https://www.udemy.com/course/graphql-criando-apis-profissionais-e-flexiveis/](https://www.udemy.com/course/graphql-criando-apis-profissionais-e-flexiveis/).


## Ambiente de desenvolvimento & Requerimentos

As versões abaixos são com as que testei, porém ele deve rodar em versões mais antigas e mais novas.

* IDE [Visual Studio Code](https://code.visualstudio.com/)
* Com a extensão [https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql)
* NodeJS v14.17.3
* NPM 6.14.13

## Rodando algum projeto

clone esse repositório, navegue até a raíz do projeto em particular, digite `npm install`, aguarde a instalação e depois digite os comandos para iniciar o app com auto-restart `npm run start`.

```bash
# clonando esse repositório
git clone <url-desse-repositório>
# acessando a raíz do projeto recém clonado
cd <raíz-da-pasta-recém-criada>
# escolhendo e navegando para o projeto
cd <pasta-do-projeto-que-você-decidir-testar>
# instalando dependências do projeto escolhido
npm install
# iniciando o o app com auto-restart
npm run start
```

## Bibliotecas usadas

* apollo-server: é uma implementação de servidor para as especificações de esquema GraphQL
* graphql: Implementação referência do parser e engine de consulta
* graphql-import: Antiga ferramenta usada para permitir modularidade nos arquivos de esquema, hoje ela é depreciada
* nodemon: ferramenta usada para oferecer o recurso de auto-reiniciar a aplicação quando  atualizamos algum arquivo no processo de desenvolvimento local

## Referências

* Documentação dos esquemas de dados: [https://graphql.org/learn/schema/](https://graphql.org/learn/schema/)
* Repositório de referência para os alunos: [https://github.com/cod3rcursos/curso-graphql](https://github.com/cod3rcursos/curso-graphql)
* Material sobre uso de terminais terminais em ambiente Windows: [https://blog.cod3r.com.br/terminal-no-windows/](https://blog.cod3r.com.br/terminal-no-windows/)
* Material sobre uso de terminais terminais em ambiente Linux/Mac: [https://blog.cod3r.com.br/terminal-no-macos-e-linux/](https://blog.cod3r.com.br/terminal-no-macos-e-linux/)
