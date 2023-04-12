import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "~/server/api/trpc";

export const listingsRouter = createTRPCRouter({
 
 create:protectedProcedure.input(z.object({
  name:z.string() , 
  description:z.string(),
  price:z.number(),
 })).mutation(async({input , ctx})=>{
  const listing = await ctx.prisma.listing.create({
    data:{...input, userId :ctx?.auth?.userId}
  })
 })
 
 
 
  // hello: publicProcedure
  //   .input(z.object({ text: z.string() }))
  //   .query(({ input }) => {
  //     return {
  //       greeting: `Hello ${input.text}`,
  //     };
  //   }),
  // getAll: publicProcedure.query(({ ctx }) => {
  //   return ctx.prisma.example.findMany();
  // }),
});
