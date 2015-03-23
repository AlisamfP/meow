class HomeController
  constructor: ($cookies, $location, DeviceService, MeowService) ->
    @cookies = $cookies
    @location = $location
    @DeviceService = DeviceService
    @MeowService = MeowService
    @colorIndex = 0

    return @location.path('/') unless @cookies.uuid
    return @redirectToLogin() unless @cookies.token

    devicePromise = @DeviceService.getDevice(@cookies.uuid, @cookies.token)
    devicePromise.catch @redirectToLogin
    devicePromise.then (@device) =>
      @triggersLoaded = true
      return @notClaimed = true unless @device.owner?

      @refreshTriggers().catch (error) =>
        @errorMessage = error.message


  redirectToLogin: =>
    @location.path "/#{@cookies.uuid}/login"


  sendMeow: (friend) =>
    friend.meowing = true
    @MeowService.meow(friend).then ()=>
      delete friend.meowing


angular.module('meow').controller 'HomeController', HomeController
