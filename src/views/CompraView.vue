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
        <div class="accordion" id="accordionPayment">
            <div class="accordion-item" id="dirección">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-tog-gle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Dirección
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionPayment">
                    <div class="accordion-body">
                        Componente de dirección
                    </div>
                </div>
            </div>
            <div class="accordion-item" id="pago">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Pago
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionPayment">
                    <div class="accordion-body">
                        Componente de pago
                    </div>
                </div>
            </div>
            <div class="accordion-item" id="elaboración">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Elaboración
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionPayment">
                    <div class="accordion-body">
                        Componente de elaboración
                    </div>
                </div>
            </div>
            <div class="accordion-item" id="envío">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Envío
                    </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionPayment">
                    <div class="accordion-body">
                        Componente de envío
                    </div>
                </div>
            </div>
        </div>
    </main>


</template>

