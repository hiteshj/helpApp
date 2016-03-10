angular.module('app.controllers', ['ionic'])
  
.controller('homeCtrl', function($scope, $ionicLoading, $rootScope) {
  $scope.user = {};
  $scope.error = {};
  $ionicLoading.hide();
  
  $scope.loginUser = function(){
    $ionicLoading.show({
      content: 'Loading',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0
    });
    $scope.rememberme = false;
    if (typeof $scope.user.rememberme != "undefined") {
      $scope.rememberme = $scope.user.rememberme;
    }
    
    //we need to add sign API get get response
    
    
  }

})
   
.controller('registrationCtrl', function($scope, $ionicPopup, $state) {



  $scope.showConfirm = function() {
    $scope.data = {};
    // An elaborate, custom popup
    var myPopup = $ionicPopup.confirm({
      template: '<ion-item class="item-checkbox"><label class="checkbox"><input type="checkbox" required ng-model="data.inputCheckbox"></label>I confirm that I have read Help App’s Terms and Conditions and Privacy Policy and accept them by selecting the checkbox.</ion-item>',
      title: ' ',
      subTitle: ' ',
      buttons: [
	{
	  text: 'Cancel',
	  onTap: function(e) {
	    return $state.go('home');
	  }
	},
	{
	  text: '<ion-item><input type="submit" class="button" ui-sref="tab.newpost>Next</ion-item>',
	  type: 'button-positive',
	  onTap: function(e) {
	    return $state.go('registration2');
	  }
	}
      ]
    });
  };


})
   
.controller('registration2Ctrl', function($scope) {

})
   
.controller('registration3Ctrl', function($scope, $ionicPopup, $state) {

	$scope.showConfirm = function() {
  $scope.data = {};

  // An elaborate, custom popup
  var myPopup = $ionicPopup.confirm({
    template: '<center>Please confirm your email address. The verification email has been sent to: <br> <b> jsmith@email.com</b></center>',
    title: 'Thanks for signing up for Help!',
    subTitle: ' ',
    buttons: [
      { text: 'Resend Email',
      	 },
      {
        text: '<ion-item><input type="submit" class="button" ui-sref="tab.newpost>Next</ion-item>',
        type: 'button-positive',
        onTap: function(e) {
          return $state.go('myAccount.help');
        }
      }
    ]
  });


 };

})
   
.controller('helpCtrl', function($scope) {
  /*$(function() {
    var select = $( "#minbeds" );
    var slider = $( "<div id='slider'></div>" ).insertAfter( select ).slider({
      min: 1,
      max: 6,
      range: "min",
      value: select[ 0 ].selectedIndex + 1,
      slide: function( event, ui ) {
        select[ 0 ].selectedIndex = ui.value - 1;
      }
    });
    $( "#minbeds" ).change(function() {
      slider.slider( "value", this.selectedIndex + 1 );
    });
  });
  */

})
   
.controller('help2Ctrl', function($scope) {

})
      
.controller('loginCtrl', function($scope) {

})
 