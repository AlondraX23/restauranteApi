<script setup>

</script>
<template>
    <div class="card--child">
        <slot></slot>
    </div>
</template>

<style>
.card--child {
    width: 100%;
    height: min-content;
    border: 0;
    padding: 32px;
    border-radius: 6px 6px 16px 16px;
    background: var(--neutro-3, #F8F8F8);
    box-shadow: 1px 6px 16px 0px rgba(66, 84, 102, 0.30);
}

.contador {
    display: flex;
    gap: 4px;

    .btn__contador {
        border-radius: 6px 0px 0px 6px;
        width: 35.188px;
        height: 34.286px;
        background-color: var(--neutro-2);
        color: var(--neutro-3);
        border: none;
        cursor: pointer;
        margin-top: 2.5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .btn__contador:hover {
        background-color: var(--neutro-1);
        color: var(--neutro-3);

    }

    .h3 {
        width: 46px;
        height: 40px;
        border-radius: 6px;
        border: 3px solid var(--neutro-2, #425466);
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .btn__contador--reflection {
        border-radius: 0px 6px 6px 0px;
        width: 35.188px;
        height: 34.286px;
        background-color: var(--neutro-2);
        color: var(--neutro-3);
        border: none;
        cursor: pointer;
        margin-top: 2.5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .btn__contador--reflection:hover {
        background-color: var(--neutro-1);
        color: var(--neutro-3);
    }

}
</style>