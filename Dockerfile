# Etapa 1: Build da aplicação
FROM node:18 AS build

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependências para o container
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código da aplicação para o container
COPY . .

# Executa o build da aplicação
RUN npm run build

# Etapa 2: Servir a aplicação
FROM nginx:alpine

# Remove o conteúdo padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos do build para o diretório padrão do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copia o arquivo de configuração do Nginx (opcional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 80
EXPOSE 80

# Inicia o servidor Nginx
CMD ["nginx", "-g", "daemon off;"]