"use client";
import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal"; //hook that used to control the modal for store
export const StoreModal = () => {
   const storeModal = useStoreModal();
   return (
      <Modal
         title="Create store"
         description="Add a new Store to manage products and catefories "
         isOpen={storeModal.isOpen}
         onClose={storeModal.onClose} //the value here is method **look at the use-store-modal hook for the function
      >
         Future create store form
      </Modal>
   );
};
// now i want this modal to be available throughout my application and to do that i will create folder called provider (see root folder)
