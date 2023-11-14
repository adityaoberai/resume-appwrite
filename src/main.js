import { getStaticFile } from './utils.js';
import { getPdf } from './pdf.js';

export default async ({ req, res }) => {
  
  if (req.method === 'GET' && req.path === '/') {
    return res.send(getStaticFile('resume.html'), 200, {
      'Content-Type': 'text/html; charset=utf-8',
    });
  }

  if (req.method === 'GET' && req.path === '/download') {
    return res.send(getPdf(getStaticFile('resume.html')), 200, {
      'Content-Type': 'application/pdf',
    });
  }
};
