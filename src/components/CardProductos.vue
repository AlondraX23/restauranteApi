<template>
    <div>
      <form @submit.prevent="agregarPaquete">
        <div v-for="(paquete, index) in paquetes" :key="index" class="paquete">
          <label>Paquete:</label>
          <select v-model="paquete.nombre">
            <option value="Paquete 1">Paquete 1</option>
            <option value="Paquete 2">Paquete 2</option>
            <option value="Paquete 3">Paquete 3</option>
          </select>
          <label>Cantidad:</label>
          <input type="number" v-model="paquete.cantidad" min="1" />
          <button @click="eliminarPaquete(index)">Eliminar</button>
        </div>
        <button type="button" @click="agregarNuevoPaquete">Agregar Paquete</button>
        <button type="submit">Enviar</button>
      </form>
    </div>
  </template>
  
  <script>
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
  