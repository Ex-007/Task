<template>
    <div>
        <h1>Products Page</h1>
        <ProductCard :product ="products" />
    </div>
</template>

<script setup>

    const { data:incoming } = await useFetch('https://opendetails.vercel.app/products/jeweleries')
    const products = ref(incoming._rawValue)
    // console.log(incoming._rawValue);
    
</script>

<style scoped>

</style>