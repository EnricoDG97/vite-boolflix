<script>
export default {
    props: {
        serie: Object,
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
                <p>{{serie.name}}</p>
                <p v-if="serie.name != serie.original_name">{{serie.original_name}}</p>
                <p v-else>Original</p>
                <p>
                    <img :src="getImageUrl(`../assets/img/${this.serie.original_language}.png`)" :alt="serie.original_language">
                    <!-- {{movie.original_language}} -->
                </p>
                <p>{{serie.vote_average}}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .card {
        background-color: lightblue;
    }
    p img {
        width: 1.5rem;
        height: 1rem;
    }
</style>