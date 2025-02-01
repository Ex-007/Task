<template>
    <div>
        <div class="registration">
            <input type="text" placeholder="Enter email address" v-model="authProperties.emailFirst">
            <input type="text" placeholder="Enter Your Username" v-model="authProperties.usernameFirst">
            <input type="password" placeholder="Enter password" v-model="authProperties.passwordFirst">
            <button @click="registerNewUSer" :disabled="authentication.isLoading">{{authentication.isLoading ? "Registering..." : "Register"}}</button>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { useAuthStore } from '~/stores/auth';
    import { useRouter } from 'vue-router';
    const router = useRouter()
    const authentication = useAuthStore()

    const authProperties = ref({
        emailFirst: '',
        passwordFirst: '',
        usernameFirst: '',
    })


    const registerNewUSer = async () => {
           const email = authProperties.value.emailFirst
           const password = authProperties.value.passwordFirst
           const username = authProperties.value.usernameFirst
        try {
            await authentication.registerUser(email, password, username)
            if(authentication.canProceed){
                alert('User successfully registered')
                router.push('/')
            }else{
                alert(authentication.error)
            }
            
        } catch (error) {
            console.log(error)
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