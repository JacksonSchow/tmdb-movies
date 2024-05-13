<template>
  <div id="app">
    <h1>Movies</h1>
    <div>
      <input v-model="searchQuery" type="text" placeholder="Search movies...">
      <button @click="searchMovies">Search</button>
    </div>
  </div>

  <div v-if="movies.length">
    <div v-for="movie in movies" :key="movie.id">
      <img :src="movie.poster_image_url" alt="Movie Poster">
      <h3>{{ movie.title }} - {{ movie.release_year }}</h3>
      <p>{{ movie.popularity_summary }}</p>
    </div>
  </div>
  <div v-else-if="searchInitiated">
    <p>No results found.</p>
  </div>
  <div v-else>
    <h1>Search movie titles!</h1>
  </div>
</template>

<script>
export default {
  name: 'App',
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
  img {
    max-width: 20%;
  }
</style>
