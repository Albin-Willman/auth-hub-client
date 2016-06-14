let config = {
  baseUrl: '/api/v1'
  // baseUrl: 'https://share-tracker.herokuapp.com/api/'
}

export function verifyUser(user, callback, failCallback){
  $.ajax({
    method: 'POST',
    url: buildUrl('/users/login'),
    dataType: 'json',
    data: {
      "user": {
        "email": user.username,
        "password": user.password
      },
      "service": "Services"
    },
    success: callback,
    error: failCallback
  });
}

export function findUser(token, callback, failCallback){
  $.ajax({
    method: 'GET',
    url: buildUrl('/users/' + token + '/activate'),
    dataType: 'json',
    success: callback,
    error: failCallback
  })
}

export function activateUser(token, user, callback, failCallback){
  $.ajax({
    method: 'PATCH',
    url: buildUrl('/users/' + token + '/activate'),
    data: {
      "user": {
        "password": user.password
      },
      "service": "Services"
    },
    dataType: 'json',
    success: callback,
    error: failCallback
  });
}

export function createUser(user, callback, failCallback){
  $.ajax({
    method: 'POST',
    url: buildUrl('/users'),
    dataType: 'json',
    data: {
      "user": {
        "email": user.username
      }
    },
    success: callback,
    error: failCallback
  });
}

export function verifyLoggedIn(user, callback, failCallback){
  makeAuthorizedRequest(user.token, 'GET', '/verify', null, callback, failCallback);
}

export function loadServices(user, callback, failCallback){
  makeAuthorizedRequest(user.token, 'GET', '/users/tokens', null, callback, failCallback);
}

export function logout(user, payload, callback, failCallback) {
  makeAuthorizedRequest(user.token, 'DELETE', '/users/logout', payload, callback, failCallback);
}

function makeAuthorizedRequest(token, verb, path, payload, callback, failCallback) {
  $.ajax({
    method: verb,
    dataType: 'json',
    url: buildUrl(path),
    headers: {
      'Authorization' : 'Token token=' + token
    },
    data: payload,
    success: callback,
    error: failCallback
  });
}

function buildUrl(path) {
  return config.baseUrl + path
}