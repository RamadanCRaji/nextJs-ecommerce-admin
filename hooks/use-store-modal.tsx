import { create } from "zustand";

// Define an interface for the modal state using TypeScript.
interface ModalState {
   isOpen: boolean; // Indicates whether the modal is open (true) or closed (false).
   onOpen: () => void; // Function to open the modal (sets isOpen to true), takes no parameters, and doesn't return a value.
   onClose: () => void; // Function to close the modal (sets isOpen to false), takes no parameters, and doesn't return a value.
}

// Create a custom hook for managing modal state.
export const useStoreModal = create<ModalState>((set) => ({
   isOpen: false, // Initialize isOpen as false (modal is closed by default).
   onOpen: () => set({ isOpen: true }), // Function to set isOpen to true (open modal).
   onClose: () => set({ isOpen: false }), // Function to set isOpen to false (close modal).
}));

// Both onOpen and onClose functions change the state of isOpen.

// note that i am creating a store which according to zustand is a hook and i can put anything inside this store/hook
