"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import axios from "axios";

import { Input } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";
import {
   Form,
   FormControl,
   FormDescription,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form";
import { useStoreModal } from "@/hooks/use-store-modal"; //hook that used to control the modal for store
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";
import { redirect } from "@/node_modules/next/navigation";

/*CREATING A OBJECT SCHEMA */
// Defines how the form data should look like:Schema
const StoreformSchema = z.object({
   name: z
      .string()
      .min(5, { message: "Store name must be at least 5 characters." }),
});
export const StoreModal = () => {
   const storeModalState = useStoreModal();
   const [loading, setLoading] = useState(false);

   const form = useForm<z.infer<typeof StoreformSchema>>({
      resolver: zodResolver(StoreformSchema), //used Zod to  validate fields based on schema aka ensuring the data matches ther rules i set in form schema
      defaultValues: {
         name: "",
      },
   });

   const onSubmit = async (values: z.infer<typeof StoreformSchema>) => {
      try {
         setLoading(true);

         const response = await axios.post("/api/stores", values);

         console.log(response.data);

         toast.success("store created.");

         //i am using window.assign and not the nextjS redirect function because window.location completely refreshes the page
         window.location.assign(`/${response.data.id}`);
      } catch (error) {
         toast.error("something went wrong");
      } finally {
         setLoading(false);
      }
   };
   return (
      <Modal
         title="Create store"
         description="Add a new Store to manage products and catefories "
         isOpen={storeModalState.isOpen} // we are implimenting the hook from the storehook aka useStoreModal
         onClose={storeModalState.onClose} //the value here is method **look at the use-store-modal hook for the function
      >
         {/* Placeholder for the future store creation form */}
         <div>
            <div className="space-y-4 py-2 pb-4">
               <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                     <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                 <Input
                                    disabled={loading}
                                    placeholder="E-commerce"
                                    {...field}
                                 />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />
                     <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                        <Button
                           variant="outline"
                           disabled={loading}
                           onClick={storeModalState.onClose}
                        >
                           Cancle
                        </Button>
                        <Button disabled={loading} type="submit">
                           Continue
                        </Button>
                     </div>
                  </form>
               </Form>
            </div>
         </div>
      </Modal>
   );
};
// To make this modal available throughout the entire application, i created  a dedicated provider(modalProvider) in the root folder.

// z.object() creates the schema of the variables in the form
// typeof in 'typeof formSchema' helps TypeScript understand the structure of the expected form data/get the types of the data values supposed to be  in the form
// z.infer<typeof formSchema> infers the exact type of data the form should receive based on formSchema.
// zodResolver(formSchema) uses formSchema to validate the form data against the defined rules.
