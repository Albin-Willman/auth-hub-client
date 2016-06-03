import { setLoggedin, setPassword, resetUser } from 'actions/user-actions';
import { resetServices } from 'actions/service-actions';
import { loadServices } from 'services/services-services';
import { goToRoute } from 'services/route-services';

import * as Api from 'lib/api';

export function login() {
  return (dispatch, getState) => {
    var user = getState().user;
    var successCallback = function(response){
      var tokenData = response.data.attributes;
      dispatch(setLoggedin(tokenData.user_id, tokenData.token));
      dispatch(setPassword(''));
      dispatch(loadServices());
      dispatch(goToRoute('/my-services'));
    };
    var failCallback = function(data){
      alert('Bad account');
    }
    Api.verifyUser(user, successCallback, failCallback);
  }
}

export function createUser() {
  return (dispatch, getState) => {
    var user = getState().user;
    var successCallback = function(response){
      dispatch(setPassword(''));
      dispatch(goToRoute('/'));
    };
    var failCallback = function(data){
      alert('Bad account');
    }
    Api.createUser(user, successCallback, failCallback);
  }
}

export function verifyLoggedIn() {
  return (dispatch, getState) => {
    var user = getState().user;
    var successCallback = $ => {};
    console.log('reset', resetServices);
    var failCallback = function(data){
      dispatch(resetUser());
      dispatch(resetServices());
      dispatch(goToRoute('/'));
    }
    Api.verifyLoggedIn(user, successCallback, failCallback);
  }
}
