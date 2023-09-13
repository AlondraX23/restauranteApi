<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Paquete from '@/components/Paquete.vue';
import Factura from '@/components/Factura.vue';
import CardProductos from '@/components/CardProductos.vue';

</script>

<template class="bg-blanco">
    <main class="main__desk">
        <div id="descripcion-general">
            <h2 class="h2">Arma tu paquete</h2>
            <p class="p">Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a,
                mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
                elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac
                scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
                bibendum lorem.Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
        </div>
        <div class="container">
            <div class="card_paquete">
                <Paquete />
            </div>
            <div class="card_paquete-enfrente">
                <Paquete />
            </div>
            <div class="card_paquete">
                <Paquete />
            </div>
        </div>
        <div id="descripcion-especifica">
            <h2 class="h2--medium">Paquete mediano</h2>
            <p class="p">Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a,
                mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
                elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac
                scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
                bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus..</p>
        </div>
        <div class="col-10 mx-auto pb-5">
            <h2 class="h3">Productos</h2>
            <CardProductos>
                <div><input type="text"></div>
            </CardProductos>
        </div>
        <div class="col-10 mx-auto pb-5">
            <h2 class="h3">Dirección y fecha</h2>
            
        </div>
        <div id="factura">
            <Factura></Factura>
        </div>


    </main>
</template>

<style>
#descripcion-general {
    margin-bottom: 90px;

    h2 {
        margin: 0;
        padding-bottom: 32px;
    }
}

.container {
    position: relative;
    display: flex;
    justify-content: space-between;

    .card_paquete {
        margin-bottom: 20px;
    }


    .card_paquete:hover {
        transform: scale(1.2);
        top: 20;

    }

    .card_paquete-enfrente {
        position: absolute;
        top: 0;
        left: 0;
        margin-left: 25%;
        /* Adjust the negative margin to your desired spacing */
        z-index: 1;
        transform: scale(1.1);
    }
}

#descripcion-especifica {
    padding-top: 100px;
    padding-bottom: 48px;

    h2 {
        margin: 0;
        padding-bottom: 32px;
        text-align: center;
    }
}
</style>
