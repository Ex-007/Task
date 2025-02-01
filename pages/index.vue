<template>
    <div>
        <h1>Welcome Back!</h1>
        <!-- <div class="formData">
            <input type="text" placeholder="Enter Name" v-model="dataToCloud.name">
            <input type="text" placeholder="Enter Age" v-model="dataToCloud.age">
            <input type="text" placeholder="Enter department" v-model="dataToCloud.department">
            <input type="text" placeholder="Enter level" v-model="dataToCloud.level">
            <button @click="addDocuments" :disabled="fireSaving.isLoading"> {{ fireSaving.isLoading ? 'Resgistering...' : 'Register' }} </button>
        </div> -->

        <div class="formData">
            <input type="text" placeholder="Enter Name" v-model="referencedBack.name">
            <input type="text" placeholder="Enter Age" v-model="referencedBack.age">
            <input type="text" placeholder="Enter department" v-model="referencedBack.department">
            <input type="text" placeholder="Enter level" v-model="referencedBack.level">
            <button @click="addDocumentsTwo" :disabled="fireSaving.isLoading"> {{ fireSaving.isLoading ? 'Registering...' : 'Register' }} </button>
        </div>

        <!-- <h3>{{ fireSaving.dataDoc }}</h3> -->

        <div class="displayingProp" v-for="(items, index) in fetchedData" :key="index">
            <p><strong>Name:</strong> {{ items.name }}</p>
            <p><strong>Age:</strong> {{ items.age }}</p>
            <p><strong>Department:</strong> {{ items.department }}</p>
            <p><strong>Level:</strong> {{ items.level }}</p>
            <button @click="deleteDet(items.id)">Delete</button>
        </div>



    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { useFirestoreStore } from '~/stores/firestoree';
    const fireSaving = useFirestoreStore()

    const referencedBack = ref({
        name: '',
        age: '',
        department: '',
        level: ''
    })

    async function addDocumentsTwo(){
        const data = {
            name: referencedBack.value.name,
            age: referencedBack.value.age,
            department: referencedBack.value.department,
            level: referencedBack.value.level
        }
        await fireSaving.addDataTwo(data)
        if(!fireSaving.error){
            alert('file successfully saved')
            clearItemValueTwo()
        }else{
            alert(fireSaving.error)
        }

    }

    function clearItemValueTwo(){
        referencedBack.value = ''

    }


























    const fetchedData = fireSaving.dataDoc
    // console.log(fireSaving.dataDoc)


        onMounted(() => {
          fireSaving.fetchData();
        //   console.log(fireSaving.dataDoc)
         });

        //  fetching data
        const fetching = () => {
            fireSaving.fetchData()
        }
        fetching()



         fireSaving.fetchData()
    const dataToCloud = ref({
        name: '',
        age: '',
        department: '',
        level: ''
    })

    async function addDocuments(){
        const data = {
            name: dataToCloud.value.name,
            age: dataToCloud.value.age,
            department: dataToCloud.value.department,
            level: dataToCloud.value.level
        }
        await fireSaving.addData(data)
        if(!fireSaving.error){
            alert('file successfully saved')
            clearItemValue()
        }else{
            alert(fireSaving.error)
        }

    }

    function clearItemValue(){
        dataToCloud.value = ''

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
    .displayingProp{
        display: flex;
        /* flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-top: 10px;
        border: 1px solid black;
        padding: 10px;
        border-radius: 10px; */
    }
</style>