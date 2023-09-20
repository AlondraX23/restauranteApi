<script setup>
import { RouterLink, RouterView } from 'vue-router';
import CardContador from '@/components/CardContador.vue';

</script>

<template class="bg-blanco">
    <main class="main__desk">
        <div class="row" id="info">
            <div class="col-6">
                <img src="https://placehold.co/568" alt="">
            </div>
            <div class="col-6">
                <h1 class="h1-medium">Nombre del platillo</h1>
                <!-- label -->
                <div class="label__price m-2">
                    <button>$</button>
                    <p class="h3">899999</p>
                </div>
                <p class="p">Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. </p>
                <p class="p">Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend.</p>
            </div>
        </div>
        <CardContador />
    </main>
</template>

<style>


#info {
    padding-bottom: 48px;
    
    h1 {
        margin: 0;
        padding-top: 32px;
        padding-bottom: 16px;
    }
    .label__price {
        display: flex;
        padding-bottom: 24px;
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