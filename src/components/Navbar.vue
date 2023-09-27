<script setup>
import { RouterLink, RouterView } from 'vue-router'
import CarritoIcon from './icons/IconCarrito.vue'
// import logo from 'src/assets/logo.svg'


</script>

<template>
  <nav class="navbar navbar-expand-lg bg-primario" style="height: 64px; vertical-align: middle;">
    <div class="container-fluid mx-2 bg-primario">
      <RouterLink to="/" class="nb-brand bg-primario">
        <img src="@/assets/logo.svg " alt="" class="bg-primario">
        Empanadas
        <logo></logo>
      </RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon bg-primario"></span>
      </button>
      <div class="collapse navbar-collapse bg-primario justify-content-end" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item bg-primario">
            <RouterLink to="/menu" class="h1__nav px-2 bg-primario">Menú</RouterLink>
          </li>
          <li class="nav-item bg-primario">
            <RouterLink to="/eventos" class="h1__nav px-2 bg-primario">Eventos</RouterLink>
          </li>
          <li class="nav-item bg-primario" id="icon_carrito">
            <RouterLink to="/carrito" class="ps-2 bg-primario">
              <CarritoIcon class="bg-primario" />
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <RouterView />
</template>

<style>
@media (max-width: 991.98px) {
  main {
    margin: 100px 32px 0px 32px;
  }

  #icon_carrito {
    padding: 8px 0px 10px 0px;
  }
}

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