DROP TABLE IF EXISTS project CASCADE;

CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  description TEXT,
  github_link VARCHAR(200),
  img_url VARCHAR(200) 
);

INSERT INTO projects (title) 
VALUES 
('Project1'),
('Project2'),
('Project3'),
('Project4'),
('Project5'),
('Project6'),
('Project7'),
('Project8');