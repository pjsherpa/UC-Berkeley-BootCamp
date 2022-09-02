DROP DATABASE IF EXISTS movies_db;
CREATE DATABASE movies_db;

USE movies_db;

CREATE TABLE movies (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  movie_name VARCHAR(100) NOT NULL --to send
);

CREATE TABLE reviews (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, --to send
    movie_id INT, 
    review TEXT NOT NULL, --to send
    FOREIGN KEY (movie_id)
    REFERENCES movies(id)
    ON DELETE SET NULL
);