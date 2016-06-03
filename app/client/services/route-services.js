import { setRoute } from 'actions/route-actions';

export function goToRoute(route) {
  return (dispatch, getState) => {
    dispatch(setRoute(route));
    location.hash = route;
  }
}