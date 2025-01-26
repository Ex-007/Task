<template>
    <div>
        <h1>Welcome Back!</h1>
        <div class="formData">
            <input type="text" placeholder="Enter Name" v-model="nameValue">
            <!-- <input type="text" placeholder="Enter Age" v-model="age">
            <input type="text" placeholder="Enter department" v-model="department">
            <input type="text" placeholder="Enter level" v-model="level"> -->
            <button @click="addDocuments" :disabled="fireSaving.isLoading"> {{ fireSaving.isLoading ? 'Resgistering...' : 'Register' }} </button>
        </div>

        <!-- <div class="displayValue">
            <h2>Display Value</h2>
            <p> {{ fireSaving.documents }} </p>
        </div> -->
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { useFirestoreStore } from '~/stores/firestoree';
    const fireSaving = useFirestoreStore()


    console.log(fireSaving.isLoading)
    const nameValue = ref('')

    // FUNCTION FOR ADDING dOCUMENTS
    async function addDocuments(){
        const data = nameValue.value
        await fireSaving.addData(data)
        if(!fireSaving.error){
            alert('file successfully saved')
            clearItemValue()
        }else{
            alert(fireSaving.error)
        }
    }

    function clearItemValue(){
        nameValue.value = ''
    }










</script>

<style scoped>
        .formData{
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