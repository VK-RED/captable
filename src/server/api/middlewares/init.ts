import { db } from "@/server/db";
import type { Middleware } from "../hono";

export function initMiddleware(): Middleware {
  return async (c, next) => {
    c.set("db", db);

    await next();
  };
}
