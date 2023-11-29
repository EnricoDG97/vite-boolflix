import { reactive } from "vue";

export const store = reactive({
    searchText: "",
    movies: [],
    series: [],
    apiUrlMovies: "https://api.themoviedb.org/3/search/movie",
    myApiKey: "c2c80f6907867948464c5ac3ece7e46b",
});