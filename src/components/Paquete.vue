<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ViñetaIcon from './icons/IconViñeta.vue'
import paquetes from '../data/packages.json'


</script>

<template>
    <div class="container">
      <div v-for="paquete in paquetes" :key="paquete.id">
        <div class="card__package">
          <div class="card-content">
            <h5 class="h3">{{ paquete.title }}</h5>
            <h6 class="p text-body-secondary">{{ paquete.description }}</h6>
            <ul v-for="(item, index) in paquete.bulletPoints" :key="index">
              <li class="p">{{ item.point }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <RouterView />
  </template>

<style>
.container {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 35px;
}
.card__package {
    width: 400px;
    height: min-content;
    border: 0;
    border-radius: 16px;
    background: var(--neutro-3, #F8F8F8);
    box-shadow: 1px 6px 16px 0px rgba(66, 84, 102, 0.30);

    .card-content {
        padding: 48px;
    }

    span {
        display: inline-block;
        height: 80px;
        width: 80px;
        background-color: #D4AB7B;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 9px;
        color: var(--neutro-3);
        font-family: 'Inter', sans-serif;
        font-size: 25px;
        font-style: normal;
        font-weight: 600;
        text-decoration: none;
        margin-bottom: 18px;
    }

    .h3 {
        margin: 0;
        padding-bottom: 16px;
    }

    h6 {
        margin: 0;
        padding-bottom: 48px;
    }

    ul {
        list-style-image: url('src/assets/img/check point.svg');
        list-style-position: inside;
        padding: 0;
        padding-bottom: 8px;

        li {
            margin: 0;
            margin-bottom: 24px;

        }
    }

    a {
        color: var(--neutro-1, #16192C);
        font-family: 'Inter', sans-serif;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        text-decoration: underline;
        text-align: center;
    }
    .card_paquete {
        margin-bottom: 20px;
    }
}
</style>