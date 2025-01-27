CREATE TABLE articles(
    id SERIAL PRIMARY KEY,
    name_articles VARCHAR(255),
    text_articles TEXT,
    date VARCHAR(255),
    date_update VARCHAR(255)
);

CREATE TABLE comments(
    id SERIAL PRIMARY KEY,
    name_articles VARCHAR(255),
    text_comments TEXT,
    date VARCHAR(255),
    date_update VARCHAR(255),
    articles_id INTEGER,
    FOREIGN KEY (articles_id) REFERENCES articles (id)
);