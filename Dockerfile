FROM nginx:stable-alpine
RUN apk update
WORKDIR /app
COPY ezra-bo.conf /etc/nginx/conf.d/
COPY dist/. /app/ezra-bo/html
# 기본 포트
EXPOSE 5173
