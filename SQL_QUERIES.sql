-- This is a list of all of the queries I used throughout my project.

--Create 'users' table:
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    full_name VARCHAR(40),
    email TEXT,
    profile_pic TEXT,
    phone TEXT
);

--I used this query to add a column to my users database:
ALTER TABLE users
ADD COLUMN auth_id TEXT;