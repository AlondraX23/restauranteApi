<template>
    <div class="tarjeta">
        <slot></slot>
    </div>
</template>

<style>
.tarjeta {
    width: 100%;
    height: min-content;
    border: 0;
    border-radius: 16px;
    background: var(--neutro-3, #F8F8F8);
    box-shadow: 1px 6px 16px 0px rgba(66, 84, 102, 0.30);
    padding: 32px;
}
.tarjeta--16 {
    padding: 16px;
}
</style>