#DROP DATABASE creanunate;
CREATE DATABASE creanunate;
USE creanunate;

CREATE TABLE creanunate.customers (
    id INT AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    surname VARCHAR(100),
    date_birth DATE,
    email VARCHAR(100) UNIQUE NOT NULL,
    isRequested BOOLEAN,
    isVisible BOOLEAN,
    fk_id_cart INT,
    fk_id_favorites INT,
    PRIMARY KEY(id)
);

INSERT INTO creanunate.customers (id, name, surname, date_birth, email, isRequested, isVisible) 
VALUES (NULL, "María", "Pérez", "2003-01-28", "maria@gmail.com", 1, 1);
INSERT INTO creanunate.customers (id, name, surname, date_birth, email, isRequested, isVisible) 
VALUES (NULL, "José", "Ramirez", "1945-07-05", "jose@gmail.com", 1, 1);
INSERT INTO creanunate.customers (id, name, surname, date_birth, email, isRequested, isVisible) 
VALUES (NULL, "Rafael", "Hernández","1994-04-08", "rafael@gmail.com", 1, 1);
INSERT INTO creanunate.customers (id, name, surname, date_birth, email, isRequested, isVisible) 
VALUES (NULL, "Ana", "Rodríguez", "2000-11-13", "ana@gmail.com", 1, 1);

CREATE TABLE creanunate.cart (
    id_cart INT AUTO_INCREMENT,
    PRIMARY KEY(id_cart)
);

CREATE TABLE creanunate.favorites (
    id  INT AUTO_INCREMENT,
    `name` VARCHAR(255),
    `description` TEXT,
    video VARCHAR(500),
    price DECIMAL(10,2),
    PRIMARY KEY(id)
);

INSERT INTO creanunate.favorites (`name`, `description`, `video`, `price`)  
VALUES ("Pensamiento Creativo: Desbloquea tu Imaginación", "Aprende técnicas y estrategias para potenciar tu creatividad y generar ideas innovadoras en cualquier área.", "https://www.youtube.com/watch?v=VShmtsLhkQg", 0.99);

INSERT INTO creanunate.favorites (`name`, `description`, `video`, `price`)  
VALUES ("Design Thinking: Innovación Centrada en el Usuario", "Explora el proceso de Design Thinking para resolver problemas de manera creativa y centrada en las necesidades del usuario.", "https://www.youtube.com/watch?v=RqaHh8XKIVg", 0.99);

INSERT INTO creanunate.favorites (`name`, `description`, `video`, `price`)  
VALUES ("Escritura Creativa: De la Idea al Relato", "Desarrolla tu talento literario con técnicas de escritura creativa para contar historias atrapantes.", "https://www.youtube.com/watch?v=fHMPtYvZ8tM", 0.99);

INSERT INTO creanunate.favorites (`name`, `description`, `video`, `price`)  
VALUES ("Dibujo y Creatividad: Expresa tus Ideas Visualmente", "Mejora tus habilidades de dibujo mientras exploras formas innovadoras de representar tus ideas.", "https://www.youtube.com/watch?v=TYzISNbb8kM", 0.99);
