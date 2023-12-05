<script>
import AppCard from './AppCard.vue';
// import AppSerieCard from './AppSerieCard.vue';

import { store } from "../store.js";

export default {
    components: { AppCard },
    data() {
        return {
            store,
        }
    },
    computed: {
    mediaList() {
      return [...this.store.movies, ...this.store.series];
    },
  },
}
</script>

<template>
    <div>
        AppMain
        <div class="container row row-cols-5 d-flex text-center">
            <div v-for="item in mediaList" :key="item.id" class="col">
                <AppCard :item="item" />
            </div>
        </div>
        <!-- <div class="container row row-cols-5 d-flex text-center">
            <div v-for="serie in store.series" :key="serie.id" class="col">
                <AppSerieCard :serie="serie" />
            </div>
        </div> -->
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixin" as *;
@use "../style/partials/variables" as *;
</style>