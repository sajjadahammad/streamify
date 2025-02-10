import { promises as fs } from 'fs';
import path from 'path';

export async function readDB() {
  const filePath = path.join(process.cwd(), 'db.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContents);
}