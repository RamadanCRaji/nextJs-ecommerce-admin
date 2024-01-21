import React from "react";

export default function AuthLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <div className=" text-red-600 flex items-center justify-center w-full h-full">
         {children}
      </div>
   );
}
