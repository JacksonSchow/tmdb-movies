import cors from 'cors';
import express from 'express';
import fetch from 'node-fetch';
import 'dotenv/config';

// Set up the port
const PORT = 3000;
const app = express();

// Serve static files (if needed)
app.use(express.static('public/images'));
app.use(cors());

// Route to index page
app.get('/', (req, res) => {
  res.status(200).json({ status: "OK", message: "Server is healthy. Search for movies!" });
});

// Route to fetch an display movies
app.get('/movies', async(req, res) => {
  const query = req.query.search;
  const API_KEY=process.env.API_KEY;
  const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&include_adult=false&api_key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const cleanedData = data.results.map(movie => ({
      movie_id: movie.id,
      title: movie.title,
      poster_image_url: `http://image.tmdb.org/t/p/w500/${movie.poster_path}`,
      popularity_summary: `Popularity of ${movie.popularity} out of ${movie.vote_count} votes`,
      popularity: movie.popularity,
      release_year: movie.release_date ? movie.release_date.substring(0, 4) : 'Unknown',
    }))
    .slice(0, 10);

    res.json(cleanedData); // Send back the data from TMDb API to the frontend
  } catch (error) {
      console.error('Error fetching data from TMDb:', error);
      res.status(500).send('Failed to fetch data');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Note: Do not close the DB connection here, it should stay open while the server is running
