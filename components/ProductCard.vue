<template>
    <div>
        <div class="container" v-for="(pro, index) in product" :key="index">
            <img :src="pro.productImage" alt="">
            <h3>{{ pro.productName }}</h3>
            <h3>{{ pro.productPrice }}</h3>
        </div>
    </div>
</template>

<script setup>
    const {product} = defineProps(['product'])
</script>

<style scoped>
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    img{
        width: 200px;
    }
</style>