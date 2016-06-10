import { servicesReducer } from 'reducers/services-reducer';
import { routeReducer } from 'auth-hub-module/lib/reducers/route-reducer';
import { userReducer } from 'auth-hub-module/lib/reducers/user-reducer';

export const reducers = {
  user: userReducer,
  services: servicesReducer,
  routes: routeReducer
};
