# Jk-FrontEnd2.0

Este projeto é uma aplicação **React** criada com **Vite**. Aqui você encontrará instruções detalhadas para rodar o projeto localmente, instalar dependências, rodar em produção e utilizar Docker.

---

## Índice

- [Pré-requisitos](#pré-requisitos)
- [Rodando Localmente](#rodando-localmente)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Build de Produção](#build-de-produção)
- [Rodando com Docker](#rodando-com-docker)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Dúvidas Frequentes](#dúvidas-frequentes)

---

## Pré-requisitos

- [Node.js](https://nodejs.org/) (recomendado v18 ou superior)
- [npm](https://www.npmjs.com/) (geralmente já vem com o Node)
- (Opcional) [Docker](https://www.docker.com/) para rodar em container

---

## Rodando Localmente

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/Jk-FrontEnd2.0.git
   cd Jk-FrontEnd2.0
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

4. **Acesse no navegador:**

   O Vite irá mostrar o endereço (por padrão, http://localhost:5173).

---

## Scripts Disponíveis

- `npm run dev`  
  Inicia o servidor de desenvolvimento com hot reload.

- `npm run build`  
  Gera o build de produção na pasta `dist`.

- `npm run preview`  
  Serve o build de produção localmente para testes.

---

## Build de Produção

Para gerar os arquivos otimizados para produção:

```bash
npm run build
```

Os arquivos finais ficarão na pasta `dist/`.  
Você pode servir esses arquivos com qualquer servidor web (Nginx, Apache, etc).

---

## Rodando com Docker

O projeto já possui um `Dockerfile` pronto para build e entrega dos arquivos estáticos.

### 1. **Build da imagem**

```bash
docker build -t jk-frontend .
```

### 2. **Rodando o container**

```bash
docker run --name jk-frontend -d jk-frontend
```

> **Nota:**  
> O container gerado serve apenas para copiar os arquivos de build (`/app` dentro do container).  
> Para servir em produção, copie os arquivos da pasta `/app` do container para seu servidor web (exemplo: Nginx).

### 3. **Copiando os arquivos do container**

```bash
docker cp jk-frontend:/app ./dist
```

Agora, a pasta `./dist` terá os arquivos prontos para serem servidos.

---

## Estrutura de Pastas

```
Jk-FrontEnd2.0/
├── src/                # Código-fonte React
├── public/             # Arquivos públicos
├── dist/               # Build de produção (gerado pelo Vite)
├── Dockerfile
├── package.json
└── ...
```

---

## Dúvidas Frequentes

- **Como mudar a porta do Vite?**  
  Edite ou crie o arquivo `vite.config.js` e defina a porta em `server.port`.

- **Como conectar ao backend?**  
  Verifique as variáveis de ambiente ou arquivos de configuração para apontar para a URL correta da API.

- **Como servir em produção?**  
  Use um servidor web (Nginx, Apache, etc) apontando para a pasta `dist`.

---

## Contato

Dúvidas ou sugestões? Abra uma issue ou entre em contato com o mantenedor do projeto.

---