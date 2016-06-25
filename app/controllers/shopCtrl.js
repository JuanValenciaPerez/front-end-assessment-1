app.controller('shopCtrl', function($scope, productsService) {

  init();

  function init() {
    getProducts();
  }

  function getProducts() {
    productsService.getProducts()
      .then(function(products) {
        $scope.products = products;
        console.log('$scope.products: ', $scope.products);
      })
      .catch(function(err) {
        console.log('err: ', err);
      });
  }

});
