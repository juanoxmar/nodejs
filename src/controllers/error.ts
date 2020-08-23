import { requestType } from '../@types/types';

export const pageNotFound: requestType = (req, res, next) => {
  res.status(404).render('404', {
    pageTitle: 'Page Not Found',
    path: 'err',
  });
};
