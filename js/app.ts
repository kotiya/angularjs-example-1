/*global angular */

/**
 * The main TodoMVC app module
 *
 * @type {angular.Module}
 */
angular.module('todomvc', ['ngRoute', 'ngResource'])
	.config(($routeProvider: angular.route.IRouteProvider) => {
		'use strict';

		const routeConfig: angular.route.IRoute = {
			controller: 'TodoCtrl',
			templateUrl: 'todomvc-index.html',
			resolve: {
				store: (todoStorage: angular.IPromise<any>) => {
					// Get the correct module (API or localStorage).
					return todoStorage.then((module: any) => {
						module.get(); // Fetch the todo records in the background.
						return module;
					});
				}
			}
		};

		$routeProvider
			.when('/', routeConfig)
			.when('/:status', routeConfig)
			.otherwise({
				redirectTo: '/'
			});
	});