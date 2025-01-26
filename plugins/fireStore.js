import { db, auth, storage } from "@/firebase/firebaseCon";

export default defineNuxtPlugin((nuxtApp) => {
  // Provide Firestore instance globally as $db
  nuxtApp.provide("db", db);
  nuxtApp.provide("auth", auth);
  nuxtApp.provide("storage", storage);
});
