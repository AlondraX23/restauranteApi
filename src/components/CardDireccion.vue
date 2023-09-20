<script setup>
import { RouterLink, RouterView } from 'vue-router'
import CalendarioIcon from '@/components/icons/IconCalendario.vue'


</script>

<template>
    <!-- Agregar {{  }} -->
    <div class="card__menu">
        <div class="container-fluid text-center p-0">
            <slot></slot>
            <div class="row row-cols-sm-7 g-2 g-lg-2">
                <div class="col-3">
                    <div class="mb-2">
                        <input type="text" class="input__desk" id="exampleInputtext1" placeholder="Colonia"
                            aria-describedby="textHelp">
                    </div>
                </div>
                <div class="col-3">
                    <div class="mb-2">
                        <input type="text" class="input__desk" id="exampleInputtext1" placeholder="Calle"
                            aria-describedby="textHelp">
                    </div>
                </div>
                <div class="col">
                    <div class="mb-3">
                        <input type="number" class="input__desk" id="exampleInputtext1" placeholder="No. Int"
                            aria-describedby="textHelp">
                    </div>
                </div>
                <div class="col">
                    <div class="mb-3">
                        <input type="number" class="input__desk" id="exampleInputtext1" placeholder="No. Ext"
                            aria-describedby="textHelp">
                    </div>
                </div>
                <div class="col">
                    <div class="mb-3">
                        <input type="number" class="input__desk" id="exampleInputtext1" placeholder="C.P"
                            aria-describedby="textHelp">
                    </div>
                </div>
                <div class="col">
                    <select aria-label="Default select example">
                        <option selected>Seleccionar</option>
                        <option value="1">Álvaro Obregón</option>
                        <option value="2">Miguel Hidalgo</option>
                        <option value="3">Benito Juárez</option>
                    </select>
                </div>
                <div class="col">
                    <button class="btn__desk btn__desk-ok me-2">
                        <p class="p p--white">Añadir</p>
                    </button>
                </div>

            </div>
        </div>
        <div>
            <div class="btn__date pt-2">
                <button class="btn__desk btn__desk--icon-ok">
                    <!-- <CalendarioIcon /> -->
                    <p class="p">Seleccional fecha</p>
                </button>
                <div class="mb-3">
                    <input type="date" class="input__desk" id="exampleInputtext1" placeholder="Ejemplo o instrucciones"
                        aria-describedby="textHelp">
                </div>
            </div>
        </div>
    </div>
    <RouterView />
</template>

<style>
.card__menu {
    width: 100%;
    height: min-content;
    border: 0;
    padding: 32px;
    border-radius: 16px;
    background: var(--neutro-3, #F8F8F8);
    box-shadow: 1px 6px 16px 0px rgba(66, 84, 102, 0.30);
}

.btn__date {
    display: flex;

    button {
        border-radius: 6px 0px 0px 6px;
        background-color: var(--neutro-2);
        border-color: var(--neutro-2);
    }

    button:hover {
        background-color: var(--neutro-2);
        border-color: var(--neutro-2);
    }

    input {
        width: auto;
        height: 40px;
        padding: 7px 14px;
        border-radius: 0px 6px 6px 0px;
        border: 3px solid var(--neutro-2);
        border-bottom: 5px solid var(--neutro-2);
        border-left: 0px;
        text-align: center;
        padding-top: 4px;
    }

    input:hover {
        border: 3px solid var(--neutro-1);
        border-bottom: 5px solid var(--neutro-1)
    }

}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type=number] {
    -moz-appearance: textfield;
}
</style>