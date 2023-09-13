<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Paquete from '@/components/Paquete.vue';
</script>

<template class="bg-blanco">
    <main class="main__desk">
        <h2 class="h2">Arma tu paquete</h2>
        <p class="p">Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis
            tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed
            risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent
            per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante
            pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi
            convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
        <div class="grupo-paquetes">
            <div class="1"> <Paquete /> </div>
            <div class="2"> <Paquete /> </div>
            <div class="3"> <Paquete /> </div>
        </div>
    </main>
</template>

