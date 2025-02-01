<template>
    <div>
        <div class="error">
            <h1>404</h1>
            <h2>Page not found</h2>
            <p>The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
            <router-link to="/">Go to Home</router-link>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .error{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-top: 10px;
    }
    h1{
        font-size: 50px;
        color: red;
    }
    h2{
        font-size: 30px;
        color: blue;
    }
    p{
        font-size: 20px;
        color: green;
    }
    router-link{
        font-size: 20px;
        color: white;
        background-color: blue;
        padding: 10px;
        border-radius: 5px;
        text-decoration: none;
    }
    router-link:hover{
        background-color: green;
    }
</style>