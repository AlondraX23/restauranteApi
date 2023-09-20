<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import CarritoIcon from './components/icons/IconCarrito.vue'


</script>

<template class="bg-blanco">
  <Navbar />

  <main class="main__desk">
    <!-- <button class="btn__desk me-2">
      <p class="p p--white">ejemplo</p>
    </button>

    <button class="btn__desk btn__desk-ok me-2">
      <p class="p p--white">ejemplo</p>
    </button>

    <button class="btn__desk btn__desk-no me-2">
      <p class="p p--white">ejemplo</p>
    </button> -->

    <!-- Outline -->
    <!-- <button class="btn__desk btn__desk--outline me-2">
      <p class="p">ejemplo</p>
    </button>

    <button class="btn__desk btn__desk--outline-ok me-2">
      <p class="p">ejemplo</p>
    </button>

    <button class="btn__desk btn__desk--outline-no me-2">
      <p class="p">ejemplo</p>
    </button> -->

    <!-- Botones con icon -->
    <!-- <button class="btn__desk--edit me-2">
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M22.4142 1.41421C21.6332 0.633165 20.3668 0.633166 19.5858 1.41421L18.6422 2.3578L22.6422 6.3578L23.5858 5.41421C24.3668 4.63316 24.3668 3.36684 23.5858 2.58579L22.4142 1.41421ZM17.8563 3.14374L21.8563 7.14374L6.13769 22.8624L2.13769 18.8624L17.8563 3.14374ZM5.35175 23.6483L1.35175 19.6483L0.708334 23.7198C0.655334 24.0552 0.944875 24.3448 1.28025 24.2918L5.35175 23.6483Z"
          fill="#F8F8F8" />
      </svg>
    </button>

    <button class="btn__desk btn__desk--icon-outline me-2">
      <svg class="icon" width="16" height="17" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.85714 16.5C11.7021 16.5 13.1216 15.8936 13.4757 15.7009C13.5391 15.6664 13.5785 15.6033 13.5913 15.5322L15.5391 4.67994C15.5555 4.58851 15.4827 4.50583 15.39 4.51168C14.5402 4.56536 10.8681 4.78571 7.85714 4.78571C4.84616 4.78571 1.17412 4.56536 0.324296 4.51168C0.23159 4.50583 0.158743 4.58851 0.175153 4.67994L2.123 15.5322C2.13576 15.6033 2.17516 15.6664 2.23862 15.7009C2.59268 15.8936 4.01219 16.5 7.85714 16.5Z" />
        <path
          d="M7.28571 0.5H8.42857C8.74416 0.5 9 0.755837 9 1.07143V1.37217C10.9351 1.42222 12.6574 1.58793 13.8076 1.7256C14.7129 1.83396 15.4453 2.48727 15.6958 3.36399C15.7787 3.65403 15.5728 3.94593 15.2716 3.96299C13.9301 4.03896 10.543 4.21429 7.85714 4.21429C5.17133 4.21429 1.78419 4.03896 0.442682 3.96299C0.141511 3.94593 -0.0644185 3.65403 0.018452 3.36399C0.268943 2.48727 1.00136 1.83396 1.9067 1.7256C3.0569 1.58793 4.77917 1.41471 6.71429 1.36466V1.07143C6.71429 0.755837 6.97012 0.5 7.28571 0.5Z" />
      </svg>
      <p class="p">ejemplo</p>
    </button>

    <button class="btn__desk btn__desk--icon-outline-no me-2">
      <svg class="icon" width="16" height="17" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.85714 16.5C11.7021 16.5 13.1216 15.8936 13.4757 15.7009C13.5391 15.6664 13.5785 15.6033 13.5913 15.5322L15.5391 4.67994C15.5555 4.58851 15.4827 4.50583 15.39 4.51168C14.5402 4.56536 10.8681 4.78571 7.85714 4.78571C4.84616 4.78571 1.17412 4.56536 0.324296 4.51168C0.23159 4.50583 0.158743 4.58851 0.175153 4.67994L2.123 15.5322C2.13576 15.6033 2.17516 15.6664 2.23862 15.7009C2.59268 15.8936 4.01219 16.5 7.85714 16.5Z" />
        <path
          d="M7.28571 0.5H8.42857C8.74416 0.5 9 0.755837 9 1.07143V1.37217C10.9351 1.42222 12.6574 1.58793 13.8076 1.7256C14.7129 1.83396 15.4453 2.48727 15.6958 3.36399C15.7787 3.65403 15.5728 3.94593 15.2716 3.96299C13.9301 4.03896 10.543 4.21429 7.85714 4.21429C5.17133 4.21429 1.78419 4.03896 0.442682 3.96299C0.141511 3.94593 -0.0644185 3.65403 0.018452 3.36399C0.268943 2.48727 1.00136 1.83396 1.9067 1.7256C3.0569 1.58793 4.77917 1.41471 6.71429 1.36466V1.07143C6.71429 0.755837 6.97012 0.5 7.28571 0.5Z" />
      </svg>
      <p class="p">ejemplo</p>
    </button>

    <button class="btn__desk btn__desk--icon me-2">
      <CarritoIcon style="width: 20px; height: 20x;"/>
      <p class="p">ejemplo</p>
    </button>

    <button class="btn__desk btn__desk--icon-ok me-2">
      <svg class="icon" width="16" height="17" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.85714 16.5C11.7021 16.5 13.1216 15.8936 13.4757 15.7009C13.5391 15.6664 13.5785 15.6033 13.5913 15.5322L15.5391 4.67994C15.5555 4.58851 15.4827 4.50583 15.39 4.51168C14.5402 4.56536 10.8681 4.78571 7.85714 4.78571C4.84616 4.78571 1.17412 4.56536 0.324296 4.51168C0.23159 4.50583 0.158743 4.58851 0.175153 4.67994L2.123 15.5322C2.13576 15.6033 2.17516 15.6664 2.23862 15.7009C2.59268 15.8936 4.01219 16.5 7.85714 16.5Z" />
        <path
          d="M7.28571 0.5H8.42857C8.74416 0.5 9 0.755837 9 1.07143V1.37217C10.9351 1.42222 12.6574 1.58793 13.8076 1.7256C14.7129 1.83396 15.4453 2.48727 15.6958 3.36399C15.7787 3.65403 15.5728 3.94593 15.2716 3.96299C13.9301 4.03896 10.543 4.21429 7.85714 4.21429C5.17133 4.21429 1.78419 4.03896 0.442682 3.96299C0.141511 3.94593 -0.0644185 3.65403 0.018452 3.36399C0.268943 2.48727 1.00136 1.83396 1.9067 1.7256C3.0569 1.58793 4.77917 1.41471 6.71429 1.36466V1.07143C6.71429 0.755837 6.97012 0.5 7.28571 0.5Z" />
      </svg>
      <p class="p">ejemplo</p>
    </button>

    <div class="btn__pay m-2">
      <button class="btn__desk btn__desk--icon-ok">
        <svg class="icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M4.4629 1.14286C4.4629 0.511666 4.97459 0 5.60576 0H10.1772C10.8084 0 11.32 0.511666 11.32 1.14286V3.42857H14.2268C14.5223 3.42857 14.7691 3.65393 14.7959 3.94826L15.7782 14.7537C15.839 15.423 15.3121 16 14.64 16H1.14294C0.470889 16 -0.0560715 15.423 0.00478926 14.7537L0.987072 3.94826C1.01386 3.65393 1.26061 3.42857 1.55616 3.42857H4.4629V1.14286ZM10.1772 3.42857V1.71429C10.1772 1.3987 9.92136 1.14286 9.60576 1.14286H6.17719C5.86158 1.14286 5.60576 1.3987 5.60576 1.71429V3.42857H10.1772Z"
            fill="#F8F8F8" />
        </svg>
        <p class="p">Pagar</p>
      </button>
      <p class="h3">8</p>
    </div> -->

    <!-- input -->
    <!-- <div class="mb-3">
      <input type="email" class="input__desk" id="exampleInputEmail1" placeholder="Ejemplo o instrucciones"
        aria-describedby="emailHelp">
    </div> -->

    <!-- Select -->
    <!-- <select aria-label="Default select example">
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select> -->







  </main>

  <!-- <RouterView /> -->
</template>

<style>
:root {
  --primario: #E96345;
  --secundario: #D4AB7B;
  --Ok: #84AC99;
  --No: #E31A1A;
  --neutro-1: #16192C;
  --neutro-2: #425466;
  --neutro-3: #F8F8F8;
}

/* Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
/* ---- */


.bg-blanco {
  background-color: var(--neutro-3);
}

@media (min-width: 1024px) {
  .main__desk {
    margin-left: 144px;
    margin-right: 144px;
    margin-top: 48px;
    background-color: var(--neutro-3);
  }
}

/* Texto */

.h1 {
  color: var(--neutro-1, #16192C);
  font-family: 'Inter', sans-serif;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  text-decoration: none;
}

.h1--medium {
  font-size: 26px;
  font-weight: 500;
}

.h2 {
  color: var(--neutro-1, #16192C);
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  text-decoration: none;
}

.h2--neutro2 {
  color: var(--neutro-2);
}

.h2--medium {
  font-weight: 500;
}

.h3 {
  color: var(--neutro-1, #16192C);
  font-family: 'Inter', sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  text-decoration: none;
}

.p {
  color: var(--neutro-2);
  font-family: 'Rubik', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.32px;
  text-decoration: none;
}

.p--white {
  color: var(--neutro-3);
}

/* Input */
.input__desk {
  border: 1px solid #425466;
  border-bottom: 3px solid #425466;
  border-radius: 6px;
  height: 40px;
  width: 100%;


}

/* Select */
select {
  border: 2px solid #425466;
  border-radius: 6px;
  height: 40px;
  background-color: var(--neutro-3);
  width: auto;

}

/* Botones */
.btn__desk {
  padding: 7px 14px;
  border-radius: 6px;
  height: 40px;
  width: auto;
  background-color: var(--secundario);
  color: var(--neutro-3);
  border: none;
  cursor: pointer;
  vertical-align: middle;
}

.btn__desk:hover {
  background-color: #d39b5a;
  border: #d39b5a;
}

.btn__desk-ok {
  background-color: var(--Ok);
}

.btn__desk-ok:hover {
  background-color: #4fad80;
}

.btn__desk-no {
  background-color: #dd3636;
}

.btn__desk-no:hover {
  background-color: var(--No);
}

.btn__desk--outline {
  border: 2px solid var(--secundario, #D4AB7B);
  background: transparent;
}

.btn__desk--outline:hover {
  border: 2px solid var(--secundario, #D4AB7B);
  background: var(--secundario);

  .p {
    color: var(--neutro-3);
  }
}

.btn__desk--outline-ok {
  border: 2px solid var(--Ok);
  background: transparent;
}

.btn__desk--outline-ok:hover {
  border: 2px solid var(--Ok);
  background: var(--Ok);

  .p {
    color: var(--neutro-3);
  }
}

.btn__desk--outline-no {
  border: 2px solid #dd3636;
  background: transparent;
}

.btn__desk--outline-no:hover {
  border: 2px solid #dd3636;
  background: #dd3636;

  .p {
    color: var(--neutro-3);
  }
}

.btn__desk--icon {
  border: 2px solid var(--secundario, #D4AB7B);
  background: var(--secundario);
  display: inline-flex;
  gap: 9px;

  .icon {
    margin-top: 2px;
    fill: var(--neutro-3);
  }

  .p {
    color: var(--neutro-3);
  }
}

.btn__desk--icon:hover {
  border: 2px solid #d39b5a;
  background-color: #d39b5a;
}

.btn__desk--icon-ok {
  border: 2px solid var(--Ok);
  background: var(--Ok);
  display: inline-flex;
  gap: 9px;

  .icon {
    margin-top: 2px;
    fill: var(--neutro-3);
  }

  .p {
    color: var(--neutro-3);
  }
}

.btn__desk--icon-ok:hover {
  border: 2px solid #4fad80;
  background-color: #4fad80;
}

.btn__desk--icon-outline {
  border: 2px solid var(--secundario, #D4AB7B);
  background: transparent;
  display: inline-flex;
  gap: 9px;

  .icon {
    margin-top: 2px;
    fill: var(--neutro-2);
  }
}

.btn__desk--icon-outline:hover {
  border: 2px solid var(--secundario, #D4AB7B);
  background: var(--secundario);
  display: inline-flex;
  gap: 9px;

  .icon {
    margin-top: 2px;
    fill: var(--neutro-3);
  }

  .p {
    color: var(--neutro-3);
  }
}

.btn__desk--icon-outline-no {
  border: 2px solid #dd3636;
  background: transparent;
  display: inline-flex;
  gap: 9px;

  .icon {
    margin-top: 2px;
    fill: var(--neutro-2);
  }
}

.btn__desk--icon-outline-no:hover {
  border: 2px solid #dd3636;
  background: #dd3636;
  display: inline-flex;
  gap: 9px;

  .icon {
    margin-top: 2px;
    fill: var(--neutro-3);
  }

  .p {
    color: var(--neutro-3);
  }
}

.btn__desk--edit {
  padding: 7px;
  border-radius: 6px;
  height: 40px;
  background-color: var(--secundario);
  color: var(--neutro-3);
  border: none;
  cursor: pointer;
  vertical-align: middle;
}

.btn__desk--edit:hover {
  background-color: #d39b5a;
  border: #d39b5a;
}

/* add padding in h3 */
.btn__pay {
  display: flex;

  button {
    border-radius: 6px 0px 0px 6px;
  }

  .icon {
    margin-top: 2px;
    fill: var(--neutro-3);
  }

  .h3 {
    width: auto;
    height: 40px;
    padding: 7px 14px;
    border-radius: 0px 6px 6px 0px;
    border: 3px solid var(--Ok);
    border-left: 0px;
    text-align: center;
    padding-top: 4px;
  }

}

.btn__pay:hover {
  button {
    border: 2px solid #4fad80;
    background-color: #4fad80;
  }

  .h3 {
    border: 3px solid #4fad80;
    border-left: 0px;
  }

}
</style>
