<script>
import AppMovieCard from './AppMovieCard.vue';
import { store } from "../store.js"

export default {
    components: { AppMovieCard },
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
        <div class="container row d-flex text-center">
            <div v-for="(movie, index) in store.movies" :key="movie.id" class="col">
                <AppMovieCard :movie="movie" />
            </div>
        </div>
    </div>
</template>

<style lang="" scoped>
    
</style>