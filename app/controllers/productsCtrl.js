app.controller('productsCtrl', function($scope, $stateParams, productsService) {

  init();

  function init() {
    getProduct();
  }

  function getProduct() {
    productsService.getProduct($stateParams.id)
      .then(function(product) {
        $scope.product = product;
      })
      .catch(function(err) {
        console.log('err: ', err);
      });
  }

});
