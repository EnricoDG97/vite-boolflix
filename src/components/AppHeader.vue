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
  <nav class="navbar bg-dark rounded">
    <div class="container-fluid d-flex justify-content-between bg-dark">
      <a class="navbar-brand bg-dark">boolflix</a>
      <div class="d-flex searchbar">
        <input v-model="store.searchText" class="form-control me-2" placeholder="Search Movies or TV Series">
        <button @click="$emit('performSearch')" class="btn btn-outline-success">Search</button>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  margin-top: 20px;
}

.navbar-brand {
  color: red;
  font-size: larger;
  text-transform: uppercase;
}
</style>