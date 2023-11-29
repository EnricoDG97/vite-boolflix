<script>
import { store } from "../store.js"
export default {
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand">boolflix</a>
    <div class="d-flex searchbar">
      <input v-model="store.searchText" class="form-control me-2" placeholder="Search Movies or TV Series">
      <button @click="$emit('performSearch')" class="btn btn-outline-success">Search</button>
    </div>
  </div>
</nav>
</template>

<style lang="scss" scoped>
    
</style>