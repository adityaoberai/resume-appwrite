import { getStaticFile } from './utils.js';
import { getPdf } from './pdf.js';

export default async ({ req, res, log }) => {
  
  if (req.method === 'GET' && req.path === '/') {
    log('View website');
    return res.send(getStaticFile('resume.html'), 200, {
      'Content-Type': 'text/html; charset=utf-8',
    });
  }

  if (req.method === 'GET' && req.path === '/download') {
    log('Start download');
    var pdf = await getPdf(getStaticFile('resume.html'));
    return res.send(pdf, 200, {
      'Content-Type': 'application/pdf',
    });
  }
};
