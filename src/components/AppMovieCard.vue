<script>
export default {
    props: {
        movie: Object,
    },
    methods: {
    getImageUrl(imgName) {
      return new URL(imgName, import.meta.url).href;
    },
  },
}
</script>

<template>
    <div>
        <div class="card">
            <div class="card-body">
                <p>{{movie.title}}</p>
                <p v-if="movie.title != movie.original_title">{{movie.original_title}}</p>
                <p v-else>Original</p>
                <p>
                    <img :src="getImageUrl(`../assets/img/${this.movie.original_language}.png`)" :alt="movie.original_language">
                    <!-- {{movie.original_language}} -->
                </p>
                <p>{{movie.vote_average}}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

    p img {
        width: 1.5rem;
        height: 1rem;
    }
</style>