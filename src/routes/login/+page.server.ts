import type { Actions } from "@sveltejs/kit";
import { sealSession } from "../../lib/server/cookieSession";

export const actions = {
  login: async (event) => {
    // login user
    try {
      const sealedSession = await sealSession({
        user: "ivan.tarnyagin@gmail.com",
      });
      event.cookies.set("auth_session", sealedSession, {
        sameSite: "strict",
        httpOnly: true,
        path: "/",
      });
    } catch (e) {
      console.error("Error setting cookie: ", e);
    }
  },
} satisfies Actions;
