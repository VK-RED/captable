import { createTRPCRouter } from "@/trpc/api/trpc";
import { onboardingRouter } from "../routers/onboarding-router/router";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  onboarding: onboardingRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;