<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Carousel from '@/components/Carousel.vue';
import Review from '@/components/Review.vue';
import { ref, onMounted } from 'vue';
const loading = ref(true);

const reviews = ref([]);

const fetchDataFromApi = () => {
    fetch('./src/data/review.json')
        .then(response => response.json())
        .then(data => {
            reviews.value = data;
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON', error);
        });
};

const sections = ref([]);
const fetchDataFromApi2 = async () => {
    try {
        const res = await fetch('https://raw.githubusercontent.com/AlondraX23/restauranteApi/API/homeSections.json')
        sections.value = await res.json()
        console.log(sections.value[0].title)
        console.log("jjj")
    } catch (error) {
        console.log(error)
    } finally {
        setTimeout(() => {
            loading.value = false
        }, 100)
    }
}

onMounted(() => {
    fetchDataFromApi();
    fetchDataFromApi2();
});
</script>

<template class="bg-blanco">
    <main class="main__desk">
        <div id="section0">
            <Carousel />
        </div>
        <!-- <div v-if="loading"> -->
            <div class="row" id="section1">
                <div class="col-lg-7 col-sm-12">
                    <h1 class="h1"> Sobre nosotros</h1>
                    <p class="p">En el corazón de México, nació la idea de compartir la auténtica delicia de las empanadas con
                        el mundo. En [Nombre de la Empresa], nuestra historia comienza con una familia apasionada por la cocina
                        mexicana y un deseo profundo de preservar las tradiciones culinarias que han perdurado por generaciones.
                    </p>
                </div>
                <div class="col-lg-5 col-sm-12">
    
                    <figure>
                        <img src="https://editorialtelevisa.brightspotcdn.com/wp-content/uploads/2021/02/mini-empanadas-argentinas.jpg"
                            alt="Imagen de empanadas">
                        <figcaption class="p pt-2">Imagen de empanadas</figcaption>
                    </figure>
                </div>
            </div>
            <div id="section2">
                <h1 class="h1">Reseñas</h1>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div v-for="review in reviews" :key="review.id">
                        <div class="col">
                            <Review :review="review" />
                        </div>
                    </div>
                </div>
    
            </div>
            <div class="row" id="section3">
                <div class="col-10 mx-auto">
                    <h1 class="h1">Ubicación</h1> <!-- {{  }} -->
                    <p class="p pb-2">Nos encontramos ubicados en Calle Principal, Villa Serenidad, Ciudad Esperanza, Estado del
                        Sol, México.
                    </p>
                    <figure>
                        <img src="https://motor.elpais.com/wp-content/uploads/2022/01/google-maps-22-1046x616.jpg"
                            alt="Ubicación">
                        <figcaption class="p pt-2">A un lado del centro comercial
                        </figcaption>
                    </figure>
                </div>
    
            </div>
        <!-- </div> -->

    </main>
</template>

<style>
main img {
    border-radius: 6px;
    width: 100%;
}

#section0 {
    padding-bottom: 96px;

}

#section1 {
    padding-bottom: 48px;

    .h1 {
        margin: 0;
        margin-bottom: 32px;
    }
}

#section2 {
    padding-bottom: 96px;

    h1 {
        margin: 0;
        margin-bottom: 32px;
    }
}

#section3 {
    padding-bottom: 48px;

    h1 {
        margin: 0;
        margin-bottom: 32px;
    }
}
</style>