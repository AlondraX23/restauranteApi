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
        <br><br><br>
<!-- --------------------------------   Inicio del acordeón    --------------------------------------------------------->
        <div id="accordion">
          <!-- -------------------------------- Dirección y fecha de entrega  --------------------------------------------------------->
            <div class="card" id="dirección">
                <button class="btn" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <h3>Dirección y fecha de entrega</h3>
                <br>
                <div class="card__menu">
        <div class="container-fluid text-center p-0">
            <slot></slot>
            <div class="row row-cols-sm-7 g-2 g-lg-2">
                
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
                <br><br>
                <div>
                  <div class="col">
                      <div class="mb-2">
                          <input type="text" class="input__desk" id="exampleInputtext1" placeholder="Colonia"
                              aria-describedby="textHelp">
                      </div>
                  </div>
                  <div class="col">
                      <div class="mb-3 col">
                          <input type="number" class="input__desk" id="exampleInputtext5" placeholder="C.P."
                              aria-describedby="textHelp">
                      </div>
                  </div>
                  <div class="col-1">
                      <select aria-label="Default select example">
                          <option selected>Seleccionar</option>
                          <option value="1">Álvaro Obregón</option>
                          <option value="2">Miguel Hidalgo</option>
                          <option value="3">Benito Juárez</option>
                      </select>
                  </div> 
                </div>
                <div class="btn__date pt-2">
                <div class="col">
                    <input type="date" class="input__desk" id="exampleInputtext1" placeholder="Ejemplo"
                        aria-describedby="textHelp">
                </div>
                <div class="col-6">
                  <br><br>
                    <button class="btn__desk btn__desk-ok me-2">
                        <p class="p p--white">Añadir</p>
                    </button>
            </div>
            </div>
        </div>
        </div>
    </div>
    <RouterView />
                </button>
            </div>
            <br><br><br>
            <!-- --------------------------------  Pago   --------------------------------------------------------->
            <div class="card" id="pago">
                <button class="btn" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <h3>Pago</h3>
                <br>
                <div>
    <h6>Agregar método de pago</h6>
    <form @submit.prevent="agregarMetodoDePago">
      <div class="form-group">
        <br>
        <input type="text" class="input__desk" id="nombre" placeholder="Nombre del titular" v-model="nuevoMetodo.nombre" required>
      </div>
      <div class="form-group">
        <br>
        <label for="tipo">Tipo de tarjeta</label> <br>
        <select id="tipo" class="input__desk" v-model="nuevoMetodo.tipo" required>
          <option value="Visa">Visa</option>
          <option value="MasterCard">MasterCard</option>
          <option value="American Express">American Express</option>
          <!-- Agrega otros tipos de tarjetas si es necesario -->
        </select>
      </div>
      <div class="form-group">
        <br>
        <input type="text" placeholder="Número de tarjeta" id="numero" v-model="nuevoMetodo.numero" required>
      </div>
      <div class="form-group">
        <br>
        <label for="fecha">Fecha de vencimiento</label> <br>
        <input type="text" id="fecha" v-model="nuevoMetodo.fechaVencimiento" placeholder="MM/YY" required>
      </div>
      <br><br>
      <button type="submit" class="btn__desk btn__desk-ok me-2">Agregar tarjeta</button>
      <br><br>
      <button type="submit" class="btn__desk btn__desk-ok me-2">Pago en efectivo</button>
    </form>
    <ul>
      <li v-for="(metodo, index) in metodosDePago" :key="index">
        {{ metodo.nombre }} ({{ metodo.tipo }}): {{ metodo.numero }} - Vencimiento: {{ metodo.fechaVencimiento }}
      </li>
    </ul>
  </div>
                </button>
            </div>
            <br><br><br>
            <!-- --------------------------------  Estado de elaboración  --------------------------------------------------------->
            <div class="card" id="elaboración">
                <button class="btn" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <h3>Elaboración</h3>
                <div>
    <!-- Botón "Confirmar pedido" -->
    <button @click="confirmarPedido" type="submit" class="btn__desk btn__desk-ok me-2">Confirmar estado del pedido</button>

    <!-- Mensaje de confirmación -->
    <p v-if="pedidoConfirmado">¡Su pedido se está preparando!</p>
  </div>
                </button>
            </div>
            <br><br><br>
            <!-- --------------------------------  Envío  --------------------------------------------------------->
            <div class="card" id="envío">
                <button class="btn" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <h3>Envío</h3>
                <br>
                <div>
    <button @click="enviarPedido" type="submit" class="btn__desk btn__desk-ok me-2">Enviar a la dirección especificada</button>
    <p v-if="pedidoEnCamino">¡Su pedido está en camino!</p>
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


