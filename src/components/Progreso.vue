<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MapaIcon from './icons/IconMapa.vue'
import BilletesIcon from './icons/IconBilletes.vue'
import OllaIcon from './icons/IconOlla.vue'
import CarritoEnvioIcon from './icons/IconCarritoEnvio.vue'



</script>

<template>
    <div class="position-relative m-4" id="barra">
        <div class="progress" role="progressbar" aria-label="Progress" aria-valuenow="50" aria-valuemin="0"
            aria-valuemax="100" style="height: 8px;">
            <div class="progress-bar bg-primario" style="width: 18%"></div>
        </div>
        <a class="nav-link" href="#ubicacion">
            <button type="button" class="position-absolute top-0 start-1 translate-middle punto"
                style="width: 80px; height:80px;">
                <MapaIcon class="color_icon" />
            </button>
        </a>      
        <a class="nav-link" href="#pago">
            <button type="button" class="position-absolute top-0 start-2 translate-middle" style="width: 80px; height:80px;">
                <BilletesIcon class="color_icon" />
            </button>
        </a>
        <a class="nav-link" href="#preparacion">
            <button type="button" class="position-absolute top-0 start-3 translate-middle" style="width: 80px; height:80px;">
                <OllaIcon class="color_icon" />
            </button>
        </a>
        <a class="nav-link" href="#envio">
            <button type="button" class="position-absolute top-0 start-4 translate-middle" style="width: 80px; height:80px;">
                <CarritoEnvioIcon class="color_icon" />
            </button>
        </a>
    </div>
</template>

<style>
button {
    background-color: var(--neutro-3);
    border: 3px solid var(--primario);
    border-radius: 50%;

    .color_icon {
        fill: var(--neutro-2);
        background-color: transparent;
    }
}

button:hover {
    background-color: var(--primario);

    .color_icon {
        fill: var(--neutro-3);
        background-color: transparent;
    }
}



.start-1 {
    width: 100%;
    left: 0%;
}

.start-2 {
    width: 100%;
    left: 33%;
}

.start-3 {
    width: 100%;
    left: 66%;
}

.start-4 {
    width: 100%;
    left: 100%;
}

</style>