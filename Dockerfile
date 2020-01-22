FROM nginx:1.15-alpine

WORKDIR /usr/share/nginx/html

COPY index.html .
COPY css ./css

CMD ["nginx", "-g", "daemon off;"]
