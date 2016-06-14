
/**
* Register your development apis as router middlewars
*/

var express = require('express');
var router = express.Router();

router.get('/v1/verify', function (req, res) {
  res.send({
    data: {
      attributes: {
        user_id: '1',
        token: 'token'
      }
    }
  });
});

router.delete('/v1/users/logout', function (req, res){
  res.send({
    data: true
  });
});

router.post('/v1/users/login', function (req, res) {
  res.send({
    "data":{
      "id":"1",
      "type":"tokens",
      "attributes":{
        "service":"Services",
        "token":"h6CaY4bbNy7F2UdNtKi1gvTm",
        "user-id":1,
        "created-at":"2016-06-10T15:59:17.000Z"
      }
    }
  });
});

router.patch('/v1/users/:token/activate', function (req, res) {
  res.send({
    "data":{
      "id":"1",
      "type":"tokens",
      "attributes":{
        "service":"Services",
        "token":"h6CaY4bbNy7F2UdNtKi1gvTm",
        "user-id":1,
        "created-at":"2016-06-10T15:59:17.000Z"
      }
    }
  });
});

router.get('/v1/users/:token/activate', function (req, res) {
  res.send({
    "data": {
      "id": "1",
      "type": "users",
      "attributes": {
        "email": "test@example.com",
        "name": null
      }
    }
  });
});

router.get('/v1/users/tokens', function(req, res) {
  res.send( {
    "data":[
    {
      "id":"1",
      "type":"tokens",
      "attributes":{
        "service":"Services",
        "token":"h6CaY4bbNy7F2UdNtKi1gvTm",
        "user-id":1,
        "created-at":"2016-06-10T15:59:17.000Z"
      }
    }
    ]
  });
});

module.exports = router;
