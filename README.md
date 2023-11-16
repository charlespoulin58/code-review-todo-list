# Todo List Code Review Project

This project is a simple TODO list application built using Express and MongoDB.

## Instructions to Run

To run this project locally, follow these steps:

### Prerequisites

- Node.js installed
- MongoDB installed and running

### Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Install npm dependencies:
   npm install

4. Set up the MongoDB connection in the `.env` file if necessary.

### Running the Application

Run the following command to start the server:

npm start

The server will start running on `http://localhost:3000`.

## Documentation

Due to time constraints, SwaggerUI documentation couldn't be configured. I moved the JSdocs here:

### Endpoints

#### `POST /tasks`

Creates a new task.

##### Function

Create a new task function

##### Server Codes

- `201`: Successfully created
- `400`: Bad request, missing required fields
- `500`: Internal server error

#### `GET /tasks`

Retrieves all tasks.

##### Function

Get all tasks function

##### Server Codes

- `200`: Successful retrieval
- `500`: Internal server error

#### `GET /tasks/:id`

Retrieves a specific task by ID.

##### Function

Get a task by ID function

##### Server Codes

- `200`: Successful retrieval
- `400`: Invalid ID
- `404`: Task not found
- `500`: Internal server error

#### `PUT /tasks/:id`

Updates a task by ID.

##### Function

Update a task by ID function

##### Server Codes

- `200`: Successfully updated
- `400`: Invalid ID
- `500`: Internal server error

#### `DELETE /tasks/:id`

Deletes a task by ID.

##### Function

Delete a task by ID function

##### Server Codes

- `200`: Successfully deleted
- `400`: Invalid ID
- `500`: Internal server error
## Tests

I used Postman to test the API endpoints. I have provided the postman test scripts and test cases. Due to time constraints, I was unable to finish the test for the delete endpoint. These tests would need to be improved by testing the outcome in the actual database. Right now, I am only able to test the server responses and the code to see if the endpoint was successful. This could be done in Jest/Supertest, but due to time, I was unable to get this configured. This would take me an additional hour or two to figure out (I am unfamiliar with those technologies currently).

### Running Postman Tests

To run the Postman tests, follow these steps:

1. Navigate to the [public workspace](https://www.postman.com/material-specialist-4346989/workspace/todo-code-review/overview).
2. Click on the Todo endpoints collection.
3. Run all tests within the collection.