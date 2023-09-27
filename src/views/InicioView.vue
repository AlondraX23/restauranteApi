<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Tarjeta from '../components/Tarjeta.vue';
</script>

<template>
    <main class="main__desk">
        <Tarjeta style="width: 22rem;" class="mx-auto">
            <form class="vstack">
                <label for="correo" class="h3">
                    Usuario
                    <input type="email" id="correo" class="input__desk">
                    <br>
                </label>
                <label for="contraseña" class="h3">
                    Contraseña
                    <input type="password" id="contraseña" class="input__desk">
                </label>
                <hr>
                <button class="btn__desk btn__desk-okbtn btn-primary">Ingresar</button>
            </form>
        </Tarjeta>
    </main>
    <RouterView />
</template>
<style>
/* @media (min-width: 1024px) {
  .main__desk {
    margin-left: 144px;
    margin-right: 144px;
    margin-top: 100px;
    background-color: var(--neutro-3);
  }
} */


</style>
