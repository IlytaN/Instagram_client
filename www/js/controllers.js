angular.module('starter.controllers', [])

  .controller('HomeCtrl', function($scope) {
    $scope.posts = [];
    $scope.loadPosts = function(){
      for(var i = 0; i < 100; i++) {
          $scope.posts.push({id: i, avatar: "img/adam.jpg", username: "Adam Levin",
          picture: "img/adam.jpg", like : 100, commenter: "Ben",
          comment: "You are handsome!!!", number_of_comment: 100,
        time_of_comment: 10});
      }
    }
    $scope.click_like = function() {

    }
  })

  .controller('SearchCtrl', function($scope) {
    $scope.images = [];
    $scope.loadImages = function() {
        for(var i = 0; i < 100; i++) {
            $scope.images.push({id: i, src: "img/adam.jpg"});
        }
    }
  })
  .controller('TakepictureCtrl', function($scope) {
    $scope.tabs = {
        gallery: true,
        photo: false
    }

    $scope.goBack = function()
    {
        $ionicHistory.nextViewOptions({
            disableBack: true
        });
        $state.go('tab.home');
    }

    $scope.photo = function()
    {
        $scope.tabs.photo = true;
        $scope.tabs.gallery = false;
        // activate camera
    }

    $scope.gallery = function()
    {
        $scope.tabs.photo = false;
        $scope.tabs.gallery = true;
        // fetch photos
    }
  })
  .controller('HeartCtrl', function($scope) {})
      .controller('HeartFollowingCtrl', function($scope) {})
      .controller('HeartYouCtrl', function($scope) {})
  .controller('ProfileCtrl', function($scope) {})
;
