<script setup>
import { RouterLink, RouterView } from 'vue-router';
import CardContador from '@/components/CardContador.vue';
import { useRouter, useRoute } from 'vue-router';
import { ref } from 'vue'
const loading = ref(true);
const platillo = ref([])

const getData = async () => {
    try {
        const res = await fetch('https://raw.githubusercontent.com/AlondraX23/restauranteApi/API/menu.json')
        platillo.value = await res.json()
        // console.log(platillo.value[0].flavor)
    } catch (error) {
        console.log(error)
    } finally {
        setTimeout(() => {
            loading.value = false
        }, 2000)
    }
}

getData()

const route = useRoute();
console.log(route.path);
// console.log(plato.flavor)

</script>

<template class="bg-blanco">
    <main class="main__desk" v-for="plato in platillo" :key="plato.id">
        <div v-if="plato.flavor == $route.params.nombre" class="row" id="info">
            <div class="col-lg-6 col-md-12 align-self-center">
                <img :src="plato.image" class=" rounded mx-auto d-block" alt="">
            </div>
            <div class="col-lg-6 col-md-12 vstack">
                <h1 class="h1-medium">{{ $route.params.nombre }}</h1>
                <div class="label__price my-2">
                    <button>$</button>
                    <p class="h3">{{ plato.price }}</p>
                </div>
                <p class="p pt-4">{{ plato.description }}</p>
            </div>
            <div class="m-2"></div>
            <CardContador>
                <div class="row">
                    <div class="col-lg-6 col-sm-12">
                        <div class="pb-2">
                            <div class="contador justify-content-center">
                                <button class="btn__contador"><svg width="16" height="3" viewBox="0 0 16 3" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M0 1.10345C0 0.494031 0.370523 0 0.827586 0H15.1724C15.6295 0 16 0.494031 16 1.10345C16 1.71287 15.6295 2.2069 15.1724 2.2069H0.827586C0.370523 2.2069 0 1.71287 0 1.10345Z"
                                            fill="#F8F8F8" />
                                    </svg></button>
                                <p class="h3">1</p>
                                <button class="btn__contador--reflection" dir=""><svg width="16" height="16"
                                        viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.93333 14.9333C6.93333 15.5224 7.4109 16 8 16C8.5891 16 9.06667 15.5224 9.06667 14.9333V9.06667H14.9333C15.5224 9.06667 16 8.5891 16 8C16 7.4109 15.5224 6.93333 14.9333 6.93333H9.06667V1.06667C9.06667 0.477562 8.5891 0 8 0C7.4109 0 6.93333 0.477562 6.93333 1.06667V6.93333H1.06667C0.477563 6.93333 0 7.4109 0 8C0 8.5891 0.477563 9.06667 1.06667 9.06667H6.93333V14.9333Z"
                                            fill="#F8F8F8" />
                                    </svg></button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-12 d-grid gap-2 d-flex justify-content-md-end">
                        <RouterLink to="/menu" class="link-underline link-underline-opacity-0">
                            <button class="btn__desk btn__desk--outline me-2">
                                <p class="p">Seguir comprando</p>
                            </button>
                        </RouterLink>
                        <RouterLink to="/compra" class="link-underline link-underline-opacity-0">
                            <div class="btn__pay">
                                <button class="btn__desk btn__desk--icon-ok">
                                    <svg class="icon" width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M4.4629 1.14286C4.4629 0.511666 4.97459 0 5.60576 0H10.1772C10.8084 0 11.32 0.511666 11.32 1.14286V3.42857H14.2268C14.5223 3.42857 14.7691 3.65393 14.7959 3.94826L15.7782 14.7537C15.839 15.423 15.3121 16 14.64 16H1.14294C0.470889 16 -0.0560715 15.423 0.00478926 14.7537L0.987072 3.94826C1.01386 3.65393 1.26061 3.42857 1.55616 3.42857H4.4629V1.14286ZM10.1772 3.42857V1.71429C10.1772 1.3987 9.92136 1.14286 9.60576 1.14286H6.17719C5.86158 1.14286 5.60576 1.3987 5.60576 1.71429V3.42857H10.1772Z"
                                            fill="#F8F8F8" />
                                    </svg>
                                    <p class="p">Pagar</p>
                                </button>
                                <p class="h3">{{ plato.price }}</p>
                            </div>
                        </RouterLink>
                    </div>
                </div>
            </CardContador>
        </div>
    </main>
    <RouterView />
</template>

<style scoped>
#info {
    padding-bottom: 48px;

    img {
        margin: 16px 16px 16px 16px;
        border-radius: 9px;
        object-fit:cover;
        width: 50%;
        transform: scale(2);
    }

    .label__price {
        display: flex;

        button {
            padding: 7px 14px;
            border-radius: 6px 0px 0px 6px;
            height: 40px;
            background-color: var(--neutro-2);
            color: var(--neutro-3);
            border: none;
            cursor: pointer;
            font-family: 'Inter', sans-serif;
            font-size: 22px;
            font-style: normal;
            font-weight: 600;
            text-decoration: none;
            display: flex;
            justify-content: center;
            align-items: center;

        }

        .h3 {
            width: auto;
            height: 40px;
            padding: 7px 14px;
            border-radius: 0px 6px 6px 0px;
            border: 3px solid var(--neutro-2);
            border-left: 0px;
            text-align: center;
            padding-top: 4px;
        }
    }
}
</style>