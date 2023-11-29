<script>
import AppMovieCard from './AppMovieCard.vue';
import AppSerieCard from './AppSerieCard.vue';
import { store } from "../store.js";

export default {
    components: { AppMovieCard, AppSerieCard },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div>
        AppMain
        <div class="container row row-cols-5 d-flex text-center">
            <div v-for="movie in store.movies" :key="movie.id" class="col">
                <AppMovieCard :movie="movie" />
            </div>
        </div>
        <div class="container row row-cols-5 d-flex text-center">
            <div v-for="serie in store.series" :key="serie.id" class="col">
                <AppSerieCard :serie="serie" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    
</style>