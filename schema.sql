DROP DATABASE IF EXISTS fenty_reviews;
CREATE DATABASE fenty_reviews;
USE fenty_reviews;

CREATE TABLE user_info (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255),
    location VARCHAR(255),
    reviews INT,
    votes INT, 
    skin_type VARCHAR(255),
    skin_tone VARCHAR(255),
    age VARCHAR(255)
);

CREATE TABLE review (
    rating INT, 
    date INT,
    title VARCHAR(255),
    body VARCHAR(1000),
    reccomend BOOLEAN,
    helpful_yes INT,
    helpful_no INT,
    quality INT,
    value INT,
    id INT,
    FOREIGN KEY (id) REFERENCES user_info(id)
);