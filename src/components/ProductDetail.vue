<template>
    <div
        class="my-5 d-flex flex-column align-items-center justify-content-center overflow-hidden"
        v-if="car"
    >
    <h1 class="text-white mb-3">{{ car.model }}</h1>
        <div class="row">
            <div class="col-md-8 mx-auto">
                <div class="card">
                    <img
                        :src="car.image"
                        class="card-img-top"
                        :alt="car.model"
                    />
                    <div class="card-body">
                        <p class="mb-1">{{ car.cv }}cv</p>
                        <p class="mb-1">{{ car.doors }} doors</p>
                        <h4 class="fw-bold text-center">Starting at {{ car.price }}€</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="card mt-5 bg-danger mx-5">
        <div class="card-body">
            <p class="card-text text-white fw-bold text-center">Car not found</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const route = useRouter();

const carId = ref<string | string[] | null>(null);
const car = ref<any>(null);

const fetchData = async () => {
    try {
        const response = await fetch("/src/json/data.json"); // Cambia la ruta según la estructura de tu proyecto
        const data = await response.json();

        car.value = data.filter((car) => car.id == carId.value)[0];
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

onMounted(() => {
    carId.value = route.currentRoute.value.params.id;
    fetchData();
});
</script>
