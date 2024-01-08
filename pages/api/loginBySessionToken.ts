import type { NextApiRequest, NextApiResponse } from "next";
import { IDbTokenDto, IDbUserDto } from "../../types/dto";
import { getRoutes } from "../../utils/getRoutes";
import { parsedFile } from "../tools/file";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const sessionToken = req.cookies.sessionToken;

  if (!sessionToken) {
    res.status(401);
  }

  const tokens = parsedFile("./db/tokens.json");

  const sessionTokenValid = tokens.find((t: IDbTokenDto) => t.sessionToken === sessionToken);

  if (!sessionTokenValid) {
    res.send("wrong token");
    return;
  }

  const users = parsedFile("./db/users.json");
  const user = users.find((u: IDbUserDto) => u.id === sessionTokenValid.id);

  res.send({
    links: getRoutes(user.role)
  });
}
