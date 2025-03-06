--DROP DATABASE creanunate;
CREATE DATABASE creanunate;
USE creanunate;

CREATE TABLE creanunate.login (
    id INT AUTO_INCREMENT,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(100) NOT NULL,
    surname VARCHAR(100) NOT NULL,
    date_birth DATE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    isRequested TINYINT(1) DEFAULT 0,
    isVisible TINYINT(1) DEFAULT 1,
    PRIMARY KEY(id)
);
--drop table login

SELECT * FROM login;
SELECT * FROM login WHERE username = 'juan123';

INSERT INTO login (id, username, password, name, surname, date_birth, email, isRequested, isVisible) 
VALUES (NULL,"maria@gmail.com", "usuario1", "María", "Pérez", "2003-01-28", "maria@gmail.com", 1, 1);

INSERT INTO login (id, username, password, name, surname, date_birth, email, isRequested, isVisible) 
VALUES (NULL, "juan@gmail.com", "usuario2", "Juan", "Gómez", "1998-05-15", "juan@gmail.com", 1, 1);

INSERT INTO login (id, username, password, name, surname, date_birth, email, isRequested, isVisible) 
VALUES (NULL, "laura@gmail.com", "usuario3", "Laura", "Fernández", "2000-09-10", "laura@gmail.com", 1, 1);

INSERT INTO login (id, username, password, name, surname, date_birth, email, isRequested, isVisible) 
VALUES (NULL, "carlos@gmail.com", "usuario4", "Carlos", "López", "1995-12-22", "carlos@gmail.com", 1, 1);

INSERT INTO login (id, username, password, name, surname, date_birth, email, isRequested, isVisible) 
VALUES (NULL, "ana@gmail.com", "usuario5", "Ana", "Martínez", "2002-07-30", "ana@gmail.com", 1, 1);

INSERT INTO login (username, password) VALUES ('juan123', 'claveSegura1');
INSERT INTO login (username, password) VALUES ('maria_lpz', 'contraseñaFuerte2');
INSERT INTO login (username, password) VALUES ('carlos89', 'pass12345');
INSERT INTO login (username, password) VALUES ('ana_gomez', 'miClaveSegura3')


CREATE TABLE creanunate.cart (
    id_cart INT AUTO_INCREMENT,
    PRIMARY KEY(id_cart)
);

CREATE TABLE favorites (
    id INT AUTO_INCREMENT,
    user_id INT NOT NULL,          
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT,
    video VARCHAR(500),
    price DECIMAL(10,2),
    PRIMARY KEY(id),
    FOREIGN KEY (id) REFERENCES login(id) ON DELETE CASCADE       
);
-- user_id INT NOT NULL, necesitamos relacional el favorito que pincha el cliente con el ususrio que lo pincha
--  ON DELETE CASCADE si un usuario se borra se bora sus favoritos
--drop table favorites

INSERT INTO favorites (user_id, name, description, video, price) 
VALUES (1, "Curso de Fotografía", "Aprende los fundamentos de la fotografía digital", "https://example.com/video1", 49.99);

INSERT INTO favorites (user_id, name, description, video, price) 
VALUES (2, "Masterclass de Guitarra", "Clases avanzadas de guitarra eléctrica y acústica", "https://example.com/video2", 79.99);

INSERT INTO favorites (user_id, name, description, video, price) 
VALUES (3, "Programación en Python", "Curso completo de Python desde cero hasta avanzado", "https://example.com/video3", 59.99);

INSERT INTO favorites (user_id, name, description, video, price) 
VALUES (4, "Diseño Gráfico con Photoshop", "Aprende a crear diseños profesionales con Photoshop", "https://example.com/video4", 39.99);

SELECT f.id, f.name, f.description, f.video, f.price 
FROM favorites f
JOIN login l ON f.user_id = l.id
WHERE l.id = 1;
