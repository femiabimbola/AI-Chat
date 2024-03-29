"use client";

import {PropsWithChildren, useState} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {trpc} from "@/app/_trpc/client";
import {httpBatchLink} from "@trpc/client";

const Providers = ({children}: PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient()); //change the array to normal
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [httpBatchLink({url: "http://localhost:3000/api/trpc"})],
    })
  );
  return (
    //It allow trpc to be used in any of the folder
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
};

export default Providers;
