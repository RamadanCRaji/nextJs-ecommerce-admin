"use client";

import { StoreModal } from "@/components/modals/store-modal";

import { useEffect, useState } from "react";

export function ModalProvider() {
   const [isMounted, setIsMounted] = useState(false);

   useEffect(() => {
      setIsMounted(true);
   }, []);

   if (!isMounted) {
      return null;
   }

   return (
      <>
         <StoreModal />
      </>
   );
}

// if the component is mounted then the  we changed the value of isMounted to true and the if staement does not run else it returns null
// if is mounted is still false then that means the component has not mounted yet and if the component has not mounted yet then the useeffect will not run and the ModalProvider function just returns null
