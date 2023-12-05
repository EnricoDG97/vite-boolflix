<script>
import axios from 'axios';
import { store } from "./store.js"
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
    data() {
        return {
            store,
        };
    },
    created() {
        axios
            .get(this.store.apiUrlMovies, {
                params: {
                    api_key: this.store.myApiKey,
                }
            })
            .then((resp) => {
                this.store.movies = resp.data.results;
                console.log(resp.data.results);
            });
    },
    components: { AppHeader, AppMain },
    methods: {
        handleSearch() {
            const params = {
                    api_key: this.store.myApiKey,
                    query: this.store.searchText,
                    }
            axios
                .get(this.store.apiUrlMovies, { params })
                .then((resp) => {
                    this.store.movies = resp.data.results;
                    console.log("ECCO I FILM:");
                    console.log(resp.data.results);
                });
            axios
                .get(this.store.apiUrlTv, { params })
                .then((resp) => {
                    this.store.series = resp.data.results;
                    console.log("ECCO LE SERIE:");
                    console.log(resp.data.results);
                });
        }
    }
}

</script>

<template>
    <div class="container">
        <AppHeader @performSearch="handleSearch" />
        <AppMain />
    </div>
</template>

<style lang="scss">
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";
</style>
