FROM nginx:stable-alpine
RUN apk update
WORKDIR /app
COPY dist/. /app/
# 기본 포트
EXPOSE 5173
