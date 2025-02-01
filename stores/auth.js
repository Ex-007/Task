import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth'
import { routerKey } from 'vue-router'
import {addDoc, collection, getDocs, doc, getDoc, setDoc, updateDoc, deleteDoc, deleteField, query, where, orderBy} from 'firebase/firestore'

export const useAuthStore = defineStore('auth', () => {
    const userValue = ref(null)
    const isLoading = ref(false)
    const error = ref(null)
    const canProceed = ref(false)

    // WATCHING FOR AUTH CHANGES
    const checkAuth = async () => {
        const { $auth } = useNuxtApp()
        onAuthStateChanged($auth, (currentUser) => {
            userValue.value = currentUser
        })
    }

    
    // REGISTER USER
    
    const registerUser = async (email, passsword, username) => {
        isLoading.value = true
        error.value = null
        try {
            const { $auth } = useNuxtApp()
            const response = await createUserWithEmailAndPassword($auth, email, passsword)
            if(response){
                const user = response.user
                const userId = user.uid
                
                console.log('User ID: ', userId, email, username)
                addUSerToDatabase(userId, email, username)
            }
        } catch (error) {
            error.value = error.message || 'An error occurred while registering user'
        }
    }
    
    // ADD USER TO DATABASE
    const addUSerToDatabase = async (userId, email, username) => {
        isLoading.value = true
        error.value = null
        try {
            const { $db } = useNuxtApp()
            const docRef = doc($db, 'REGISTERED_USERS', userId)
            await setDoc(docRef, {
                email : email,
                username : username,
            })
            canProceed.value = true
            console.log('User added to database')
            console.log(canProceed.value)
        } catch (error) {
            console.error('Error adding user to database: ', error)
        }finally{
            isLoading.value = false
        }
    }
    
    return {
        checkAuth,
        userValue,
        isLoading,
        error,
        canProceed,
        addUSerToDatabase,
        registerUser
    }
})