<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Tarjeta from '../components/Tarjeta.vue';

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

function validation() {
    alert("¡Usuario no registrado!");
}

</script>

<template>
    <main class="main__desk">
        <Tarjeta style="width: 22rem;" class="mx-auto">
            <form class="vstack">
                <label for="correo" class="p fw-bolder">
                    Usuario
                    <input type="email" id="correo" class="input__desk">
                    <br>
                </label>
                <label for="contraseña" class="p fw-bolder">
                    Contraseña
                    <input type="password" id="contraseña" class="input__desk">
                </label>
                <hr>
                <button type="submit" class="btn__desk btn__desk-okbtn btn-primary" @click="validation()">Ingresar</button>
                <RouterLink to="/perfil" class="link-underline link-underline-opacity-0">
                    <br>
                    <button type="submit" class="btn__desk btn__desk-okbtn btn-primary">Perfil actual</button>
                </RouterLink>
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

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');

} */


</style>
