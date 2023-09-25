<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { ref, onMounted } from 'vue';

const caroussel = ref([]);

const fetchDataFromApi = () => {
  fetch('https://raw.githubusercontent.com/AlondraX23/restauranteApi/API/carousel.json')
    .then(response => response.json())
    .then(data => {
      caroussel.value = data;
    })
    .catch(error => {
      console.error('Error al cargar el archivo JSON', error);
    });
};

onMounted(() => {
  fetchDataFromApi();
});
</script>

<template>
  <div id="carouselExampleIndicators" class="carousel slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" class="active" data-bs-slide-to="0"
        aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
        aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
        aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" v-if="caroussel.length > 0" v-for="element in caroussel" :key="element.id">
        <img :src="element.image" class="d-block w-100" :alt="element.figcaption">
      </div>
      <div class="carousel-item" v-else>
        <p>Cargando datos...</p>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <RouterView />
</template>

<style>
.carousel {

  .carousel-indicators {
    position: absolute;
    bottom: -72px;

    button {
      width: 12px;
      height: 12px;
      margin: 8px;
      border-radius: 50%;
      border: solid 2px var(--secundario);
      background-color: var(--neutro-3);
    }

    button.active {
      background-color: var(--secundario);
    }
  }

.color_icon {
  fill: var(--neutro-3);
  background-color: transparent;
}
  .carousel-inner img {
    border-radius: 18px;
    width: 100%;
    max-height: 480px;
    object-fit: cover;
  }
}
</style>