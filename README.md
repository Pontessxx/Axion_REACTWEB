# Projeto POC

- [LINK DO FIGMA](https://www.figma.com/design/RMA4U6lzHeSeUaHbPvLal7/TCC?node-id=7-2&p=f&t=6kOCtnapELoS1hwm-0)

Este repositório contém uma prova de conceito (POC) com front-end em React + TypeScript e backend em Java


## Paleta de cores

As cores usadas no projeto estão definidas em `src/App.scss` como variáveis CSS. Abaixo estão todas as cores encontradas (modo claro e modo escuro):

- Modo claro:
  - `--text`: #6b6375
  - `--text-h`: #08060d
  - `--bg`: #ffffff
  - `--border`: #e5e4e7
  - `--code-bg`: #f4f3ec
  - `--accent`: #aa3bff
  - `--accent-bg`: rgba(170, 59, 255, 0.1)
  - `--accent-border`: rgba(170, 59, 255, 0.5)
  - `--social-bg`: rgba(244, 243, 236, 0.5)
  - sombras: rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.05)

- Modo escuro:
  - `--text`: #9ca3af
  - `--text-h`: #f3f4f6
  - `--bg`: #16171d
  - `--border`: #2e303a
  - `--code-bg`: #1f2028
  - `--accent`: #c084fc
  - `--accent-bg`: rgba(192, 132, 252, 0.15)
  - `--accent-border`: rgba(192, 132, 252, 0.5)
  - `--social-bg`: rgba(47, 48, 58, 0.5)
  - sombras: rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.25)



## Estrutura do projeto

- `my-app/` - aplicação front-end React com Vite e TypeScript.
- Backend ainda em desenv.

## Como preparar

1. Abra o terminal.
2. Acesse a pasta do front-end:
   ```bash
   cd C:\Axion_REACTWEB\my-app
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## Como executar

- Inicie o servidor de desenvolvimento:
  ```bash
  npm run dev
  ```
- Abra o endereço exibido no terminal (normalmente `http://localhost:5173/`).

## Como gerar build de produção

- Compile o projeto:
  ```bash
  npm run build
  ```
- Visualize a versão gerada:
  ```bash
  npm run preview
  ```

## Comandos úteis

- `npm run dev` - executa o app em modo de desenvolvimento.
- `npm run build` - gera a versão de produção.
- `npm run preview` - pré-visualiza a build de produção.
- `npm run lint` - verifica o código com ESLint.

## Tecnologias utilizadas

- React
- TypeScript
- Vite
- React Router
- Axios
- ESLint