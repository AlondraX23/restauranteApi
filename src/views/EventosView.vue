<script setup>
import { RouterLink, RouterView } from 'vue-router';
// import { Ref, triggerRef } from 'vue';
import Paquete from '@/components/Paquete.vue';
import Factura from '@/components/Factura.vue';
import CardProductos from '@/components/CardProductos.vue';
import CardDireccion from '@/components/CardDireccion.vue';
import SobreIcon from '@/components/icons/IconSobre.vue';

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
            <CardDireccion />
        </div>
        <div id="factura">
            <Factura></Factura>
        </div>
        <div id="final-btn" class="d-flex gap-3 justify-content-center mx-auto pt-4">
            <!-- Button trigger modal -->
            <button type="button" class="btn__desk btn__desk--icon" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <SobreIcon />
                <p class="p">Enviar</p>
            </button>
            <RouterLink to="/compra" class="link-underline link-underline-opacity-0">
                <button class="btn__desk btn__desk-ok me-2">
                    <p class="p p--white">Hacer pedido</p>
                </button>

            </RouterLink>
        </div>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5 h3" id="exampleModalLabel">¿Es correcto el siguiente correo electrónico?
                        </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                    </div>
                    <div class="modal-footer">
                        <RouterLink to="/perfil">
                            <button type="button" class="btn__desk btn__desk--outline-no" data-bs-dismiss="modal">
                                <p class="p">No, editar</p>
                            </button>
                        </RouterLink>
                        <button type="button" class="btn__desk btn__desk-ok">
                            <p class="p p--white">Sí, es correcto</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>


    </main>
</template>

<style>
.modal {
    .modal-content {
        border: 0;
        padding: 32px;
    }

    .modal-dialog {
        background-color: var(--neutro-3);
        border-radius: 16px;
    }

    .modal-header {
        padding: 0px 0px 16px 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .modal-footer {
        padding: 16px 0px 0px 0px;
    }
}

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

.color_icon {
    fill: var(--neutro-3);
}

.final-btn {
    button {
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
            margin: 0;
        }
    }

}
</style>