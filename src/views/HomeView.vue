<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Carousel from '@/components/Carousel.vue';
import Review from '@/components/Review.vue';
import { ref, onMounted } from 'vue';

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

onMounted(() => {
  fetchDataFromApi();
});
</script>

<template class="bg-blanco">
    <main class="main__desk">
        <div id="section0">
            <Carousel />
        </div>
        <div class="row" id="section1">
            <div class="col-7">
                <h1 class="h1">Sobre Nosotros </h1> <!-- {{  }} -->
                <p class="p">Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut
                    vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat
                    ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit
                    ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed
                    lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum ullamcorper quis
                    venenatis nisi.</p>
                <p class="p">Nam pulvinar blandit velit, id condimentum diam faucibus at. Aliquam lacus nisi, sollicitudin
                    at nisi
                    nec, fermentum congue felis. Quisque mauris dolor, fringilla sed tincidunt ac, finibus non odio. Sed
                    vitae mauris nec ante pretium finibus. </p>
            </div>
            <div class="col-5">
                
                <figure>
                    <img src="https://editorialtelevisa.brightspotcdn.com/wp-content/uploads/2021/02/mini-empanadas-argentinas.jpg" alt="Imagen de empanadas">
                    <figcaption class="p">En el corazón de México, nació la idea de compartir la auténtica delicia de las empanadas con el mundo. En [Nombre de la Empresa], nuestra historia comienza con una familia apasionada por la cocina mexicana y un deseo profundo de preservar las tradiciones culinarias que han perdurado por generaciones.</figcaption>
                </figure>
            </div>
        </div>
        <div id="section2">
            <h1 class="h1">Reseñas</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div v-for="review in reviews" :key="review.id">
                <div class="col">
                    <Review :review="review"/>
                </div>
            </div>
            </div>

        </div>
        <div class="row" id="section3">
            <div class="col-10 mx-auto">
                <h1 class="h1">Ubicación</h1> <!-- {{  }} -->
                <p class="p">Norem ipsum dolor sit amet, consectetur adipiscing elit. Mountainview RdGreenwood Lake, New
                    York(NY), 10925.
                    Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum
                    lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
                </p>
                <figure>
                    <img src="https://motor.elpais.com/wp-content/uploads/2022/01/google-maps-22-1046x616.jpg" alt="Ubicación">
                    <figcaption class="p">Calle Principal, Villa Serenidad, Ciudad Esperanza, Estado del Sol, México.</figcaption>
                </figure>
            </div>

        </div>

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