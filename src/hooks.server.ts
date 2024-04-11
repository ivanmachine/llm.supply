import { redirect, type Handle } from "@sveltejs/kit";
import { unsealSession } from "./lib/server/cookieSession";

const restrictedPaths = ["/profile"];
export const handle: Handle = async ({ event, resolve }) => {
  // Normal response -------------------------------------------------------|
  const response = await resolve(event);
  if (!restrictedPaths.includes(event.url.pathname)) return response;

  // Restricted response ---------------------------------------------------|
  try {
    const auth_session = event.cookies.get("auth_session");
    const userSession = await unsealSession(auth_session);
    if (userSession) return response; // Authenticated user
  } catch (e) {
    console.error("Error while getting session: ", e);
    // clear cookies just in case, because error is most likely caused by cookie
    response.headers.set(
      "Set-Cookie",
      "auth_session=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly; Secure; SameSite=Strict"
    );
  }

  redirect(302, "/login");
};
