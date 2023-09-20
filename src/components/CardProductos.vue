<script setup>
import AgregarIcon from './icons/IconAgregar.vue'

</script>
<template>
    <div class="card">
        <div class="d-flex">
            <div class="p-2 flex-grow-1">
                <select aria-label="Default select example" style="width: 100%;">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div class="p-2">
                <input type="email" class="input__desk" id="exampleInputEmail1" placeholder="Ingrese cantidad"
                    aria-describedby="emailHelp">
            </div>
            <div class="p-2">
                <button class="btn__desk btn__desk--outline-no pe-2">
                    <p class="p">Eliminar</p>
                </button>
            </div>
            <div class="p-2">
                <button class="btn__desk btn__desk-ok pe-2">
                    <p class="p p--white">Añadir</p>
                </button>
            </div>
        </div>
        <!-- hacer botón de icon outline -->
        <button class="btn__desk btn__desk btn__desk--icon-outline " style="width: 40px; padding: 7px; margin-left: 6px;">
            <AgregarIcon/>
        </button>

    </div>
</template>

<style>
.card {
    width: 100%;
    height: min-content;
    border: 0;
    padding: 32px;
    border-radius: 16px;
    background: var(--neutro-3, #F8F8F8);
    box-shadow: 1px 6px 16px 0px rgba(66, 84, 102, 0.30);
}

.card--child {
    width: 100%;
    height: min-content;
    border: 0;
    padding: 32px;
    border-radius: 6px 6px 16px 16px;
    background: var(--neutro-3, #F8F8F8);
    box-shadow: 1px 6px 16px 0px rgba(66, 84, 102, 0.30);
}

select {
    border: 2px solid #425466;
    border-radius: 6px;
    height: 40px;
    background-color: var(--neutro-3);

}
</style>