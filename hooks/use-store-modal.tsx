import { create } from "zustand";

// Define an interface for the modal state(this is typeSCript related)
interface ModalState {
   isOpen: boolean; // Indicates whether the modal is open or closed.
   onOpen: () => void; // A function to open the modal, takes no parameters and doesn't return a value.
   onClose: () => void; // A function to close the modal, takes no parameters and doesn't return a value.
}

// Create a custom hook for managing modal state for the store modal and this hook contains all the triggers for the modal state
export const useStoreModal = create<ModalState>((set) => ({
   isOpen: false, // Initialize isOpen as false (modal is closed by default).
   onOpen: () => set({ isOpen: true }), // Function to set isOpen to true (open modal).
   onClose: () => set({ isOpen: false }), // Function to set isOpen to false (close modal).
}));

// onOpen and onClose are both changin the state of isOpen
