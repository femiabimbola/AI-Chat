// import { publicProcedure, router } from './trpc';
import { publicProcedure, router } from '@/trpc/trpc';
import { getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server"
import { TRPCError } from '@trpc/server';

export const appRouter = router({
  test: publicProcedure.query(() => {
    return 'the backend works'
  }),
  authCallback: publicProcedure.query(() => {
    const {getUser} = getKindeServerSession()
    const user = getUser()
    if(!user || !user.email) throw new TRPCError({code:"UNAUTHORIZED"})
  })
});

export type AppRouter = typeof appRouter;