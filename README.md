# CRUD-Operation-Using-MERN
Description
This project is a MERN Stack (MongoDB, Express.js, React.js, Node.js) application that demonstrates basic CRUD (Create, Read, Update, Delete) operations. The application allows users to perform email registrations along with their name and age.

Features
Create: Register a new user with their name, email, and age.
Read: Fetch and display a list of registered users with their details.
Update: Update an existing user's name, email, or age.
Delete: Remove a user's record from the database.
Tech Stack
Frontend: React.js
Backend: Node.js with Express.js
Database: MongoDB (via Mongoose)
Other Tools: RESTful APIs, Postman (for testing APIs)
How It Works
The frontend (React.js) sends HTTP requests to the backend server.
The backend (Node.js/Express.js) processes the requests and interacts with the MongoDB database.
Responses are sent back to the client to reflect the changes in the user interface.
Endpoints
The following API routes are implemented:

POST /api/users - Add a new user.
GET /api/users - Fetch all registered users.
PUT /api/users/:id - Update a user's details by their ID.
DELETE /api/users/:id - Delete a user by their ID.
Use Case
This project can be used as a foundational application to manage user records, such as email registrations, in any system requiring basic CRUD functionality.



