app.factory('productsService', function($http) {

  function getProducts() {
    return $http({
      method: 'GET',
      url: 'https://dev-assessment.firebaseio.com/products.json'
    }).then(function (res) {
      console.log('res.data: ', res.data);

      var products = [];

      for(var name in res.data) {
          // console.log('name: ', name);

          var product = res.data[name];

          // console.log('product: ', product);

          product.id = name;
          products.push(product);
      }

      return products;
    }, function (err) {
      console.log('err: ', err);
    });
  }

  function getProduct(id) {
    var url = 'https://dev-assessment.firebaseio.com/products/' + id + '.json';

    return $http({
      method: 'GET',
      url: url
    }).then(function (res) {
      console.log('product: ', res);
      return res.data;
    }, function (err) {
      console.log('err: ', err);
    });
  }

  return {
    getProducts: getProducts,
    getProduct: getProduct
  };

});
