<script>
export default {
    props: {
        item: Object,
    },
    data() {
        return {
            imageUrl: null,
            imageLoaded: false,
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
            console.log("handle-image-works");
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
        <div class="card">
            <div class="card-body">

                <img v-if="item.poster_path" :src="`https://image.tmdb.org/t/p/w342${item.poster_path}`" class="poster"
                    alt="">
                <img v-else src="../assets/img/no-image.jpg" class="poster-not-found" alt=" preview coming soon">


                <p>{{ getTitle }}</p>
                <p>{{ getOriginalTitle }}</p>

                <p>{{ getName }}</p>
                <p>{{ getOriginalName }}</p>

                <p>
                    <img v-if="imageLoaded" :src="getImageUrl(`../assets/img/${item.original_language}.png`)" alt="" />
                <p v-else>{{ item.original_language }}</p>
                </p>

                <div>
                    <i 
                        v-for="num in rating" 
                        class="fa-solid fa-star" 
                        :key="num">
                    </i>
                    <i 
                        v-for="num in (5 - rating)" 
                        class="fa-regular fa-star" 
                        :key="num">
                    </i>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    background-color: lightgoldenrodyellow;
    height: 500px;
}

.card-body img {
    width: 100%;
}

p img {
    max-width: 1.5rem;
    max-height: 1rem;
}
</style>