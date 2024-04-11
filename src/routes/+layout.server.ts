import type { ServerLoad, ServerLoadEvent } from "@sveltejs/kit";

export const load: ServerLoad = ({ cookies }) => {
  const auth_session: string | undefined = cookies.get("auth_session");
  return {
    auth_session,
  };
};
