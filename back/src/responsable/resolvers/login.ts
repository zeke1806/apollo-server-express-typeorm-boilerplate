import { MutationLoginArgs, Resolver, Token } from "../../types";

import { ResponsableService } from "../responsable.service";
import { setTokens } from "../../libs/json-web-token";

export const login: Resolver<Token | null, {}, {}, MutationLoginArgs> = async (
  _,
  { username, password }
) => {
  const responsableService = new ResponsableService();
  const responsable = await responsableService.getAdminByUsername(username);

  if (!responsable) return null;
  if (responsable.password !== password) return null;

  return {
    accessToken: setTokens(responsable),
  };
};
