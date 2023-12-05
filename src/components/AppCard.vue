<script>
export default {
    props: {
        item: Object,
    },
    data() {
        return {
            imageUrl: null,
            imageLoaded: false,
            showInfo: false,
        };
    },
    mounted() {
        const img = new Image();
        img.onload = this.handleImageLoad;
        img.src = this.getImageUrl(`../assets/img/${this.item.original_language}.png`);
    },
    methods: {
        getImageUrl(imgName) {
            return new URL(imgName, import.meta.url).href;
        },
        handleImageLoad() {
            this.imageLoaded = true;
        },
    },
    computed: {
        getTitle() {
            return this.item.title;
        },
        getOriginalTitle() {
            return this.item.title !== this.item.original_title ? this.item.original_title : '';
        },
        getName() {
            return this.item.name;
        },
        getOriginalName() {
            return this.item.name !== this.item.original_name ? this.item.original_name : '';
        },
        rating() {
            return Math.ceil(this.item.vote_average / 2)
        }
    },
}
</script>

<template>
    <div>
        <div class="card bg-dark text-light" @mouseenter="showInfo = true" @mouseleave="showInfo = false">
            <div class="card-body">
                <div v-if="!showInfo" class="poster-container">
                    <img v-if="item.poster_path" :src="`https://image.tmdb.org/t/p/w342${item.poster_path}`" class="poster"
                        alt="">
                    <img v-else src="../assets/img/no-image.jpg" class="poster-not-found" alt=" preview coming soon">
                </div>

                <div v-if="showInfo" class="text-container">

                    <p>{{ getTitle }}</p>
                    <p>{{ getOriginalTitle }}</p>

                    <p>{{ getName }}</p>
                    <p>{{ getOriginalName }}</p>

                    <p v-if="imageLoaded">
                        <img :src="getImageUrl(`../assets/img/${item.original_language}.png`)" alt="" />
                    </p>
                    <p v-else>{{ item.original_language }}</p>

                    <div>
                        <i v-for="num in rating" class="fa-solid fa-star" :key="num">
                        </i>
                        <i v-for="num in (5 - rating)" class="fa-regular fa-star" :key="num">
                        </i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixin.scss" as *;
.card {
    height: 300px;
    position: relative;
    overflow: hidden;
    &:hover .card-body .poster-container {
        opacity: 0;
    }
    &:hover .card-body .text-container {
        opacity: 1;
    }
}

.card-body {
    padding: 0;
    position: relative;
    .poster-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        // @import flex(row, center, center);
        display: flex;
        justify-content: center;
        align-items: center;
        transition: opacity 0.5s ease;
        img {
            max-width: 100%;
            height: auto;
        }
    }
    .text-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        opacity: 0;
        transition: opacity 0.5s ease;
    }
}

p img {
    max-width: 1.5rem;
    max-height: 1rem;
}
</style>