<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    <div class="card__bill">
        <table class="table">
            <tbody>
                <tr>
                    <td class="h3">Item 1</td>
                    <td class="h3">$ <span>200</span></td>
                </tr>
                <tr>
                    <td class="h3">Item 2</td>
                    <td class="h3">$ <span>150</span></td>
                </tr>
            <tfoot class="table-group-divider">
                <tr>
                    <th class="h2">TOTAL</th>
                    <th class="h2">$ <span>350</span></th>
                </tr>
            </tfoot>

            </tbody>
        </table>
    </div>
</template>

<style>
.card__bill {
    width: 100%;
    height: min-content;
    border: 16;
    border-radius: 16px;
    padding: 30px 95px 30px 95px;
    background: var(--neutro-3, #F8F8F8);
    box-shadow: 1px 6px 16px 0px rgba(66, 84, 102, 0.30);

    .h3 {
        color: #425466;
    }
}
</style>