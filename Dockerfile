FROM nginx:stable-alpine
RUN apk update
WORKDIR /app
COPY frontend.conf /etc/nginx/conf.d/
COPY storybook.conf /etc/nginx/conf.d/
COPY dist/. /app/frontend/html
COPY storybook-static/. /app/storybook/html
# 기본 포트
EXPOSE 5173 5174
