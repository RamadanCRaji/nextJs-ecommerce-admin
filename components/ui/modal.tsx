// Here we have the parent modal that we will resuse over and over again

"use client";

import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog";

// Define the props interface for the Modal React function component
interface ModalProps {
   title: string;
   description: string;
   isOpen: boolean;
   onClose: () => void; // A function to close the modal, takes no parameters and doesn't return a value
   children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
   title,
   description,
   isOpen,
   onClose,
   children,
}) => {
   // Function to handle changes in the dialog's open state
   const onChange = (open: boolean) => {
      if (!open) {
         //remember that  onClose is a function that does not return anything
         //and we will recieve it as a prop into the modal
         onClose();
      }
   };

   return (
      // open and onOpenChange are both defualt props on the Dialog box
      // if open is true then the dialog box opens
      <Dialog open={isOpen} onOpenChange={onChange}>
         {/* onchange is callback used that gets the value of open passed to it automaticlly*/}
         <DialogContent>
            <DialogHeader>
               <DialogTitle>{title}</DialogTitle>
               <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            <div>{children}</div>
         </DialogContent>
      </Dialog>
   );
};
