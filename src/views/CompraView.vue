<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Progreso from '@/components/Progreso.vue';
import CardDireccion from '../components/CardDireccion.vue';
import Tarjeta from '../components/Tarjeta.vue';
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
//
</script>

<template>
  <main class="main__desk">
    <div class="p-2 pt-4 bg-blanco sticky-top">
      <Progreso />
    </div>
    <div style="height: fit-content;">
      <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
        <!-- Ubicación -->
        <div id="ubicacion" style="padding-top: 100px;">
          <h3 class="h2--medium">Dirección y fecha de entrega</h3>
          <br>
          <div class="card__menu">
            <div class="container-fluid text-center p-0">
              <slot></slot>
              <div class="row row-cols-sm-7">
                <div class="col-3">
                  <div class="">
                    <input type="text" class="input__desk" id="exampleInputtext2" placeholder="Calle"
                      aria-describedby="textHelp">
                  </div>
                </div>
                <div class="col">
                  <div class="mb-4">
                    <input type="number" class="input__desk" id="exampleInputtext3" placeholder="No. Int"
                      aria-describedby="textHelp">
                  </div>
                </div>
                <div class="col">
                  <div class="mb-4">
                    <input type="number" class="input__desk" id="exampleInputtext4" placeholder="No. Ext"
                      aria-describedby="textHelp">
                  </div>
                </div>
                <div>
                  <div class="col">
                    <div class="pb-3">
                      <input type="text" class="input__desk" id="exampleInputtext1" placeholder="Colonia"
                        aria-describedby="textHelp">
                    </div>
                  </div>
                  <div class="col">
                    <div class="pb-3 col">
                      <input type="number" class="input__desk" id="exampleInputtext5" placeholder="C.P."
                        aria-describedby="textHelp">
                    </div>
                  </div>
                  <div class="d-flex flex-wrap justify-content-end">
                    <div class=" pb-3">
                      <select aria-label="Default select example">
                        <option selected>Seleccione la Alcaldía</option>
                        <option value="1">Álvaro Obregón</option>
                        <option value="2">Miguel Hidalgo</option>
                        <option value="3">Benito Juárez</option>
                      </select>
                    </div>
                    <div class="pb-3 ps-3">
                      <div class="btn__date">
                        <button class="btn__desk btn__desk--icon-ok">
                          <!-- <CalendarioIcon /> -->
                          <p class="p">Fecha</p>
                        </button>
                        <div class="mb-3">
                          <input type="date" class="input__desk" id="exampleInputtext1"
                            placeholder="Ejemplo o instrucciones" aria-describedby="textHelp">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="d-flex flex-row-reverse">
                  <button class="btn__desk btn__desk-ok me-2">
                    <p class="p p--white">Añadir</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="height: 300px;"></div>
        <!-- Pago -->
        <div id="pago" style="padding-top: 100px;">
          <h3 class="h2--medium">Pago</h3> <br>
          <Tarjeta>
            <h6>Agregar método de pago</h6>
            <form @submit.prevent="agregarMetodoDePago">
              <div class="form-group">
                <br>
                <input type="text" class="input__desk" id="nombre" placeholder="Nombre del titular"
                  v-model="nuevoMetodo.nombre" required>
              </div>
              <hr>
              <div class="form-group">
                <div class="form-group">
                  <br>
                  <input type="text" placeholder="Número de tarjeta" class="input__desk" id="numero"
                    v-model="nuevoMetodo.numero" required>
                </div>
                <div class="row my-3">
                  <div class="col-lg-3 col-sm-12">
                    <br>
                    <select id="tipo" class="input__desk" v-model="nuevoMetodo.tipo" required>
                      <option selected>Tipo de tarjeta</option>
                      <option value="Visa">Visa</option>
                      <option value="MasterCard">MasterCard</option>
                      <option value="American Express">American Express</option>
                      <!-- Agrega otros tipos de tarjetas si es necesario -->
                    </select>
                  </div>
                  <div class="col-lg-3 col-sm-12">
                    <div class="form-group">
                      <br>
                      <label for="fecha">Fecha de vencimiento</label> <br>
                      <input type="text" id="fecha" class="input__desk" v-model="nuevoMetodo.fechaVencimiento"
                        placeholder="MM/YY" required>
                    </div>
                  </div>
                  <div class="col-lg-3 col-sm-12 d-flex justify-content-end">
                    <div class="form-group">
                      <label for="fecha">Número de seguridad</label> <br>
                      <input type="text" id="fecha" class="input__desk" v-model="nuevoMetodo.numeroSeguridad"
                        placeholder="   _ _ _ " required>
                    </div>
                  </div>
                  <div class="col-lg-3 col-sm-12 d-flex justify-content-end">
                    <button type="submit" class="btn__desk btn__desk-ok mt-4">Agregar tarjeta</button>
                  </div>
                </div>
              </div>
              <div class="d-grid pt-4">
                <button type="submit" class="btn__desk text-center">Pago en efectivo</button>
              </div>
            </form>
            <ul>
              <li v-for="(metodo, index) in metodosDePago" :key="index">
                {{ metodo.nombre }} ({{ metodo.tipo }}): {{ metodo.numero }} - Vencimiento: {{ metodo.fechaVencimiento
                }}
              </li>
            </ul>
          </Tarjeta>
        </div>
        <div style="height: 300px;"></div>
        <!-- --------------------------------  Estado de elaboración  --------------------------------------------------------->
        <div id="preparacion" style="padding-top: 100px;">
          <Tarjeta class="text-center">
            <h3 class="h2--medium">Estado de elaboración</h3>
            <div>
              <!-- Botón "Confirmar pedido" -->
              <button @click="confirmarPedido" type="submit" class="btn__desk btn__desk-ok me-2">Confirmar estado</button>

              <!-- Mensaje de confirmación -->
              <div v-if="pedidoConfirmado">
                <p class="p fw-bold pt-3">Tiempo estimado de <span class="text-success">30 minutos</span></p>
              </div>
            </div>
          </Tarjeta>
        </div>
        <div style="height: 300px;"></div>
        <!-- --------------------------------  Envío  --------------------------------------------------------->
        <div id="envio" style="padding-top: 100px;">
          <Tarjeta class="text-center">
            <h3 class="h2--medium">Envío</h3>
              <div>
            <p class="p fw-bold pt-1">Tiempo estimado de llegada: <span class="text-success">30 minutos</span></p>
            </div>
            <div>
              <button @click="enviarPedido" type="submit" class="btn__desk btn__desk-ok mt-4">Enviar a la dirección
                especificada</button>
            </div>
          </Tarjeta>
        </div>
        <div style="height: 300px;"></div>
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
        numeroSeguridad: '',
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
        this.nuevoMetodo.fechaVencimiento &&
        this.nuevoMetodo.numeroSeguridad
      ) {
        this.metodosDePago.push({ ...this.nuevoMetodo });
        this.nuevoMetodo = {
          nombre: '',
          tipo: 'Visa',
          numero: '',
          fechaVencimiento: '',
          numeroSeguridad: ''
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


