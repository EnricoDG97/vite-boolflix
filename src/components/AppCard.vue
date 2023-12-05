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
    }
}
</script>

<template>
    <div>
        <div class="card">
            <div class="card-body">

                <p>{{ item.title }}</p>
                <p v-if="item.title != item.original_title">{{ item.original_title }}</p>
                <p v-else>Original</p>

                <p>{{ item.name }}</p>
                <p v-if="item.name != item.original_name">{{ item.original_name }}</p>
                <p v-else>Original</p>
                
                <p>
                    <img 
                        v-if="imageLoaded" 
                        :src="getImageUrl(`../assets/img/${item.original_language}.png`)" 
                        alt="" 
                    />
                    <p v-else>{{ item.original_language }}</p>
                </p>
                <p>{{ item.vote_average }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    background-color: lightgoldenrodyellow;
}

p img {
    width: 1.5rem;
    height: 1rem;
}
</style>