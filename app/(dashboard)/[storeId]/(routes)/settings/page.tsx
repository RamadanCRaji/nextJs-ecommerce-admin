import { redirect } from "@/node_modules/next/navigation";
import { auth } from "@clerk/nextjs";

import { SettingsForm } from "./components/settings-form";

import prismadb from "@/lib/prismadb";

interface SettingsPageProps {
   params: { storeId: string };
}

const SettingsPage: React.FC<SettingsPageProps> = async ({ params }) => {
   const { userId } = auth();

   if (!userId) {
      redirect("/sign-in");
   }

   const store = await prismadb.store.findFirst({
      where: {
         id: params.storeId,
         userId: userId,
      },
   });

   //we did this because the user can always type in a manual storeid and so we are checking if the store id does not exist we just redirect them to the main page again
   if (!store) {
      redirect("/");
   }
   return (
      <div className=" flex-col ">
         <div className="flex-1 space-y-4 p-8 pt-6">
            <SettingsForm initialData={store} />
         </div>
      </div>
   );
};

export default SettingsPage;

// becasuse this is a server side page we automatically have access to the params of the active path

//
