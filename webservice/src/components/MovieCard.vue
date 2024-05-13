<template>
    <div class="card">
        <img :src="poster_image_url" class="card-image" alt="Movie Poster">
        <div class="card-info">
            <h3>{{ title }} - {{ release_year }}</h3>
            <p>{{ popularity_summary }}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    poster_image_url: String,
    title: String,
    release_year: String,
    popularity_summary: Number
  }
}
</script>

<style>
    .card {
      width: calc(25% - 40px);
      background-color: white;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      overflow: hidden;
    }

    .card-image {
      width: 100%;
      height: auto;
      display: block;
    }

    .card-info {
      padding: 10px;
      text-align: center;
    }

    .card-info h3 {
      margin: 0;
      padding: 5px 0;
      height: 40px;
      overflow: hidden;
    }
    .card-info p {
      margin: 0;
      padding: 5px 0;
    }
</style>