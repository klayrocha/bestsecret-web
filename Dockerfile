FROM nginx:1.15.8-alpine
COPY dist/ghostgame-web/ /usr/share/nginx/html
COPY dist/ghostgame-web/ /usr/share/nginx/htm