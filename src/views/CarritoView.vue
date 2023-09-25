<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Carrito from '@/components/Carrito.vue';
import BilletesIcon from '@/components/icons/IconBilletes.vue';


</script>

<template class="bg-blanco">
    <main class="main__desk">
        <Carrito />
        <div class="d-flex gap-3 justify-content-center mx-auto pt-4">
            <RouterLink to="/menu" class="link-underline link-underline-opacity-0">
                <button class="btn__desk btn__desk--outline">
                    <p class="p">Volver al Menú</p>
                </button>
            </RouterLink>
            <RouterLink to="/compra" class="link-underline link-underline-opacity-0">
                <button class="btn__desk btn__desk--icon">
                    <BilletesIcon class="color_icon" />
                    <p class="p">Pagar</p>
                </button>
            </RouterLink>
        </div>
    </main>
</template>

<style scoped>
.color_icon {
    fill: var(--neutro-3);
}

button {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        margin: 0;
    }
}

.btn__desk--icon {
    background-color: var(--Ok);
    border: var(--Ok);
}

.btn__desk--icon:hover {
    background-color: #4fad80;
    border: #4fad80;
}