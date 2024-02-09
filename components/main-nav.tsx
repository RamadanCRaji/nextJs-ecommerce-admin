"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { useParams, usePathname } from "@/node_modules/next/navigation";

export function MainNav({
   className,
   ...props
}: React.HTMLAttributes<HTMLElement>) {
   const pathname = usePathname();
   const params = useParams();

   //now we will create object inside that will be using the pathnames and the params
   //we can check if a link is active by checking if the current pathname matheses the hreflink
   const routes = [
      {
         href: `/${params.storeId}/settings`,
         label: "Settings",
         active: pathname === `${params.storeId}/settings`,
      },
   ];
   return (
      <nav
         className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      >
         {routes.map((routes) => (
            <Link
               key={routes.href}
               href={routes.href}
               className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  routes.active
                     ? "text-black dark:text-white"
                     : "text-muted-foreground"
               )}
            >
               {routes.label}
            </Link>
         ))}
      </nav>
   );
}
