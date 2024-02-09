"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Store } from "@prisma/client";
import { Trash } from "lucide-react";

import { Input } from "@/components/ui/input";
import {
   Form,
   FormControl,
   FormDescription,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface SettingsFormPageProps {
   initialData: Store;
}

const formSchema = z.object({
   name: z.string().min(1),
});

type SettingsFormValue = z.infer<typeof formSchema>;

export const SettingsForm: React.FC<SettingsFormPageProps> = ({
   initialData,
}) => {
   const [loading, setLoading] = useState(false);
   const [open, setOpen] = useState(false);

   const form = useForm<SettingsFormValue>({
      resolver: zodResolver(formSchema),
      defaultValues: initialData, //inital data is an object already
   });

   const onSubmit = async (data: SettingsFormValue) => {
      console.log(data);
   };

   return (
      <>
         <div className=" flex items-center justify-between">
            <Heading title="Settings" description="Manage store preferences" />
            <Button
               variant="destructive"
               size="icon"
               onClick={() => setOpen(true)}
               disabled={loading}
            >
               <Trash className="h-4 w-4" />
            </Button>
         </div>
         <Separator />
         <Form {...form}>
            <form
               action=""
               onSubmit={form.handleSubmit(onSubmit)}
               className="space-y-8 w-full"
            >
               <div className="grid grid-cols-3 gap-8">
                  {/* name attribute is referring to the property it is going to control  and this is the name in our database*/}
                  <FormField
                     control={form.control}
                     name="name"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Name</FormLabel>
                           <FormControl>
                              <Input
                                 disabled={loading}
                                 placeholder="Store name"
                                 {...field}
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
               </div>
               <Button disabled={loading} className="ml-auto" type="submit">
                  save Changes
               </Button>
            </form>
         </Form>
      </>
   );
};

// note that this does not have a page.jsx in it so it will not be publically accessed
