<template>
  <div id="app">
    <h1>TheMovieDB Search Engine</h1>
    <div class="search-container">
      <input v-model="searchQuery" type="text" class="input-box" placeholder="Search movie titles...">
      <button @click="searchMovies" class="button">Search</button>
    </div>
  </div>

  <div v-if="movies.length">
    <div class="card-container">
      <MovieCard
        v-for="movie in movies"
        :key="movie.id"
        :poster_image_url="movie.poster_image_url"
        :title="movie.title"
        :release_year="movie.release_year"
        :popularity_summary="movie.popularity_summary"
      />
    </div>
  </div>
  <div v-else-if="searchInitiated">
    <h2>No results found.</h2>
  </div>
  <div v-else>
    <h2>Search movie titles!</h2>
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard.vue'

export default {
  name: 'App',
  components: {
    MovieCard
  },
  data() {
    return {
      searchQuery: '',
      movies: [],
      searchInitiated: false
    };
  },
  methods: {
    searchMovies() {
      if (!this.searchQuery) {
        alert("Please enter a movie title to search.");
        return;
      }
      const apiUrl = `http://localhost:3000/movies?search=${encodeURIComponent(this.searchQuery)}`;

      fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        this.movies = data;
        this.searchInitiated = true;
      })
      .catch(error => console.error('Error:', error));
      this.searchInitiated = true;
    }
  }
};
</script>

<style>
  body {
    text-align: center;
  }

  h1 {
    color: rgb(32,32,32);
    font-family: sans-serif;
    font-size: 3.5rem;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  .button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #3498db;
    color: white;
    border: 2px solid #3498db;
    outline: none;
    cursor: pointer;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    transition: background-color 0.3s, border-color 0.3s;
  }

  .button:hover, .button:focus {
    background-color: #2980b9;
    border-color: #2980b9;
  }

  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    gap: 20px;
    padding: 20px;
  }

  .input-box {
    padding: 10px 15px;
    font-size: 16px;
    border: 2px solid #95a5a6;
    border-right: none;
    outline: none;
    width: 300px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    transition: all 0.3s ease;
  }

  .input-box:focus {
    border-color: #3498db;
  }

  .search-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>
