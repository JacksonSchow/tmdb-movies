# Movie Search App

This application is a simple search engine that queries TheMovieDB (TMDB) using its movies API. The frontend web application is in the `webapp` folder and the backend server is in the `webservice` folder.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What you need to install the software:

- Node.js
- npm or yarn
- Git
- TheMovieDB API Key

### Installing

A step-by-step series of examples that tell you how to get a development environment running.

#### Setting up the Backend

1. Navigate to the `webapp` directory:
    cd webapp

2. Install the dependencies:
    npm install

3. Create a .env file and add in a variable API_KEY
    API_KEY=<your-api-key>

4. Start the backend server:
    npm start

#### Setting up the Frontend

1. Navigate to the `webservice` directory:
    cd webservice

2. Install the dependencies:
    npm install

3. Start the development server:
    npm run serve

5. The server runs on `http://localhost:3000` and handles requests from the front-end.

6. Open `http://localhost:8080` in your browser to view the application.

## Built With

- [Vue.js](https://vuejs.org/) - Web framework
- [Node.js](https://nodejs.org/) - Backend server
- [Express](https://expressjs.com/) - Backend framework

## Authors

- **Jackson Schow** - [JacksonSchow](https://github.com/JacksonSchow)

## Future Enhancements

In the future, I would like to implement a number of features, including

1. Unit Tests: The instructions asked for Mocha unit tests, but I was unable to implement them in the allotted time. Nuxt installation issues ate up much of my time.

2. Sorting: Allow the user to sort movies by popularity, name (for titles that are slightly different), and year.

3. Filtering: View only movies with certain popularity score ranges, above or below a number of votes, or within a range of years.


Below is a screenshot of what the webapp looks like when functioning.

![Screenshot of Movie Search App](Screenshot.png)
