<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue';

const menus = ref([]);

const fetchDataFromApi = () => {
  fetch('https://raw.githubusercontent.com/AlondraX23/restauranteApi/API/menu.json')
    .then(response => response.json())
    .then(data => {
      menus.value = data;
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
  <div v-for="menu in menus" :key="menu.id">
    <div class="card__menu">
      <div class="row g-0">
        <div class="col-sm-3">
          <img id="imagenes" :src="menu.image" :alt="menu.description" class="img-fluid">
        </div>
        <div class="col-sm-9">
          <div class="card-body">
            <h5 class="h3">{{ menu.flavor }}</h5>
            <h5 class="h2">$<span>{{ menu.price }}</span></h5>
            <div class="d-flex align-items-center h-100">
              <p class="p text-truncate">{{ menu.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <RouterView />
</template>

<style>
.card__menu {
  width: 100%;
  height: min-content;
  margin-top: 30px;
  border-radius: 16px;
  background: var(--neutro-3, #F8F8F8);
  box-shadow: 1px 6px 16px 0px rgba(66, 84, 102, 0.30);
  align-items: center;
}

.card-body {
  padding: 16px 32px 16px 32px;


}

.h3 {
  padding: 0px 0px 8px 0px;
}

.h2 {
  margin: 0;
  padding-bottom: 16px;
  color: var(--neutro-2);
}

p {
  padding: 0;
  margin: 0px;
}

#imagenes {
  width: 244px;
  height: 400px;
  margin: 16px 16px 16px 16px;
  border-radius: 9px;
  object-fit: cover;
}
/* .card-img {
  width: 244px;
  height: 400px;
  margin: 16px 16px 16px 16px;
  border-radius: 9px;
  object-fit: cover;
} */
</style>