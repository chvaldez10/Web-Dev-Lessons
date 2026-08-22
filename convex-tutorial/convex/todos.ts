import { query } from "./_generated/server";

export const getTodos = query({
  handler: async (ctx) => {
    const todos = await ctx.db.query("todos").collect();
    return todos.reverse();
  },
});
