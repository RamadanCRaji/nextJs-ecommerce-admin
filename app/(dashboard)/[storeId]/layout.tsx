import { redirect } from "@/node_modules/next/navigation";
import { auth } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";
import Navbar from "@/components/navbar";

export default async function Dashboard({
   children,
   params,
}: {
   children: React.ReactNode;
   params: { storeId: string };
}) {
   const { userId } = auth();

   if (!userId) {
      redirect("/sign-in");
   }

   const { storeId } = params;

   //if we have the userid that means in the use is logged in and they potential have a store in our database so we can find them

   const store = await prismadb.store.findFirst({
      where: {
         id: storeId,
         userId: userId,
      },
   });
   if (!store) {
      redirect("/");
   }
   return (
      <>
         <Navbar />
         {children}
      </>
   );
}
