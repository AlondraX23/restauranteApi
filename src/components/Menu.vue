<script setup>
import { RouterLink, RouterView } from 'vue-router'
import menus from '../data/menu.json'

</script>

<template>
  <!-- Agregar {{  }} -->
  <div v-for="menu in menus" :key="menu.id">
  <div class="card__menu">
    <div class="row g-0">
      <div class="col-3">
        <img :src="menu.image" :alt="menu.description">
      </div>
      <div class="col-9">
        <div class="card-body">
          <h5 class="h3">{{menu.flavor}}</h5>
          <h5 class="h2">$<span>{{menu.price}}</span></h5>
          <p class="p">{{menu.description}}</p>
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
  border: 0;
  border-radius: 16px;
  background: var(--neutro-3, #F8F8F8);
  box-shadow: 1px 6px 16px 0px rgba(66, 84, 102, 0.30);

  img {
    width: 244px;
    height: 244px;
    margin: 16px 16px 16px 16px;
    border-radius: 9px;
  }

  .card-body {
    padding: 16px 32px 16px 32px;

    .h3 {
      margin: 0;
      padding: 40px 0px 8px 0px;
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
  }
}
</style>