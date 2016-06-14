import { setLoggedin, setPassword, resetUser, setUsername } from 'auth-hub-module/lib/actions/user-actions';
import { resetServices } from 'actions/service-actions';
import { loadServices } from 'services/services-services';
import { setLoading } from 'actions/service-actions';
import { goToRoute } from 'auth-hub-module/lib/services/route-services';
import { router } from 'lib/router';

import * as Api from 'lib/api';

export function login() {
  return (dispatch, getState) => {
    dispatch(setLoading(true));
    var user = getState().user;
    var failCallback = function(data){
      dispatch(setLoading(false));
      alert('Bad account');
    }
    Api.verifyUser(user, buildLoginSuccessCallback(dispatch), failCallback);
  }
}

export function findUser(token){
  return (dispatch, getState) => {
    dispatch(setLoading(true));
    var successCallback = (response) => {
      dispatch(setLoading(false));
      console.log(response);
      var userData = response.data.attributes;
      dispatch(setUsername(userData.email))
    }
    var failCallback = (data) => {
      dispatch(setLoading(false));
      alert('Bad token')
    }
    Api.findUser(token, successCallback, failCallback);
  }
}

export function activateUser(token){
  return (dispatch, getState) => {
    dispatch(setLoading(true));
    var failCallback = (data) => {
      dispatch(setLoading(false));
      alert('Bad token')
    }
    var user = getState().user;
    Api.activateUser(token, user, buildLoginSuccessCallback(dispatch), failCallback);
  }
}

export function createUser() {
  return (dispatch, getState) => {
    dispatch(setLoading(true));
    var user = getState().user;
    var successCallback = function(response){
      dispatch(setLoading(false));
      dispatch(setPassword(''));
      dispatch(goToRoute(router.login));
    };
    var failCallback = function(data){
      dispatch(setLoading(false));
      alert('Bad account');
    }
    Api.createUser(user, successCallback, failCallback);
  }
}

export function verifyLoggedIn() {
  return (dispatch, getState) => {
    var user = getState().user;
    var successCallback = $ => {};
    var failCallback = function(data){
      dispatch(resetUser());
      dispatch(resetServices());
      dispatch(goToRoute(router.login));
    }
    Api.verifyLoggedIn(user, successCallback, failCallback);
  }
}

function buildLoginSuccessCallback(dispatch){
  return (response) => {
    var tokenData = response.data.attributes;
    dispatch(setLoading(false));
    dispatch(setLoggedin(tokenData.user_id, tokenData.token));
    dispatch(setPassword(''));
    dispatch(loadServices());
    dispatch(goToRoute(router.myServices));
  }
}