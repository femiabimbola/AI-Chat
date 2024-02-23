// import { publicProcedure, router } from './trpc';
import { db } from '@/lib/db';
import { publicProcedure, router } from '@/trpc/trpc';
import { getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server"
import { TRPCError } from '@trpc/server';

export const appRouter = router({
  test: publicProcedure.query(() => {
    return 'the backend works'
  }),

  authCallback: publicProcedure.query(async () => {
    const { getUser } = getKindeServerSession()
    const user =  getUser()

   
    if (!user.id || !user.email) throw new TRPCError({code:"UNAUTHORIZED"})

    console.log("hey there o")
    // check if the user is in the database
    const dbUser = await db.cWPuser.findFirst({
      where: { id: user.id }
    })
  

    if(!dbUser) { 
      // create user in the db
      await db.cWPuser.create({
        data: { id: user.id, email: user.email}
      })
    }
    return {success:true}

  })
});

export type AppRouter = typeof appRouter;