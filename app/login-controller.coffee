class LoginController
  constructor: (AuthenticatorService, $location, $routeParams, $cookies) ->
    @AuthenticatorService = AuthenticatorService
    @location = $location
    @cookies = $cookies
    @username = $routeParams.username

  login: (username, password) =>
    @AuthenticatorService.authenticate username, password
      .then (token) =>
        @cookies.username = username
        @cookies.password = password
        @location.path "/#{username}"
      .catch (error) =>
        @errorMessage = error.message


angular.module('meow').controller 'LoginController', LoginController
