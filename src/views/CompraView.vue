<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Progreso from '@/components/Progreso.vue';

//myCollapseEl.addEventListener('shown.bs.collapse'), event => {
//    document.getElementById("dirección").style.display = "block";
//}
//myCollapseEl.addEventListener('shown.bs.collapse'), event => {
//    document.getElementById("pago").style.display = "block";
//}
//myCollapseEl.addEventListener('shown.bs.collapse'), event => {
//    document.getElementById("elaboración").style.display = "block";
//}
//myCollapseEl.addEventListener('shown.bs.collapse'), event => {
//    document.getElementById("envío").style.display = "block";
//}
//</script>

<template>
    <main class="main__desk">
        <div class="pt-4">
            <Progreso />

        </div>
        <div id="accordion">
            <div class="card" id="dirección">
                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Componente de dirección
                </button>
            </div>
            <div class="card" id="pago">
                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Componente de pago
                </button>
            </div>
            <div class="card" id="elaboración">
                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Componente de elaboración
                </button>
            </div>
            <div class="card" id="envío">
                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Componente de envío
                </button>
            </div>
        </div>
    </main>


</template>

