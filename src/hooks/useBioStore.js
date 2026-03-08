import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useBioStore = create(
    persist(
        (set) => ({
            personal: {},
            family: {},
            education: {},
            horoscope: {},
            contact: {},
            photo: null,
            contactSectionHide: false,

            setPersonal: (data) => set({ personal: data }),
            setFamily: (data) => set({ family: data }),
            setEducation: (data) => set({ education: data }),
            setHoroscope: (data) => set({ horoscope: data }),
            setPhoto: (file) => set({ photo: file }),
            setContact: (data) => set({ contact: data }),
            setContactSection: (value) => set({ contactSectionHide: value })
        }),
        {
            name: "userBio", // key in localStorage
        }
    )
);