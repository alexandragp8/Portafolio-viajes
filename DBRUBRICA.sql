CREATE DATABASE RUBRICA
USE RUBRICA

CREATE TABLE USUARIOS(
	IDUSUARIO INT AUTO_INCREMENT PRIMARY KEY,
	NOMBRE VARCHAR(50) NOT NULL,
    APELLIDO VARCHAR(50) NOT NULL,
    CORREO VARCHAR(50) NOT NULL,
    PROGRAMA VARCHAR(100) NOT NULL,
    FICHA INT NOT NULL,
    USUARIO VARCHAR(50) NOT NULL,
    CONTRASEÑA PASSWORD NOT NULL
);

INSERT INTO USUARIOS VALUES(0,'Maria','Cadavid','unamariacadavid@gmail.com','ADSI',1800888,'MCADAVID',sha(12345));
INSERT INTO USUARIOS VALUES(0,'Sara','Urrea','saraurrea29@gmail.com','ADSI',1800888,'SURREA',sha(12345));
INSERT INTO USUARIOS VALUES('Alexandra','González','alexandragp8@gmail.com','ADSI',1800888,'AGONZALEZ',sha(12345));
INSERT INTO USUARIOS VALUES('Lorena','Vélez','lvelezp11@gmail.com','ADSI',1800888,'LVELEZ',sha(12345));

select * from USUARIOS;