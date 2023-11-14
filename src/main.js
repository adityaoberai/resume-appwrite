import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

export default async ({ req, res, log, error }) => {
  
  if (req.method === 'GET') {
    var filename = fileURLToPath(import.meta.url);
    var dirname = path.dirname(filename);
    var staticFolder = path.join(dirname, '../static');
    var resume = fs.readFileSync(path.join(staticFolder, 'resume.html')).toString()

    return res.send(resume, 200, {
      'Content-Type': 'text/html; charset=utf-8',
    });
  }
};
