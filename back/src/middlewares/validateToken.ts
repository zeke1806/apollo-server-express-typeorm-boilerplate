import { validateToken } from "../libs/json-web-token";

export async function validateTokenMiddleware(req: any, res: any, next: any) {
  const [bearer, accessToken] = req.headers["authorization"].split(" ");
  if (!accessToken || bearer !== "Bearer") return next();

  const decodedAccessToken = validateToken(accessToken);
  if (decodedAccessToken) {
    req.authPayload = decodedAccessToken;
    return next();
  }

  return next();
}
