# Etapa de construção
FROM node:14-alpine as build

WORKDIR /src

# Instalar dependências
COPY package.json yarn.lock ./
RUN yarn install

# Copiar o restante do código da aplicação
COPY . .

# Definir a variável de ambiente para resolver o problema de hash
ENV NODE_OPTIONS=--openssl-legacy-provider

# Construir a aplicação para produção
RUN yarn build

# Etapa de produção
FROM nginx:alpine

# Copiar os arquivos de build para o diretório padrão do Nginx
COPY --from=build ./build /usr/share/nginx/html/build

# Copiar o arquivo de configuração do Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Expor a porta que o Nginx irá rodar
EXPOSE 80

# Comando para rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]