'use strict';
/**
 * @ngdoc overview
 * @name crrApp
 * @description
 * # crrApp
 *
 * Main module of the application.
 */

angular.module('crrApp',["ui.router","ngCookies"]).constant("server","http://www.somenote.cn:1510").controller("app",["$scope","$http",function ($scope,$http) {
  }]).config(["$stateProvider","$urlRouterProvider",function ($stateProvider,$urlRouterProvider){
  	$stateProvider.state("a",{
  		url:"/a",
  		templateUrl:"views/a.html",
  		controller:"dl"
  	}).state("b",{
  		url:"/b",
  		templateUrl:"views/b.html",
  		controller:"zc"
  	}).state("c",{
  		url:"/c",
  		templateUrl:"views/c.html",
  		controller:"sj"
  	}).state("d",{
  		url:"/d?id&title&content",
  		templateUrl:"views/d.html",
  		controller:"sj"
  	}).state("e",{
  		url:"/e",
  		templateUrl:"views/e.html",
  		controller:"sj"
  	})
  	$urlRouterProvider.when('','/a');
  }])