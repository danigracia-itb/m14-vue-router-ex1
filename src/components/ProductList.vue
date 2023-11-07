<template>
    <h2 class="text-center text-white mt-5 mb-0">
        List of 2023 Porsche Models
    </h2>
    <div class="container bg-white rounded py-3 mt-3">
        <section class="row mt-3 gap-3 d-flex justify-content-center">
            <RouterLink
                v-for="car in cars"
                :to="`/products/${car.id}`"
                :key="car.id"
                class="col-md-5 card car-card"
            >
                <div class="d-block mx-auto">
                    <img
                        :src="car.image"
                        alt="Car Image"
                        style="max-width: 400px"
                    />
                    <div>
                        <h5 class="mt-0 fw-bold">
                            {{ car.model }}
                            <span class="fw-normal">{{ car.year }}</span>
                        </h5>

                        <p class="mb-1">{{ car.cv }}cv</p>
                        <p class="mb-1">{{ car.doors }} doors</p>
                        <p>Starting at {{ car.price }}€</p>
                    </div>
                </div>
            </RouterLink>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";

const cars = ref<any[]>([]);

const fetchData = async () => {
    try {
        const response = await fetch("/src/json/data.json"); // Cambia la ruta según la estructura de tu proyecto
        const data = await response.json();
        cars.value = data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

onMounted(() => {
    fetchData();
});
</script>

<style scoped>
.car-card {
    text-decoration: none !important;
    transition: all ease-in-out 0.4s;
}
.car-card:hover {
    background-color: rgb(202, 202, 202);
    transition: all ease-in-out 0.4s;
    cursor: pointer;
    transform: scale(1.02);
}
</style>
