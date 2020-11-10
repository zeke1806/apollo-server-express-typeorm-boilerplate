import { MutationLoginArgs, Resolver, Token } from "../../types";

import { ResponsableService } from "../responsable.service";
import bcrypt from "bcrypt";
import { setTokens } from "../../libs/json-web-token";

type T = Resolver<Token | null, {}, {}, MutationLoginArgs>;

export const login: T = async (_, { username, password }) => {
  const responsableService = new ResponsableService();
  const responsable = await responsableService.getAdminByUsername(username);

  if (!responsable) return null;
  if (!(await bcrypt.compare(password, responsable.password))) return null;

  return {
    accessToken: setTokens(responsable),
  };
};
