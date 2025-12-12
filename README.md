This is a simple To-Do backend built using Express, TypeScript, and PostgreSQL following a clean modular pattern. It includes full CRUD functionality, a structured controller–service–route design, and a PostgreSQL database connection using a pooled setup.

### 👤 User Endpoints
| Method | Endpoint       | Description          |
|--------|----------------|----------------------|
| POST   | /users     | Create a new user    |
| GET    | /users     | Get all users        |
| GET    | /users/:id | Get a single user    |
| PUT    | /users/:id | Update a user        |
| DELETE | /users/:id | Delete a user        |

### 📝 Todo Endpoints
| Method | Endpoint         | Description               |
|--------|------------------|---------------------------|
| POST   | /todos       | Create a new todo for user    |
| GET    | /todos/:id   | Get a specific todo           |
| PUT    | /todos/:id   | Update a todo                 |
| DELETE | /todos/:id   | Delete a todo                 |
