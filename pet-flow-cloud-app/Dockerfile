# Utilizando a imagem oficial do Node, que inclui npm e Node.js
FROM node:20.16.0

# Definindo o diretório de trabalho no contêiner
WORKDIR /app

# Instalando as dependências do Angular CLI
RUN npm install -g @angular/cli@18.1.4

# Copiando os arquivos package.json e package-lock.json
COPY package*.json ./

# Instalando as dependências do projeto
RUN npm install

# Copiando todos os arquivos do projeto para o diretório de trabalho
COPY . .

# Limpando e instalando novamente as dependências para evitar problemas de cache
RUN rm -rf node_modules package-lock.json && npm install

# Compilando a aplicação Angular
RUN ng build

# Expondo a porta padrão utilizada pelo Angular
EXPOSE 4200

# Comando para iniciar a aplicação Angular
CMD ["ng", "serve", "--host", "0.0.0.0"]
