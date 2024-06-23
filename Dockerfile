FROM nginx:stable

WORKDIR /app
COPY . /app

RUN rm -rf /usr/share/nginx/html/index.html
RUN mv /app/dist/* /usr/share/nginx/html/

# nginx will use default config file: /etc/nginx/conf.d/default.conf

RUN echo "deploy completed"
