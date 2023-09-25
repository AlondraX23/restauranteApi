<script setup>
import { RouterLink, RouterView } from 'vue-router'
import CarritoIcon from './icons/IconCarrito.vue'

// function toggleNavbar() {
//     const navbarCollapse = document.querySelector('.navbar-collapse');
//     navbarCollapse.classList.toggle('show');
//   }

//   function closeNavbar() {
//     const navbarCollapse = document.querySelector('.navbar-collapse');
//     navbarCollapse.classList.remove('show');
//   }
</script>

<template>
  <!-- <nav class="navbar bg-primario" style="height: 64px; vertical-align: middle;">
    <div class="container-fluid mx-2 bg-primario">
      <RouterLink to="/" class="nb-brand bg-primario">
        <img src="src/assets/logo.svg" alt="" class="bg-primario">
        Empanadas
      </RouterLink>
      <div class="d-flex align-middle">
        <RouterLink to="/menu" class="h1__nav px-2 bg-primario">Menú</RouterLink>
        <RouterLink to="/eventos" class="h1__nav px-2 bg-primario">Eventos</RouterLink>
        <RouterLink to="/carrito" class="ps-2 bg-primario">
          <CarritoIcon class="bg-primario" />
        </RouterLink>
      </div>
    </div>
  </nav> -->
  <!-- <nav class="navbar navbar-expand-lg bg-primario" style="height: 64px; vertical-align: middle;">
    <div class="container-fluid mx-2 bg-primario">
      <RouterLink to="/" class="nb-brand bg-primario">
        <img src="src/assets/logo.svg" alt="" class="bg-primario">
        Empanadas
      </RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onclick="toggleNavbar()">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <RouterLink to="/menu" class="h1__nav px-2 bg-primario" onclick="closeNavbar()">Menú</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/eventos" class="h1__nav px-2 bg-primario" onclick="closeNavbar()">Eventos</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/carrito" class="ps-2 bg-primario" onclick="closeNavbar()">
              <CarritoIcon />
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav> -->

  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
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