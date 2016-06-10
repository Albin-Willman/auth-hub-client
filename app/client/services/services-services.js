import * as Api from 'lib/api';

import { addService, removeService, resetServices, setLoading } from 'actions/service-actions';
import { verifyLoggedIn } from 'services/user-services';

export function reloadServices() {
  return (dispatch, getState) => {
    dispatch(resetServices());
    dispatch(loadServices());
  }
}

export function loadServices() {
  return (dispatch, getState) => {
    dispatch(setLoading(true));
    var addServiceFunction = function(serviceData) {
      dispatch(addService(serviceData));
    }
    var successCallback = function(response){
      var data = response.data;
      data.map(transformToServiceObjects).map(addServiceFunction);
      dispatch(setLoading(false));
    };
    var failCallback = function(data){
      dispatch(verifyLoggedIn());
      dispatch(setLoading(false));
      alert('Failed to load services.');
    };
    var user = getState().user;
    Api.loadServices(user, successCallback, failCallback);
  }
}

export function logOut(service) {
  return doLogOut({ service: service });
}

export function logOutAll() {
  return doLogOut({ all_services: 'true' });
}

function doLogOut(payload){
  return (dispatch, getState) => {
    var successCallback = function(response){
      if(response) {
        if (payload.all_services){
          dispatch(resetServices());
        } else {
          dispatch(removeService(payload.service));  
        }
        dispatch(verifyLoggedIn());
      }
    };
    var failCallback = function(data){
      dispatch(verifyLoggedIn());
      alert('Failed to log out.');
    };
    var user = getState().user;
    Api.logout(user, payload, successCallback, failCallback);
  };
}

function transformToServiceObjects(serviceData) {
  return {
    id: serviceData.id,
    label: serviceData.attributes.service,
    createdAt: serviceData.attributes['created-at']
  };
}