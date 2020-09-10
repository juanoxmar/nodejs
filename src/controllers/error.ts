import { RequestType } from '../@types/types';

const pageNotFound: RequestType = (_req, res, _next) => {
  res.status(404).render('404', {
    pageTitle: 'Page Not Found',
    path: 'err',
  });
};

export default pageNotFound;
