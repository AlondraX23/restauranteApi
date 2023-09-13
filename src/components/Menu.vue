<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<template> <!-- Agregar {{  }} -->
    <div class="card__menu">
        <div class="row g-0">
            <div class="col-3">
                <img src="https://placehold.co/244x244" alt="...">
            </div>
            <div class="col-9">
                <div class="card-body">
                    <h5 class="h3">Card title</h5>
                    <h5 class="h2">$<span>120</span></h5>
                    <p class="p">Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum
                        est a,
                        mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                        interdum tellus
                        elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti
                        sociosqu ad
                        litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
                        egestas, ac
                        scelerisque ante pulvinar. Donec ut rhoncus ex. </p>
                </div>
            </div>
        </div>
    </div>
    <RouterView />
</template>

<style>
.card__menu {
  width: 100%;
  height: min-content;
  border: 0;
  border-radius: 16px;
  background: var(--neutro-3, #F8F8F8);
  box-shadow: 1px 6px 16px 0px rgba(66, 84, 102, 0.30);

  img {
    width: 244px;
    height: 244px;
    margin: 16px 16px 16px 16px;
    border-radius: 9px;
  }

  .card-body {
    padding: 16px 32px 16px 32px;

    .h3 {
      margin: 0;
      padding: 40px 0px 8px 0px;
    }

    .h2 {
      margin: 0;
      padding-bottom: 16px;
      color: var(--neutro-2);
    }

    p {
      padding: 0;
      margin: 0px;
    }
  }
}

</style>