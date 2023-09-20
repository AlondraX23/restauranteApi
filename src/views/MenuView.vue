<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Menu from '@/components/Menu.vue';


</script>

<template class="bg-blanco">
    <main class="main__desk">
        <div id="tipo1"> <!-- v-for -->
            <h1 class="h1"> Tipo 1 </h1>
            <Menu></Menu>
        </div>
        <div id="tipo1"> <!-- v-for -->
            <h1 class="h1"> Tipo 2 </h1>
            <Menu></Menu>
        </div>
        <div id="tipo2"> <!-- v-for -->
            <h1 class="h1"> Tipo 3 </h1>
            <Menu></Menu>
        </div>
    </main>
    <RouterView />
</template>

<style>
div {
    h1 {
        margin: 0px;
        padding-bottom: 32px;
    }
}

#tipo1 {
    padding-bottom: 90px;
}

#tipo2 {
    padding-bottom: 90px;
}

#tipo3 {
    padding-bottom: 48px;
}

</style>