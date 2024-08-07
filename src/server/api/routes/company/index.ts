import type { PublicAPI } from "@/server/api/hono";
import getMany from "./getMany";
import getOne from "./getOne";

export const registerCompanyRoutes = (api: PublicAPI) => {
  getOne(api);
  getMany(api);
};
