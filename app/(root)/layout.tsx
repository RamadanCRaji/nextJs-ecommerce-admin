import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

async function SetUpLayout({ children }: { children: React.ReactNode }) {
   const { userId } = auth();

   // Redirect to sign-in page if no user ID is present
   if (!userId) {
      redirect("/sign-in");
      return null;
   }

   // Attempt to load the first store associated with the user
   const store = await prismadb.store.findFirst({
      where: { userId: userId },
   });

   // Redirect to the specific store page if a store exists
   if (store) {
      redirect(`/${store.id}`);
      return null;
   }

   // Render children components if no redirection occurs
   return <>{children}</>;
}

export default SetUpLayout;
