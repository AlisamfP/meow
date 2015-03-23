class RegisterController
  ERROR_NO_USERNAME : "Username cannot be empty"
  ERROR_NO_PASSWORD : "Password cannot be empty"
  ERROR_PIN_NOT_NUMERIC : "Pin must be a number"

  constructor: ($cookies, $location, AuthenticatorService) ->
    @cookies  = $cookies
    @location = $location
    @AuthenticatorService = AuthenticatorService

    @location.path "/#{@cookies.uuid}" if @cookies.uuid?

  register: (username, password) =>
    return @errorMessage = @ERROR_NO_USERNAME if _.isEmpty username
    return @errorMessage = @ERROR_NO_PASSWORD if _.isEmpty password
    return @errorMessage = @ERROR_PIN_NOT_NUMERIC unless /^\d+$/.test pin
    @AuthenticatorService.registerWithPin(pin)
    .then (res) =>
      @cookies.uuid = res.uuid
      @cookies.token = res.token
      @location.path "/#{res.uuid}"
    .catch =>
      @errorMessage = "Unable to register a new device. Please try again."

angular.module('blu').controller 'RegisterController', RegisterController
