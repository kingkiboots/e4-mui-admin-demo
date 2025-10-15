FROM nginx:stable-alpine
RUN apk update
WORKDIR /app
COPY frontend.conf /etc/nginx/conf.d/
COPY dist/. /app/frontend/html
COPY storybook-static/. /app/frontend/html/storybook-static
# 기본 포트
EXPOSE 5173
