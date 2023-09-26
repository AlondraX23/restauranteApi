<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Progreso from '@/components/Progreso.vue';
import CardDireccion from '../components/CardDireccion.vue';
//myCollapseEl.addEventListener('shown.bs.collapse'), event => {
//    document.getElementById("dirección").style.display = "block";
//}
//myCollapseEl.addEventListener('shown.bs.collapse'), event => {
//    document.getElementById("pago").style.display = "block";
//}
//myCollapseEl.addEventListener('shown.bs.collapse'), event => {
//    document.getElementById("elaboración").style.display = "block";
//}
//myCollapseEl.addEventListener('shown.bs.collapse'), event => {
//    document.getElementById("envío").style.display = "block";
//}
//</script>

<template>
    <main class="main__desk">
        <div class="pt-4">
            <Progreso />

        </div>
        <div id="accordion">
            <div class="card" id="dirección">
                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Componente de dirección
                <br>
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
                        <input type="text" class="input__desk" id="exampleInputtext2" placeholder="Calle"
                            aria-describedby="textHelp">
                    </div>
                </div>
                <div class="col">
                    <div class="mb-3">
                        <input type="number" class="input__desk" id="exampleInputtext3" placeholder="No. Int"
                            aria-describedby="textHelp">
                    </div>
                </div>
                <div class="col">
                    <div class="mb-3">
                        <input type="number" class="input__desk" id="exampleInputtext4" placeholder="No. Ext"
                            aria-describedby="textHelp">
                    </div>
                </div>
                <div class="col">
                    <div class="mb-3">
                        <input type="number" class="input__desk" id="exampleInputtext5" placeholder="C.P"
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
                </button>
            </div>
            <div class="card" id="pago">
                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Componente de pago
                <br>
                <div>
    <h2>Agregar Métodos de Pago</h2>
    <form @submit.prevent="agregarMetodoDePago">
      <div class="form-group">
        <label for="nombre">Nombre del Titular:</label>
        <input type="text" id="nombre" v-model="nuevoMetodo.nombre" required>
      </div>
      <div class="form-group">
        <label for="tipo">Tipo de Tarjeta:</label>
        <select id="tipo" v-model="nuevoMetodo.tipo" required>
          <option value="Visa">Visa</option>
          <option value="MasterCard">MasterCard</option>
          <option value="American Express">American Express</option>
          <!-- Agrega otros tipos de tarjetas si es necesario -->
        </select>
      </div>
      <div class="form-group">
        <label for="numero">Número de Tarjeta:</label>
        <input type="text" id="numero" v-model="nuevoMetodo.numero" required>
      </div>
      <div class="form-group">
        <label for="fecha">Fecha de Vencimiento:</label>
        <input type="text" id="fecha" v-model="nuevoMetodo.fechaVencimiento" placeholder="MM/YY" required>
      </div>
      <button type="submit">Agregar Método de Pago</button>
    </form>
    <ul>
      <li v-for="(metodo, index) in metodosDePago" :key="index">
        {{ metodo.nombre }} ({{ metodo.tipo }}): {{ metodo.numero }} - Vencimiento: {{ metodo.fechaVencimiento }}
      </li>
    </ul>
  </div>
                </button>
            </div>
            <div class="card" id="elaboración">
                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Componente de elaboración
                <div>
    <!-- Botón "Confirmar pedido" -->
    <button @click="confirmarPedido">Confirmar Pedido</button>

    <!-- Mensaje de confirmación -->
    <p v-if="pedidoConfirmado">¡Su pedido se está preparando!</p>
  </div>
                </button>
            </div>
            <div class="card" id="envío">
                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Componente de envío
                <br>
                <div>
    <button @click="enviarPedido">Enviar a la dirección especificada</button>
    <p v-if="pedidoEnCamino">Su pedido está en camino</p>
  </div>
                </button>
            </div>
        </div>
    </main>


</template>
<script>
export default {
  data() {
    return {
      pedidoEnCamino: false,
      nuevoMetodo: {
        nombre: '',
        tipo: 'Visa',
        numero: '',
        fechaVencimiento: '',
      },
      metodosDePago: [], // Almacenar métodos de pago agregados
      pedidoConfirmado: false, // Estado para controlar la visibilidad del mensaje
    };
  },
  methods: {
    enviarPedido() {
      // Simula el proceso de enviar el pedido
      // Puedes agregar lógica adicional aquí, como una solicitud al servidor

      // Establece el estado del pedido en "en camino"
      this.pedidoEnCamino = true;
    },
    agregarMetodoDePago() {
      // Validar y agregar el nuevo método de pago a la lista
      if (
        this.nuevoMetodo.nombre &&
        this.nuevoMetodo.tipo &&
        this.nuevoMetodo.numero &&
        this.nuevoMetodo.fechaVencimiento
      ) {
        this.metodosDePago.push({ ...this.nuevoMetodo });
        this.nuevoMetodo = {
          nombre: '',
          tipo: 'Visa',
          numero: '',
          fechaVencimiento: '',
        };
      }
    },
    confirmarPedido() {
      // Lógica para confirmar el pedido
      // Puedes agregar más lógica aquí, como enviar una solicitud al servidor

      // Una vez que se ha confirmado el pedido, muestra el mensaje
      this.pedidoConfirmado = true;

      // Puedes agregar un temporizador para cambiar el mensaje después de cierto tiempo si lo deseas
      setTimeout(() => {
        this.pedidoConfirmado = false;
        // Cambia el estado del pedido después de un tiempo
        this.pedidoEnCamino = true; // Opcional: Cambia el estado del pedido a "en camino"
      }, 5000); // Cambiar el mensaje después de 5 segundos (ajusta el tiempo según tus necesidades)
    },
  },
};
</script>


