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
    <Tarjeta class="tarjeta--16 mb-4">
        <form>
            <label>
                <input type="text" id="nombre" class="input__desk" placeholder="Nombre de usuario"> {{ user.name }}
            </label>
            <label>
                <input type="email" id="correo" class="input__desk" placeholder="Correo electrónico"> {{ user.email }}
            </label>
            <label>
                <input type="password" id="contraseña" class="input__desk" placeholder="Ingresar contraseña"> {{ user.password }}
            </label>
            <button type="submit" class="btn__desk btn__desk-ok me-2" onclick="validation()">Ingresar</button>
        </form>
    </Tarjeta>
</template>

<style>
.tarjeta {
    width: 100%;
    height: min-content;
    border: 0;
    border-radius: 16px;
    background: var(--neutro-3, #F8F8F8);
    box-shadow: 1px 6px 16px 0px rgba(66, 84, 102, 0.30);
    padding: 32px;
}
.tarjeta--16 {
    padding: 16px;
}
/* Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
/* ---- */
</style>