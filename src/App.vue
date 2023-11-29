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
    components: { AppHeader, AppMain }
}

</script>

<template>
  <AppHeader />
  <AppMain />

</template>

<style lang="scss">
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";


</style>
