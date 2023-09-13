<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    <div class="card__cart">
        <div class="row g-0">
            <div class="col-3">
                <img src="https://placehold.co/244x244" alt="...">
            </div>
            <div class="col-9">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <h5 class="h2">Card title</h5>
                        <h5 class="h2 h2--neutro2">$<span>12 000</span></h5>
                    </div>
                    <p class="p text-wrap">Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
                        molestie,
                        dictum est a,
                        mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus... </p>
                    <div class="hstack gap-3 pt-5">
                        <div class="ps-0 p-2">
                            <div class="contador">
                                <button class="btn__contador"><svg width="16" height="3" viewBox="0 0 16 3" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M0 1.10345C0 0.494031 0.370523 0 0.827586 0H15.1724C15.6295 0 16 0.494031 16 1.10345C16 1.71287 15.6295 2.2069 15.1724 2.2069H0.827586C0.370523 2.2069 0 1.71287 0 1.10345Z"
                                            fill="#F8F8F8" />
                                    </svg></button>
                                <p class="h3">8</p>
                                <button class="btn__contador--reflection" dir=""><svg width="16" height="16"
                                        viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.93333 14.9333C6.93333 15.5224 7.4109 16 8 16C8.5891 16 9.06667 15.5224 9.06667 14.9333V9.06667H14.9333C15.5224 9.06667 16 8.5891 16 8C16 7.4109 15.5224 6.93333 14.9333 6.93333H9.06667V1.06667C9.06667 0.477562 8.5891 0 8 0C7.4109 0 6.93333 0.477562 6.93333 1.06667V6.93333H1.06667C0.477563 6.93333 0 7.4109 0 8C0 8.5891 0.477563 9.06667 1.06667 9.06667H6.93333V14.9333Z"
                                            fill="#F8F8F8" />
                                    </svg></button>
                            </div>
                        </div>
                        <div class="p-2 ms-auto"><button class="btn__desk btn__desk--icon-outline me-2">
                                <svg class="icon" width="16" height="17" viewBox="0 0 16 17"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.85714 16.5C11.7021 16.5 13.1216 15.8936 13.4757 15.7009C13.5391 15.6664 13.5785 15.6033 13.5913 15.5322L15.5391 4.67994C15.5555 4.58851 15.4827 4.50583 15.39 4.51168C14.5402 4.56536 10.8681 4.78571 7.85714 4.78571C4.84616 4.78571 1.17412 4.56536 0.324296 4.51168C0.23159 4.50583 0.158743 4.58851 0.175153 4.67994L2.123 15.5322C2.13576 15.6033 2.17516 15.6664 2.23862 15.7009C2.59268 15.8936 4.01219 16.5 7.85714 16.5Z" />
                                    <path
                                        d="M7.28571 0.5H8.42857C8.74416 0.5 9 0.755837 9 1.07143V1.37217C10.9351 1.42222 12.6574 1.58793 13.8076 1.7256C14.7129 1.83396 15.4453 2.48727 15.6958 3.36399C15.7787 3.65403 15.5728 3.94593 15.2716 3.96299C13.9301 4.03896 10.543 4.21429 7.85714 4.21429C5.17133 4.21429 1.78419 4.03896 0.442682 3.96299C0.141511 3.94593 -0.0644185 3.65403 0.018452 3.36399C0.268943 2.48727 1.00136 1.83396 1.9067 1.7256C3.0569 1.58793 4.77917 1.41471 6.71429 1.36466V1.07143C6.71429 0.755837 6.97012 0.5 7.28571 0.5Z" />
                                </svg>
                                <p class="p">Eliminar</p>
                            </button></div>
                        <div class="pe-0 p-2"> <button class="btn__desk me-2">
                                <p class="p p--white">Seguir comprando</p>
                            </button></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <RouterView />
</template>

<style>
.card__cart {
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
        padding: 0px 48px 0px 32px;

        .h2 {
            margin: 0;
            padding: 52px 0px 16px 0px;
        }

        p {
            padding: 0;
            margin: 0px;
        }
    }
}
</style>