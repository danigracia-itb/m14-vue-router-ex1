<script setup lang="ts">
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
    <div>
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid d-flex align-items-center">
                <h1>Porsche Models</h1>
                <ul class="list-unstyled d-flex justify-content-start align-items-center gap-2 mb-0">
                    <li class="nav-item">
                        <RouterLink to="/" class="nav-link">Home</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/products" class="nav-link">Products</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/about" class="nav-link">About</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
                    </li>
                </ul>
            </div>
        </nav>
        <RouterView />
    </div>
</template>
