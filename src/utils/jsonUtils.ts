import fs from "fs";
import path from "path";

export function writeJson(fileName: string, data: object): void {
  const filePath = path.join(process.cwd(), "src", "testdata", fileName);
  fs.writeFileSync(
    filePath,
    JSON.stringify(data, null, 2),
    "utf-8"
  );
}

export function readJson(fileName: string): any {
  const filePath = path.join(process.cwd(), "src", "testdata", fileName);
  return JSON.parse(
    fs.readFileSync(filePath, "utf-8")
  );
}