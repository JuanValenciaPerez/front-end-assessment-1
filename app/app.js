var app = angular.module('assessment', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'views/home.html',
            controller: 'homeCtrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'views/about.html',
            controller: 'aboutCtrl'
        })
        .state('blog', {
            url: '/blog',
            templateUrl: 'views/blog.html',
            controller: 'blogCtrl'
        })
        .state('shop', {
            url: '/shop',
            templateUrl: 'views/shop.html',
            controller: 'shopCtrl'
        })
        .state('products', {
            url: '/products/:id',
            templateUrl: 'views/product-details.html',
            controller: 'productsCtrl'
        });

    $urlRouterProvider
        .otherwise('/');
});
