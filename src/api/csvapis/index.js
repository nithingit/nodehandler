import * as handlers from './handlers';

let routes = 
  {
    method: 'POST',
    path: '/csv2json',
    handler: handlers.csv2json
  }
;

export default routes;
