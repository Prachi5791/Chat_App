import { doc, getDoc } from 'firebase/firestore';
import { create } from 'zustand'
import { db } from './firebase';
import { useState, useEffect } from "react";

export const useUserStore = create((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
//   updateBears: (newBears) => set({ bears: newBears }),

    currentUser: null,
    isLoading: true,
    fetchUserInfo: async (uid) =>{
        if(!uid) return set({currentUser:null, isLoading: false});

        try{
            const docRef = doc(db, "users", uid);
            // const docRef = doc(db, "user", uid);
            const docSnap = await getDoc(docRef);

            if(docSnap.exists()){
                set({ currentUser: docSnap.data(), isLoading: false });
            }
            else{
                set({ currentUser: null , isLoading: false });
            }
        }
        catch{
            console.log(err)
            return set({ currentUser: null, isLoading: false });
        }
    },
}));