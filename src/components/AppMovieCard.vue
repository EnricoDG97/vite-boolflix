<script>
export default {
    props: {
        movie: Object,
    }
}
</script>

<template>
    <div>
        <div class="card">
            <div class="card-body">
                <p>{{movie.title}}</p>
                <p>{{movie.original_title}}</p>
                <p>{{movie.original_language}}</p>
                <p>{{movie.vote_average}}</p>
            </div>
        </div>
    </div>
</template>

<style lang="" scoped>
    
</style>