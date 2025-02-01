import { defineStore } from "pinia";
import { addDoc, collection, getDocs, doc, getDoc, setDoc, updateDoc, deleteDoc, deleteField, query, where, orderBy } from "firebase/firestore";

export const useFirestoreStore = defineStore("firestore", () => {
    const isLoading = ref(false);
    const dataDoc = ref([]);
    const error = ref(null);

    // FETCHING DATA FROM FIRESTORE
    const fetchData = async () => {
        isLoading.value = true;
        error.value = null;
        try {
            const { $db } = useNuxtApp();
            const collectionRef = collection($db, "DATA");
            const querySnapshot = await getDocs(collectionRef);
    
            dataDoc.value = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
        } catch (err) {
            error.value = err.message || "An error occurred while fetching data.";
        } finally {
            isLoading.value = false;
        }
    };
    
    // const fetchData = async () => {
    //     isLoading.value = true;
    //     error.value = null;
    //     try {
    //         const { $db } = useNuxtApp();
    //         const collectionRef = collection($db, "data");
    //         const querySnapshot = await getDocs(collectionRef);
    
    //         if (!querySnapshot.empty) {
    //             dataDoc.value = querySnapshot.docs.map((doc) => ({
    //                 id: doc.id,
    //                 ...doc.data(),
    //             }));
    //         } else {
    //             dataDoc.value = []; 
    //         }
    //     } catch (err) {
    //         error.value = err.message || "An error occurred while fetching data.";
    //     } finally {
    //         isLoading.value = false;
    //     }
    // };
    

    // ADDING DOCUMENT TO FIRESTORE
    const addDataTwo = async (data) => {
        isLoading.value = true;
        error.value = null;
        try {
            const nameness = data.name;
            const { $db } = useNuxtApp();
            const docRef = doc($db, "DATA", nameness);
            await setDoc(docRef, {
                name: data.name,
                age: data.age,
                department: data.department,
                level : data.level
            });
            // await fetchData()
        } catch (error) {
            error.value = error;
        } finally {
            isLoading.value = false;
        }
    };

    // ADDING DOCUMENT WITH DESIRED ID TO FIRESTORE
    const addData = async (data) => {
        isLoading.value = true;
        error.value = null;
        try {
            const { $db } = useNuxtApp();
            const collectionRef = collection($db, "data");
            await setDoc(doc(collectionRef, "new-id"), {
                name: data.name,
                age: data.age,
                department: data.department,
                level : data.level
            });
            await fetchData()
        } catch (error) {
            error.value = error;
        } finally {
            isLoading.value = false;
        }
    };

    const deletetion = async (id) => {
        isLoading.value = true;
        error.value = null;
        try {
            const { $db } = useNuxtApp();
            const docRef = doc($db, "DATA", id);
            await deleteDoc(docRef);
            await fetchData()
        } catch (error) {
            error.value = error;
        } finally {
            isLoading.value = false;
        }
    }


    return {
        deletetion,
        isLoading,
        addDataTwo,
        dataDoc,
        error,
        addData,
        fetchData
    }
})



// export const useFirestoreStore = defineStore('fireStroage', {
//     state: () => ({
//         firestoreData: [],
//         isLoading: false,
//         error : null
//     }),
//     actions: {
//         async addData(data) {
//             this.isLoading = true;
//             this.error = null;
//             try {
//                 const{ $db } = useNuxtApp()
//                 const dataIn = {
//                     data: data,
//                 }
//                 const collectionRef = collection($db, "data");
//                 await addDoc(collectionRef, { data });               
//             } catch (error) {
//                 this.error = error;
//             }finally{
//                 this.isLoading = false;
//             }
//         },
//     },
//     });