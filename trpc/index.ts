// import { publicProcedure, router } from './trpc';
import { publicProcedure, router } from '@/trpc/trpc';
import { getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server"
import { TRPCError } from '@trpc/server';

export const appRouter = router({
  test: publicProcedure.query(() => {
    return 'the backend works'
  }),
  authCallback: publicProcedure.query(async () => {
    const {getUser} = await getKindeServerSession()
    const user =  getUser()

    if (!user.id || !user.email) throw new TRPCError({code:"UNAUTHORIZED"})

    // check if the user is in the database

    return {success:true}

  })
});

export type AppRouter = typeof appRouter;