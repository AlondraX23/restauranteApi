<script setup>
import { RouterLink, RouterView } from 'vue-router'
import CarritoIcon from './icons/IconCarrito.vue'


</script>

<template>
    <nav class="navbar bg-primario" style="height: 64px; vertical-align: middle;">
        <div class="container-fluid mx-2">
            <RouterLink to="/" class="nb-brand">
                <img src="src/assets/logo.svg" alt="">
                Empanadas
            </RouterLink>
            <div class="d-flex align-middle">
                <RouterLink to="/menu" class="h1__nav px-2">Menú</RouterLink>
                <RouterLink to="/eventos" class="h1__nav px-2">Eventos</RouterLink>
                <RouterLink to="/carrito" class="ps-2">
                    <CarritoIcon />
                </RouterLink>
            </div>
        </div>
    </nav>
    <RouterView />
</template>

<style>
.nb-brand {
  color: var(--neutro-3);
  font-family: 'Inter', sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  text-decoration: none;
  line-height: normal;
}

.h1__nav {
  color: var(--neutro-3, #F8F8F8);
  font-family: 'Rubik', sans-serif;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  text-decoration: none;
  line-height: normal;
}

.bg-primario {
  background-color: var(--primario);
}
</style>