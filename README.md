# Countries Project

A responsive countries information web application built with React. The application allows users to browse countries, search for specific countries, filter countries by region, and view detailed information about individual countries.

The project uses a separate Express backend to serve country data. This backend was added because the original REST Countries API endpoint used by the project was deprecated.

## Live Demo

https://countries-api-application.netlify.app/

## Features

* Browse countries and their information
* Search for a country by name
* Filter countries by region
* View detailed information about a selected country
* Navigate between country pages using React Router
* Responsive design for different screen sizes
* Separate frontend and backend architecture
* Custom Express API for serving country data

## Tech Stack

### Frontend

* React
* React Router
* JavaScript
* CSS
* Parcel

### Backend

* Node.js
* Express.js
* CORS

## Architecture

The project is divided into two parts:

```text
countries-project/
├── frontend/
│   ├── components/
│   ├── contexts/
│   ├── hooks/
│   ├── App.jsx
│   ├── index.jsx
│   └── countriesData.js
│
└── backend/
    ├── data/
    │   └── countries.json
    ├── routes/
    │   └── countries.js
    └── server.js
```

The frontend communicates with the Express backend instead of directly depending on the deprecated API endpoint. The backend exposes country data through custom routes such as:

```text
GET /countries
GET /countries/name/:name
GET /countries/code/:code
```

## Why the Backend Was Added

The project originally depended on an external REST Countries API endpoint. That endpoint was later deprecated, which caused the application to stop receiving the expected country data.

To keep the application functional, a small Express backend was introduced. It stores the required country data locally and exposes API endpoints that the React frontend can consume.

This also gave the project a basic full-stack structure rather than relying entirely on a third-party API.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/AniketLohkare/countries-project.git
cd countries-project
```

### 2. Install frontend dependencies

```bash
cd frontend
npm install
```

### 3. Start the frontend

```bash
npm start
```

### 4. Install backend dependencies

Open another terminal:

```bash
cd backend
npm install
```

### 5. Start the backend

For development:

```bash
npm run dev
```

Or for a normal start:

```bash
npm start
```

The backend runs on port `3000` by default.

## What I Learned

This project helped me practice:

* Building reusable React components
* Managing application state with React Context
* Creating custom React hooks
* Using React Router for client-side navigation
* Fetching data from an API
* Building a REST API with Express.js
* Connecting a React frontend to a custom backend
* Structuring a project into separate frontend and backend applications
* Handling the migration from a deprecated third-party API
* Creating responsive user interfaces

## Disclaimer

This project is created for educational and portfolio purposes.
