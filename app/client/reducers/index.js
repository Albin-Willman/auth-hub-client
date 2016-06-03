import { userReducer } from 'reducers/user-reducer';
import { servicesReducer } from 'reducers/services-reducer';
import { routeReducer } from 'reducers/route-reducer';

export const reducers = {
  user: userReducer,
  services: servicesReducer,
  routes: routeReducer
};
