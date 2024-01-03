import { publicProcedure, router } from './trpc';
 
export const appRouter = router({
  test: publicProcedure.query(() => {
    return 'the backend works'
  })
});

export type AppRouter = typeof appRouter;