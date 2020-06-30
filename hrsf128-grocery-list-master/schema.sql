/*  Execute this file from the command line by typing:
 *    sqlite3 items.db < schema.sql
 *  to create the database and the tables.*/
DROP DATABASE IF EXISTS grocerylist;
CREATE DATABASE grocerylist;
USE grocerylist;

CREATE TABLE groceries (
id INT NOT NULL AUTO_INCREMENT,
item VARCHAR (20) NOT NULL,
quantity INT NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO groceries(item, quantity) VALUES ('milk', 3);
INSERT INTO groceries(item, quantity) VALUES ('orange', 2);
INSERT INTO groceries(item, quantity) VALUES ('banana', 4);