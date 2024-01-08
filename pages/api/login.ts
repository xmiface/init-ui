import { faker } from "@faker-js/faker";
import type { NextApiRequest, NextApiResponse } from "next";
import { IDbUserDto } from "../../types/dto";
import { getRoutes } from "../../utils/getRoutes";
import { parsedFile, saveFile } from "../tools/file";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const users = parsedFile("./db/users.json") as IDbUserDto[];
  const userWithLogin = users.find((user) => user.login === req.body.login);

  if (!userWithLogin) {
    res.send("user not found");
    return;
  }

  const correctPass = userWithLogin.password === req.body.password;
  if (!correctPass) {
    res.send("wrong password");
    return;
  }

  const refreshToken = faker.datatype.uuid();
  const sessionToken = faker.datatype.uuid();

  const tokens = parsedFile("./db/tokens.json");
  tokens.push({ id: userWithLogin.id, refreshToken, sessionToken });
  const stringToSave = JSON.stringify(tokens);
  saveFile("./db/tokens.json", stringToSave);

  res.setHeader("Set-Cookie", `sessionToken=${sessionToken}; refreshToken=${refreshToken}`);

  res.send({
    status: 200,
    refreshToken,
    sessionToken,
    links: getRoutes(userWithLogin.role)
  });
}
