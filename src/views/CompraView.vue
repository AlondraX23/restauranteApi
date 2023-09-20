<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Progreso from '@/components/Progreso.vue';

myCollapseEl.addEventListener('shown.bs.collapse', event => {
    document.getElementById("dirección").style.display = "block";

myCollapseEl.addEventListener('shown.bs.collapse', event => {
    document.getElementById("pago").style.display = "block";

myCollapseEl.addEventListener('shown.bs.collapse', event => {
    document.getElementById("elaboración").style.display = "block";

myCollapseEl.addEventListener('shown.bs.collapse', event => {
    document.getElementById("envío").style.display = "block";

</script>

<template>
    <main class="main__desk">
        <div class="pt-4">
            <Progreso />

        </div>

        <div id="dirección" style="display: none;">Componente de dirección</div>
        <div id="pago" style="display: none;">Componente de pago</div>
        <div id="elaboración" style="display: none">Componente de elaboración</div>
        <div id="envío" style="display: none;">Componente de envío</div>

    </main>


</template>

