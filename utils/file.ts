import path from "path";
import fs from "fs";

const filePath = (filename: string) => path.resolve(filename);
export const fileBuff = (filename: string) => fs.readFileSync(filePath(filename));
export const parsedFile = (filename: string) => JSON.parse(fileBuff(filename).toString());
export const saveFile = (filename: string, data: string) => fs.writeFileSync(filename, data);
export const imageBuffer = (path: string) => Buffer.from(fileBuff(path)).toString("base64");