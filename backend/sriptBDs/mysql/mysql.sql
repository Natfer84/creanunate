#DROP DATABASE creanunate;
CREATE DATABASE creanunate;
USE creanunate;

CREATE TABLE creanunate.cart (
    id_cart INT AUTO_INCREMENT,
    PRIMARY KEY(id_cart)
);


CREATE TABLE login(
id INT AUTO_INCREMENT,
username VARCHAR(100) UNIQUE NOT NULL,
dni VARCHAR(9) UNIQUE NOT NULL,
password VARCHAR(255),
`name` VARCHAR(100) NOT NULL,
lastnames VARCHAR(200) NOT NULL,
address VARCHAR(200) NOT NULL,
phone VARCHAR(15) NOT NULL,
isVisible BOOL NOT NUll,
isRegistered BOOL NOT NULL,
PRIMARY KEY(id)
);
#DROP TABLE customers;
#DROP TABLE login;
#ALTER TABLE favorites ADD COLUMN userId INT;

INSERT INTO login (username, dni, password, name, lastnames, address, phone, isVisible, isRegistered) 
VALUES 
('juan.perez@example.com', '12345678A', 'password123', 'Juan', 'Pérez García', 'Calle Falsa 123', '600123456', TRUE, TRUE),
('maria.lopez@example.com', '87654321B', 'password456', 'María', 'López Martínez', 'Avenida Siempre Viva 456', '600654321', TRUE, TRUE),
('carlos.gomez@example.com', '23456789C', 'password789', 'Carlos', 'Gómez Fernández', 'Plaza Mayor 789', '600987654', TRUE, FALSE),
('ana.martinez@example.com', '34567890D', 'password012', 'Ana', 'Martínez Sánchez', 'Calle Luna 101', '600112233', FALSE, TRUE);





CREATE TABLE favorites (
    id  INT AUTO_INCREMENT,
    `name` VARCHAR(255),
    `description` TEXT,
    video VARCHAR(500),
    price DECIMAL(10,2),
    fk_id_login INT,
    PRIMARY KEY(id),
	FOREIGN KEY (fk_id_login) REFERENCES login(id)
);

#DROP TABLE favorites;

INSERT INTO favorites (`name`, `description`, `video`, `price`,fk_id_login)  
VALUES ("Pensamiento Creativo: Desbloquea tu Imaginación", "Aprende técnicas y estrategias para potenciar tu creatividad y generar ideas innovadoras en cualquier área.", "https://www.youtube.com/watch?v=VShmtsLhkQg", 0.99,1);

INSERT INTO favorites (`name`, `description`, `video`, `price`,fk_id_login)  
VALUES ("Design Thinking: Innovación Centrada en el Usuario", "Explora el proceso de Design Thinking para resolver problemas de manera creativa y centrada en las necesidades del usuario.", "https://www.youtube.com/watch?v=RqaHh8XKIVg", 0.99,2);

INSERT INTO favorites (`name`, `description`, `video`, `price`,fk_id_login)  
VALUES ("Escritura Creativa: De la Idea al Relato", "Desarrolla tu talento literario con técnicas de escritura creativa para contar historias atrapantes.", "https://www.youtube.com/watch?v=fHMPtYvZ8tM", 0.99,4);

INSERT INTO favorites (`name`, `description`, `video`, `price`,fk_id_login)  
VALUES ("Dibujo y Creatividad: Expresa tus Ideas Visualmente", "Mejora tus habilidades de dibujo mientras exploras formas innovadoras de representar tus ideas.", "https://www.youtube.com/watch?v=TYzISNbb8kM", 0.99,4);

INSERT INTO favorites (`name`, `description`, `video`, `price`,fk_id_login)  
VALUES ("Pensamiento Creativo: Desbloquea tu Imaginación", "Aprende técnicas y estrategias para potenciar tu creatividad y generar ideas innovadoras en cualquier área.", "https://www.youtube.com/watch?v=VShmtsLhkQg", 0.99,1);

INSERT INTO favorites (`name`, `description`, `video`, `price`,fk_id_login)  
VALUES ("Design Thinking: Innovación Centrada en el Usuario", "Explora el proceso de Design Thinking para resolver problemas de manera creativa y centrada en las necesidades del usuario.", "https://www.youtube.com/watch?v=RqaHh8XKIVg", 0.99,2);

INSERT INTO favorites (`name`, `description`, `video`, `price`,fk_id_login)  
VALUES ("Escritura Creativa: De la Idea al Relato", "Desarrolla tu talento literario con técnicas de escritura creativa para contar historias atrapantes.", "https://www.youtube.com/watch?v=fHMPtYvZ8tM", 0.99,3);

INSERT INTO favorites (`name`, `description`, `video`, `price`,fk_id_login)  
VALUES ("Dibujo y Creatividad: Expresa tus Ideas Visualmente", "Mejora tus habilidades de dibujo mientras exploras formas innovadoras de representar tus ideas.", "https://www.youtube.com/watch?v=TYzISNbb8kM", 0.99,2);

SELECT *
FROM favorites
WHERE fk_id_login = (SELECT id FROM login WHERE login.username = 'juan.perez@example.com' AND password = 'password123');

SELECT * FROM favorites WHERE fk_id_login = (SELECT id FROM login WHERE username='juan.perez@example.com')