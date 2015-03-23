class TriggerService
  constructor: ($http)->
    @http = $http

  meow: (friend, username) =>
    @http.post 'https://justmeow.co/meow', {
      headers:
        to: friend
        from: username
    }


  getFriends: (username)=>
    @http
      .get "https://justmeow.co/friends",
        headers:
          username: username
      .then (response) =>
        friends = []
        return friends unless response.data?.friends?

        friends

angular.module('meow').service 'TriggerService', TriggerService
