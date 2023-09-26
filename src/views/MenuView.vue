<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Menu from '@/components/Menu.vue';

</script>

<template class="bg-blanco">
    <main class="main__desk">
        <div id="menu"> <!-- v-for -->
            <h1 class="h1"> Menú </h1>
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