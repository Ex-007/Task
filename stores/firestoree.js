import { defineStore } from "pinia";
import { addDoc, collection } from "firebase/firestore";

export const useFirestoreStore = defineStore('fireStroage', {
    state: () => ({
        firestoreData: [],
        isLoading: false,
        error : null
    }),
    actions: {
        async addData(data) {
            this.isLoading = true;
            this.error = null;
            try {
                const{ $db } = useNuxtApp()
                const dataIn = {
                    data: data,
                }
                // const collectionRef = collection($db, "data");
                // await addDoc(collectionRef, data);
                const collectionRef = collection($db, "data");
                await addDoc(collectionRef, { data });

                // await addDoc(collection($db, "data"), {dataIn});
                
            } catch (error) {
                this.error = error;
            }finally{
                this.isLoading = false;
            }
        },
    },
    });