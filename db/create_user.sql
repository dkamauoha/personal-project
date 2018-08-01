INSERT INTO users (full_name, email, profile_pic, auth_id)
VALUES ($1, $2, $3, $4)
RETURNING *;