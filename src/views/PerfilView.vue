<script setup>
import Tarjeta from '../components/Tarjeta.vue';
import UserIcon from '../components/icons/IconUsuario.vue'
import SobreIcon from '@/components/icons/IconSobre.vue'
import MapaIcon from '@/components/icons/IconMapa.vue'
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

</script>

<template>
    <main class="main__desk" v-for="user in users" :key="user.id">
        <Tarjeta>
            <div class="row">
                <div class="col-8 text-start p-0">
                    <ul>
                        <li class="h3 py-2">
                            <UserIcon class="my-2 me-2" /> <span>{{ user.name }}</span>
                        </li>
                        <li class="h3 py-2">
                            <SobreIcon class="icon-black my-2 pe-1" /> <span>{{ user.email }}</span>
                        </li>
                        <li class="h3 py-2">
                            <MapaIcon class="icon-black my-2 me-2" /> <span>{{ user.address }}</span>
                        </li>
                    </ul>
                </div>
                <div class="col-4">
                    <ul class="text-end ">
                        <li class="py-2">
                            <button class="btn__desk--edit">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M22.4142 1.41421C21.6332 0.633165 20.3668 0.633166 19.5858 1.41421L18.6422 2.3578L22.6422 6.3578L23.5858 5.41421C24.3668 4.63316 24.3668 3.36684 23.5858 2.58579L22.4142 1.41421ZM17.8563 3.14374L21.8563 7.14374L6.13769 22.8624L2.13769 18.8624L17.8563 3.14374ZM5.35175 23.6483L1.35175 19.6483L0.708334 23.7198C0.655334 24.0552 0.944875 24.3448 1.28025 24.2918L5.35175 23.6483Z"
                                        fill="#F8F8F8" />
                                </svg>
                            </button>
                        </li>
                        <li class="py-2">
                            <button class="btn__desk--edit">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M22.4142 1.41421C21.6332 0.633165 20.3668 0.633166 19.5858 1.41421L18.6422 2.3578L22.6422 6.3578L23.5858 5.41421C24.3668 4.63316 24.3668 3.36684 23.5858 2.58579L22.4142 1.41421ZM17.8563 3.14374L21.8563 7.14374L6.13769 22.8624L2.13769 18.8624L17.8563 3.14374ZM5.35175 23.6483L1.35175 19.6483L0.708334 23.7198C0.655334 24.0552 0.944875 24.3448 1.28025 24.2918L5.35175 23.6483Z"
                                        fill="#F8F8F8" />
                                </svg>
                            </button>
                        </li>
                        <li class="py-2">
                            <button class="btn__desk--edit">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M22.4142 1.41421C21.6332 0.633165 20.3668 0.633166 19.5858 1.41421L18.6422 2.3578L22.6422 6.3578L23.5858 5.41421C24.3668 4.63316 24.3668 3.36684 23.5858 2.58579L22.4142 1.41421ZM17.8563 3.14374L21.8563 7.14374L6.13769 22.8624L2.13769 18.8624L17.8563 3.14374ZM5.35175 23.6483L1.35175 19.6483L0.708334 23.7198C0.655334 24.0552 0.944875 24.3448 1.28025 24.2918L5.35175 23.6483Z"
                                        fill="#F8F8F8" />
                                </svg>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </Tarjeta>
        <div class="d-grid d-flex justify-content-md-end mt-4">
            <button class="btn__desk btn__desk--icon-outline-no me-2" type="button" data-bs-toggle="modal"
                data-bs-target="#exampleModal">
                <svg class="icon" width="16" height="17" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7.85714 16.5C11.7021 16.5 13.1216 15.8936 13.4757 15.7009C13.5391 15.6664 13.5785 15.6033 13.5913 15.5322L15.5391 4.67994C15.5555 4.58851 15.4827 4.50583 15.39 4.51168C14.5402 4.56536 10.8681 4.78571 7.85714 4.78571C4.84616 4.78571 1.17412 4.56536 0.324296 4.51168C0.23159 4.50583 0.158743 4.58851 0.175153 4.67994L2.123 15.5322C2.13576 15.6033 2.17516 15.6664 2.23862 15.7009C2.59268 15.8936 4.01219 16.5 7.85714 16.5Z" />
                    <path
                        d="M7.28571 0.5H8.42857C8.74416 0.5 9 0.755837 9 1.07143V1.37217C10.9351 1.42222 12.6574 1.58793 13.8076 1.7256C14.7129 1.83396 15.4453 2.48727 15.6958 3.36399C15.7787 3.65403 15.5728 3.94593 15.2716 3.96299C13.9301 4.03896 10.543 4.21429 7.85714 4.21429C5.17133 4.21429 1.78419 4.03896 0.442682 3.96299C0.141511 3.94593 -0.0644185 3.65403 0.018452 3.36399C0.268943 2.48727 1.00136 1.83396 1.9067 1.7256C3.0569 1.58793 4.77917 1.41471 6.71429 1.36466V1.07143C6.71429 0.755837 6.97012 0.5 7.28571 0.5Z" />
                </svg>
                <p class="p">Eliminar cuenta</p>
            </button>
        </div>


        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5 h3" id="exampleModalLabel">¿Está seguro de eliminar su cuenta?</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-footer">
                        <RouterLink to="/inicio">
                            <button type="button" class="btn__desk btn__desk--outline-no" data-bs-dismiss="modal">
                                <p class="p">Sí</p>
                            </button>
                        </RouterLink>
                        <button type="button" class="btn__desk btn__desk-ok" data-bs-dismiss="modal">
                            <p class="p p--white">No, regresar al</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </main>
</template>
<style>
.icon-black {
    fill: var(--neutro-2);
}

ul {
    list-style-type: none;

}
</style>