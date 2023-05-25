

BEGIN;

INSERT INTO users (first_name, last_name, email, phone, img_url, user_password)
VALUES
    ('John', 'Doe', 'johndoe@example.com', '1234567890', 'https://example.com/johndoe.jpg', 'password123'),
    ('Jane', 'Smith', 'janesmith@example.com', '9876543210', 'https://example.com/janesmith.jpg', 'password456'),
    ('David', 'Johnson', 'davidjohnson@example.com', '4567890123', 'https://example.com/davidjohnson.jpg', 'password789'),
    ('Sarah', 'Williams', 'sarahwilliams@example.com', '3210987654', 'https://example.com/sarahwilliams.jpg', 'passwordabc'),
    ('Michael', 'Brown', 'michaelbrown@example.com', '7890123456', 'https://example.com/michaelbrown.jpg', 'passworddef'),
    ('Emily', 'Jones', 'emilyjones@example.com', '2345678901', 'https://example.com/emilyjones.jpg', 'passwordxyz'),
    ('Daniel', 'Davis', 'daviddavis@example.com', '8901234567', 'https://example.com/daviddavis.jpg', 'password123abc'),
    ('Olivia', 'Miller', 'oliviamiller@example.com', '5678901234', 'https://example.com/oliviamiller.jpg', 'password456def'),
    ('James', 'Taylor', 'jamestaylor@example.com', '0123456789', 'https://example.com/jamestaylor.jpg', 'password789xyz'),
    ('Sophia', 'Wilson', 'sophiawilson@example.com', '9012345678', 'https://example.com/sophiawilson.jpg', 'passwordabc123');

INSERT INTO categories (category)
VALUES 
  ('shoes'), ('shirt'), ('jacket'), ('trousers'), ('sweater');


INSERT INTO products (img_url, title, discription, price, cat_id)
VALUES
    ('https://example.com/product1.jpg', 'Product 1', 'Description of Product 1', '10.99', 1),
    ('https://example.com/product2.jpg', 'Product 2', 'Description of Product 2', '19.99', 1),
    ('https://example.com/product3.jpg', 'Product 3', 'Description of Product 3', '14.99', 2),
    ('https://example.com/product4.jpg', 'Product 4', 'Description of Product 4', '9.99', 2),
    ('https://example.com/product5.jpg', 'Product 5', 'Description of Product 5', '24.99', 3),
    ('https://example.com/product6.jpg', 'Product 6', 'Description of Product 6', '12.99', 3),
    ('https://example.com/product7.jpg', 'Product 7', 'Description of Product 7', '7.99', 4),
    ('https://example.com/product8.jpg', 'Product 8', 'Description of Product 8', '16.99', 4),
    ('https://example.com/product9.jpg', 'Product 9', 'Description of Product 9', '11.99', 5),
    ('https://example.com/product10.jpg', 'Product 10', 'Description of Product 10', '8.99', 5);

INSERT INTO cart (prod_id, user_id, count)
VALUES
    (31, 11, 2),
    (32, 11, 1),
    (33, 12, 3),
    (34, 13, 1),
    (35, 13, 2),
    (36, 14, 1),
    (37, 15, 2),
    (38, 16, 3),
    (39, 17, 1),
    (40, 18, 2);





COMMIT;