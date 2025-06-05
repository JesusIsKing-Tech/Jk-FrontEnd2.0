# Etapa 1: Build da aplicação
FROM node:18 AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa final: Apenas arquivos estáticos do build
FROM alpine:latest

WORKDIR /app

# Copia apenas os arquivos do build para a imagem final
COPY --from=build /app/dist /app

# Comando padrão: mantém o container rodando para facilitar o docker cp
CMD ["sh", "-c", "echo 'Build concluído. Copie os arquivos de /app para seu Nginx.' && tail -f /dev/null"]