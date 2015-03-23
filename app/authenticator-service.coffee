class AuthenticatorService
  constructor: ($q, $http) ->
    @q = $q
    @http = $http

  register: (username, password)=>
    @http.post('https://justmeow.co/register', {
            username: "#{username}"
            password: "#{password}"
        }).then (result) => result.data

  authenticate: (username, password) =>
    @http
      .post "https://justmeow.co/login", username: username, password: password
      .then (result) => result.data.token
      .catch (error) => @q.reject new Error(error.data) 

angular.module('meow').service 'AuthenticatorService', AuthenticatorService

