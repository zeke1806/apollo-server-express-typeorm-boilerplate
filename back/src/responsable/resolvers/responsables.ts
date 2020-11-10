import { Resolver, Responsable } from "../../types";

import { authGuard } from "../../utils/authGuard";

type R = Resolver<Responsable[], {}, { req: any }>;

export const responsables: R = (_, __, { req }) => {
  const authPayload = authGuard(req);
  return [];
};
