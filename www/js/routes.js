angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('home', {
    url: '/login',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('registration', {
    url: '/signup',
    templateUrl: 'templates/registration.html',
    controller: 'registrationCtrl'
  })

  .state('registration2', {
    url: '/verify',
    templateUrl: 'templates/registration2.html',
    controller: 'registration2Ctrl'
  })

  .state('registration3', {
    url: '/payment',
    templateUrl: 'templates/registration3.html',
    controller: 'registration3Ctrl'
  })

  .state('myAccount.help', {
    url: '/main',
    views: {
      'side-menu21': {
        templateUrl: 'templates/help.html',
        controller: 'helpCtrl'
      }
    }
  })

  .state('myAccount.help2', {
    url: '/main2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/help2.html',
        controller: 'help2Ctrl'
      }
    }
  })

  .state('myAccount', {
    url: '/side-menu21',
    templateUrl: 'templates/myAccount.html',
    abstract:true
  })

  .state('login', {
    url: '/page6',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

$urlRouterProvider.otherwise('/login')

  

});