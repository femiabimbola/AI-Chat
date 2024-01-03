// The - tells nextjs the folder is not routable
// Trpc is to determine exact data type gotten from an api call

import { AppRouter } from "@/trpc"
import {createTRPCReact} from "@trpc/react-query"

export const trpc = createTRPCReact<AppRouter>({})