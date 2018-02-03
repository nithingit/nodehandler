import testRoutes from './testapis'; 
import prodRoutes from './prodapis'; 
import csvRoutes from './csvapis'; 

let routes = [];
routes.push(testRoutes);
routes.push(prodRoutes);
routes.push(csvRoutes);

export default routes;