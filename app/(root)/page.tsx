"use client";
import { Modal } from "@/components/ui/modal";

const SetUpPage = () => {
   return (
      <div className="p-4 bg-white">
         <Modal
            isOpen={true}
            onClose={() => {}}
            title="Test"
            description="Test description for when we go to the root page"
         >
            Children
         </Modal>
      </div>
   );
};

export default SetUpPage;
