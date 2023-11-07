<template>
    <div class="d-flex flex-column align-items-center mt-5">
        <h1 class="text-white">Welcome</h1>
        <RouterLink to="/products" class="btn btn-danger">See Models</RouterLink>
    </div>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router';
</script>