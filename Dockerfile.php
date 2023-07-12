FROM php:7.4.33

RUN apt-get update && \
    apt-get install -y libpq-dev

RUN docker-php-ext-install pdo pdo_pgsql

COPY . /var/www/html

WORKDIR /var/www/html

EXPOSE 8000

CMD ["php", "-S", "0.0.0.0:8000"]
