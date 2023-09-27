<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Tarjeta from '../components/Tarjeta.vue';
import IconUsuarioCirculo from '../components/icons/IconUsuarioCirculo.vue';
import { ref, onMounted } from 'vue';

const loading = ref(true);
const users = ref([]);

const fetchDataFromApi = async () => {
    try {
        const res = await fetch('https://raw.githubusercontent.com/AlondraX23/restauranteApi/API/users.json')
        users.value = await res.json()
        console.log("ok")
    } catch (error) {
        console.log(error)
    } finally {
        setTimeout(() => {
            loading.value = false
        }, 2000)
    }
}

onMounted(() => {
    fetchDataFromApi();
});
console.log(users.address)
</script>

<template>
    <main class="main__desk" v-for="user in users" :key="user.id">
        <div class="right">
            <Tarjeta class="tarjeta--16 mb-4">
                <div class="hstack">
                    <RouterLink to="/carrito" class="link-underline link-underline-opacity-0">
                        <button class="button btn__desk btn__desk--outline me-2">
                            <p class="p ">Carrito</p>
                        </button>
                    </RouterLink>
                    <RouterLink to="/entregas" class="link-underline link-underline-opacity-0">
                        <button class="button btn__desk me-2">
                            <p class="p p--white">Entregas</p>
                        </button>
                    </RouterLink>
                    <RouterLink to="/perfil" class="link-underline link-underline-opacity-0">
                        <IconUsuarioCirculo class="color_icon" />
                    </RouterLink>
                </div>
            </Tarjeta>
        </div>
        <Tarjeta class="text-center">
            <h3 class="h2--medium">Su pedido está en camino</h3>
            <div>
                <p class="p fw-bold py-2">Tiempo estimado de llegada: <span class="text-success">30 minutos</span></p>
                <button type="button" class="btn__desk btn__desk-ok" data-bs-toggle="modal"
                    data-bs-target="#exampleModal">
                    <SobreIcon />
                    <p class="p p--white">Ver dirección de envío</p>
                </button>
            </div>
        </Tarjeta>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5 p" id="exampleModalLabel">¿Es correcta la siguiente dirección?
                        </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        {{ user.address }}
                    </div>
                    <div class="modal-footer">
                        <RouterLink to="/perfil">
                            <button type="button" class="btn__desk btn__desk--outline-no" data-bs-dismiss="modal">
                                <p class="p">No, editar</p>
                            </button>
                        </RouterLink>
                        <button type="button" class="btn__desk btn__desk-ok" data-bs-dismiss="modal">
                            <p class="p p--white">Sí, es correcto</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <RouterView />
</template>

<style scoped>
.tarjeta--16 {
    width: fit-content;
}

.right {
    display: flex;
    justify-content: flex-end;
}

.color_icon {
    fill: var(--neutro-2);
    background-color: transparent;
}

.button {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        margin: 0;
    }
}
</style>