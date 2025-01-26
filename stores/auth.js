import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { auth } from '~/plugins/firebaseFileConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth'
import { routerKey } from 'vue-router'

export const useAuthStore = defineStore('auth', () => {
    const user = ref(null)
    const isLoading = ref(false)
    const error = ref(null)

    // WATCHING FOR AUTH CHANGES
    onAuthStateChanged(auth, (currentUser) => {
        user.value = currentUser
    })

    // SIGN UP
    const signUp = async (email, password) => {
        isLoading.value = true
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            user.value = res.user
            isLoading.value = false
            routerKey.push('/')
        } catch (err) {
            error.value = err.message
            isLoading.value = false
        }
    }

    // SIGN IN
    const signIn = async (email, password) => {
        isLoading.value = true
        try {
            const res = await signInWithEmailAndPassword(auth, email, password)
            user.value = res.user
            isLoading.value = false
        } catch (err) {
            error.value = err.message
            isLoading.value = false
        }
    }

    // SIGN IN WITH GOOGLE
    const signInWithGoogle = async () => {
        isLoading.value = true
        try {
            const provider = new GoogleAuthProvider()
            const res = await signInWithPopup(auth, provider)
            user.value = res.user
            isLoading.value = false
        } catch (err) {
            error.value = err.message
            isLoading.value = false
        }
    }

    // SIGN OUT
    const signOutUser = async () => {
        try {
            await signOut(auth)
            user.value = null
        } catch (err) {
            error.value = err.message
        }
    }

    return {
        user,
        isLoading,
        error,
        signUp,
        signIn,
        signInWithGoogle,
        signOutUser
    }
})