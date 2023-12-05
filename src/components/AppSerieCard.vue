<!-- <script>
export default {
    props: {
        serie: Object,
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
            img.src = this.getImageUrl(`../assets/img/${this.serie.original_language}.png`);
        },
    methods: {
        getImageUrl(imgName) {
            return new URL(imgName, import.meta.url).href;
        },
        handleImageLoad() {
            this.imageLoaded = true;
            console.log("handle-image-works");
        },
    }
}
</script>

<template>
    <div>
        <div class="card">
            <div class="card-body">
                <p>{{ serie.name }}</p>
                <p v-if="serie.name != serie.original_name">{{ serie.original_name }}</p>
                <p v-else>Original</p>
                <p>
                    <img 
                        v-if="imageLoaded" 
                        :src="getImageUrl(`../assets/img/${serie.original_language}.png`)" 
                        alt="" 
                    />
                    <p v-else>{{ serie.original_language }}</p>
                </p>
                <p>{{ serie.vote_average }}</p>
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
</style> -->