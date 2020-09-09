import { requestType } from '../@types/types';

const pageNotFound: requestType = (req, res, next) => {
  res.status(404).render('404', {
    pageTitle: 'Page Not Found',
    path: 'err',
  });
};

export default pageNotFound;
