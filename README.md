# React Forum

Welcome to the discussion Forum project! This is a discussion forum built using React, Context API, Node.js, and MongoDB. The project aims to provide a simple platform for discussions on various topics.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Steps to Contribute](#steps-to-contribute)

## Introduction

React Forum is a modern discussion forum that uses React for the frontend, Context API for state management, Node.js for the backend, and MongoDB as the database. 
This project is designed to be easy to use and participate in different discussion communities.

## Features

- **Responsive Design:** The forum is designed to work seamlessly across various devices.
- **Context API:** State management is handled efficiently using React's Context API.
- **User Authentication:** Users can create accounts, log in, and participate in discussions.
- **Comments:" Users can comment on various discussion once they are signed in 

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Getting Started

Follow the steps below to run the project on your local machine.

### Frontend

1. Clone the repository:

   ```
   git clone https://github.com/Priyanshi662/discussion-forum.git
   ```

2. Navigate to the frontend directory:

   ```
   cd discussion-forum/frontend
   ```
  then to forum :
  ```
  cd forum
  ```

3. Install dependencies:

   ```
   npm install
   ```

4. Run the frontend:

   ```
   npm run dev
   ```

   The frontend will be accessible at [http://localhost:3000](http://localhost:3000).

### Backend

1. Navigate to the backend directory:

   ```
   cd discussion-forum/backend
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Set up the MongoDB database and update the database configuration in `.env` file.

4. Run the backend:

   ```
   npm start
   ```

   The backend will run at [http://localhost:5000](http://localhost:5000).
Note : You need to add env variables on your own

## Steps to Contribute

We welcome contributions! To contribute to the React Forum project, follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/new-feature`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature/new-feature`.
5. Submit a pull request.

Feel free to explore, use, and contribute to make React Forum even better! If you encounter any issues or have suggestions, please open an [issue](https://github.com/Priyanshi662/discussion-forum/issues).
