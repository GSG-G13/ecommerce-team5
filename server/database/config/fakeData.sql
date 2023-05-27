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
    ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5e5c6b1e-1b7b-4b1a-8b0a-0b6b6b0b6b0b/air-max-270-mens-shoe-0KzJcG.jpg', 'Product 1', 'Description of Product 1', '10.99', 1),
    ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5e5c6b1e-1b7b-4b1a-8b0a-0b6b6b0b6b0b/air-max-270-mens-shoe-0KzJcG.jpg', 'Product 2', 'Description of Product 2', '19.99', 1),
    ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5e5c6b1e-1b7b-4b1a-8b0a-0b6b6b0b6b0b/air-max-270-mens-shoe-0KzJcG.jpg', 'Product 3', 'Description of Product 3', '14.99', 2),
    ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5e5c6b1e-1b7b-4b1a-8b0a-0b6b6b0b6b0b/air-max-270-mens-shoe-0KzJcG.jpg', 'Product 4', 'Description of Product 4', '9.99', 2),
    ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5e5c6b1e-1b7b-4b1a-8b0a-0b6b6b0b6b0b/air-max-270-mens-shoe-0KzJcG.jpg', 'Product 5', 'Description of Product 5', '24.99', 3),
    ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5e5c6b1e-1b7b-4b1a-8b0a-0b6b6b0b6b0b/air-max-270-mens-shoe-0KzJcG.jpg', 'Product 6', 'Description of Product 6', '12.99', 3),
    ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5e5c6b1e-1b7b-4b1a-8b0a-0b6b6b0b6b0b/air-max-270-mens-shoe-0KzJcG.jpg', 'Product 7', 'Description of Product 7', '7.99', 4),
    ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5e5c6b1e-1b7b-4b1a-8b0a-0b6b6b0b6b0b/air-max-270-mens-shoe-0KzJcG.jpg', 'Product 8', 'Description of Product 8', '16.99', 4),
    ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5e5c6b1e-1b7b-4b1a-8b0a-0b6b6b0b6b0b/air-max-270-mens-shoe-0KzJcG.jpg', 'Product 9', 'Description of Product 9', '11.99', 5),
    ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5e5c6b1e-1b7b-4b1a-8b0a-0b6b6b0b6b0b/air-max-270-mens-shoe-0KzJcG.jpg', 'Product 10', 'Description of Product 10', '8.99', 5);

INSERT INTO cart (prod_id, user_id, count)
VALUES
    (1, 1, 2),
    (2, 1, 1),
    (3, 2, 3),
    (4, 3, 1),
    (5, 3, 2),
    (6, 4, 1),
    (7, 5, 2),
    (8, 6, 3),
    (9, 7, 1),
    (10, 8, 2);





COMMIT;
