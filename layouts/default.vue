<template>
    <div>
        <header>
            <h1>Paean</h1>
            <nav>
                <ul>
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li><nuxt-link to="/account">Account</nuxt-link></li>
                    <li><nuxt-link to="/about">About</nuxt-link></li>
                    <li><nuxt-link to="/products">Products</nuxt-link></li>
                </ul>
            </nav>
        </header>
        <slot />

        <footer>
            <p>&copy; 2021 My Site</p>

        </footer>
    </div>
</template>

<script setup>

</script>

<style scoped>
    body {
        margin: 0;
        font-family: Arial, sans-serif;
        padding: 0;
        
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #333;
        color: white;
        padding: 1rem;
    }

    nav ul {
        display: flex;
        list-style: none;
        padding: 0;
    }

    nav ul li {
        margin-right: 1rem;
    }
    .router-link-exact-active {
        color: red;
        background-color: white;
        padding: 6px;
    }

    a {
        color: white;
        text-decoration: none;
        text-decoration: none;
    }

    footer {
        background-color: #333;
        color: white;
        padding: 1rem;
        position: fixed;
        bottom: 0;
        width: 100%;
    }
</style>