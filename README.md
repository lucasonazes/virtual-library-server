# Virtual Library Server

This is a simple RESTful API for managing a virtual library and user favorites. The project is built with Node.js and Express, using JSON files for data storage.

## Features

- List all books
- Get details of a specific book
- Add, modify, and delete books
- List all favorite books
- Add and remove books from favorites

## Project Structure

```
app.js
books.json
favorites.json
package.json
controllers/
  books.js
  favorites.js
routes/
  books.js
  favorites.js
services/
  books.js
  favorites.js
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. Clone the repository.
2. Run `npm install` to install dependencies.

### Running the Server

```sh
node app.js
```

The server will start on port `8000`.

## API Endpoints

### Books

- `GET /books` — List all books
- `GET /books/:id` — Get a book by ID
- `POST /books` — Add a new book (JSON body: `{ "id": "string", "name": "string" }`)
- `PATCH /books/:id` — Modify a book (JSON body with fields to update)
- `DELETE /books/:id` — Delete a book by ID

### Favorites

- `GET /favorites` — List all favorite books
- `POST /favorites/:id` — Add a book to favorites by ID
- `DELETE /favorites/:id` — Remove a book from favorites by ID

## Data Storage

- Books are stored in `books.json`.
- Favorites are stored in `favorites.json`.

##