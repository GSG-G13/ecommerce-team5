BEGIN;

DROP TABLE IF EXISTS users, products, cart, categories;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    email VARCHAR(30),
    phone VARCHAR(20),
    img_url VARCHAR(1000),
    user_password VARCHAR(100)

);

CREATE TABLE categories (
id SERIAL PRIMARY KEY,
category VARCHAR(20)
);

CREATE TABLE products (
id SERIAL PRIMARY KEY,
img_url VARCHAR(1000),
title VARCHAR(20),
discription VARCHAR(100),
price VARCHAR(20),
cat_id INTEGER REFERENCES categories(id)
);

CREATE TABLE cart (
id SERIAL PRIMARY KEY,
prod_id INTEGER REFERENCES products(id),
user_id INTEGER REFERENCES users(id),
count INTEGER
);



COMMIT;