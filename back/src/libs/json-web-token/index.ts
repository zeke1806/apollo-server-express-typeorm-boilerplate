import { sign, verify } from "jsonwebtoken";

import { ResponsableEntity } from "../../responsable/responsable.entity";
import configs from "../../configs";

interface Payload {
  id: number;
}
export interface AuthPayload {
  user: Payload;
  iat: number;
  exp: number;
}

export function setTokens(responsable: ResponsableEntity) {
  const sevenDays = 60 * 60 * 24 * 7 * 1000;
  // const fifteenMins = 60 * 15 * 1000;

  const payload: Payload = {
    id: responsable.personId,
  };

  const accessToken = sign({ user: payload }, configs.server.tokenSecret, {
    expiresIn: sevenDays,
  });

  return accessToken;
}

export function validateToken(token: string): AuthPayload | null {
  try {
    return verify(token, configs.server.tokenSecret) as AuthPayload;
  } catch {
    return null;
  }
}
