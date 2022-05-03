
CREATE TABLE IF NOT EXISTS  task( 
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL, 
    description VARCHAR(200),
    created_on TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO task(title , description) VALUES ( 'Task1' , 'Description 1' );

SELECT * FROM task 

UPDATE task SET title = 'tarea1' , description = 'tarea2' WHERE id = 1 RETURNING *

DELETE FROM task WHERE id = 1