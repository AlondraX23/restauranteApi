<template>
  <div>
    <Tarjeta>
      <form @submit.prevent="agregarPaquete">
        <div v-for="(paquete, index) in paquetes" :key="index" class="paquete">
          <div class="row">
            <div class="col-lg-6 col-sm-12">
              <select v-model="paquete.nombre" style="width: 100%;">
                <option value="" disabled selected>Seleccionar alimento...</option>
                <option value="Paquete 1" class="p">Paquete 1</option>
                <option value="Paquete 2" class="p">Paquete 2</option>
                <option value="Paquete 3" class="p">Paquete 3</option>
              </select>
            </div>
            <div class="col-lg-4 col-sm-12">
              <div class="hstack">
                <label for="cantidad" class="p me-1">Ingrese cantidad</label>
                <input class="input__desk" type="number" id="cantidad" v-model="paquete.cantidad" min="1"
                  style="width: 100%;" />
              </div>
            </div>
            <div class="col-lg-2 col-sm-12">
              <button class="btn__desk btn__desk--outline-no" @click="eliminarPaquete(index)">
                <p class="p">Eliminar</p>
              </button>
            </div>
          </div>
        </div>
        <button type="button" @click="agregarNuevoPaquete" class="btn__desk btn__desk--outline me-2">
          <p class="p">Agregar Paquete</p>
        </button>
        <button type="submit" class="btn__desk btn__desk-ok">
          <p class="p p--white">Enviar</p>
        </button>
      </form>
    </Tarjeta>
  </div>
</template>
  
<script>
import Tarjeta from './Tarjeta.vue';
export default {
  data() {
    return {
      paquetes: [{ nombre: '', cantidad: 1 }],
    };
  },
  methods: {
    agregarPaquete() {
      // Lógica para procesar los paquetes (enviarlos al servidor, etc.)
      console.log('Paquetes:', this.paquetes);
    },
    agregarNuevoPaquete() {
      this.paquetes.push({ nombre: '', cantidad: 1 });
    },
    eliminarPaquete(index) {
      this.paquetes.splice(index, 1);
    },
  },
  components: { Tarjeta }
};
</script>
  
<style>
.paquete {
  margin-bottom: 20px;
}

.card {
  width: 100%;
  height: min-content;
  border: 0;
  padding: 32px;
  border-radius: 16px;
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
  