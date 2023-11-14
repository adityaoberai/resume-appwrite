import { getStaticFile } from './utils.js';

export default async ({ req, res }) => {
  
  if (req.method === 'GET') {
    return res.send(getStaticFile('resume.html'), 200, {
      'Content-Type': 'text/html; charset=utf-8',
    });
  }
};
