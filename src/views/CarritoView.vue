<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Carrito from '@/components/Carrito.vue';
import BilletesIcon from '@/components/icons/IconBilletes.vue';
import Tarjeta from '../components/Tarjeta.vue';
import IconUsuarioCirculo from '../components/icons/IconUsuarioCirculo.vue';

</script>

<template class="bg-blanco">
    <main class="main__desk">
        <div class="right">
            <Tarjeta class="tarjeta--16 mb-4">
                <div class="hstack">
                    <RouterLink to="/carrito" class="link-underline link-underline-opacity-0">
                        <button class="btn__desk me-2">
                            <p class="p p--white">Carrito</p>
                        </button>
                    </RouterLink>
                    <RouterLink to="/entregas" class="link-underline link-underline-opacity-0">
                        <button class="btn__desk btn__desk--outline me-2">
                            <p class="p">Entregas</p>
                        </button>
                    </RouterLink>
                    <RouterLink to="/perfil" class="link-underline link-underline-opacity-0">
                        <IconUsuarioCirculo class="icon-black"/>
                    </RouterLink>
                </div>
            </Tarjeta>
        </div>
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
.tarjeta--16 {
    width: fit-content;
}

.right {
    display: flex;
    justify-content: flex-end;
}

.icon-black {
    fill: var(--neutro-2);
}

.color_icon {
    fill: var(--neutro-3);
    background-color: transparent;
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
</style>