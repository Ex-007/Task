<template>
    <div>
        <div class="registration">
            <input type="text" placeholder="Enter email address" v-model="email">
            <input type="text" placeholder="Enter password" v-model="password">
            <button @click="registerUser">Register</button>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import {useAuthStore} from '@/stores/auth';

    const email = ref('');
    const password = ref('');

    const registerUser = () => {
        useAuthStore().register(email.value, password.value);
        if(useAuthStore().error){
            alert(useAuthStore().error);
        }
        if(useAuthStore().isAuthenticated){
            alert('User registered successfully');
        }
    }


</script>

<style scoped>
    .registration{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-top: 10px;
    }
    input{
        width: 250px;
        height: 30px;
        border-radius: 30px;
        padding: 5px;
    }
    button{
        width: 250px;
        height: 30px;
        background-color: blue;
        color: white;
        border: none;
        border-radius: 5px;
    }
</style>