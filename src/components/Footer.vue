<script setup>
import { RouterLink, RouterView } from 'vue-router'
import CarritoIcon from './icons/IconCarrito.vue'
import FacebookIcon from '../components/icons/IconFacebook.vue'
import InstagramIcon from '../components/icons/IconInstagram.vue'


</script>
<template>
    <footer class="bg-secundario " style="min-height: 64px;">
        <div class="container text-center p-5">
            <div class="row align-items-center">
                <div class="col-lg-4 col-sm-12">
                    <div class="d-block">
                        <RouterLink to="/" class="link-underline link-underline-opacity-0">
                            <img src="@/assets/logo.svg" style="height: 80px;">
                            <div class="p p--white">&copy; Todos los derechos reservados</div>
                        </RouterLink>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-12 pt-4">
                    <p class="p p--white fw-semibold">Encuntranos en: Empanadas #3
                        Col. Colonia, Ciudad
                        C.P. 00001</p>
                </div>
                <div class="col-lg-4 col-sm-12 pt-4 bg-secundario">
                    <div class="row">
                        <div class="col bg-secundario">
                            <p class="p p--white fw-semibold">123 456 7890</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col bg-secundario pt-1">
                            <FacebookIcon class="me-2" />
                            <InstagramIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style>
footer {
    height: 200px;
}
</style>