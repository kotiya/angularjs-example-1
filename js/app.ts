/*global angular */

/**
 * The main TodoMVC app module
 *
 * @type {angular.Module}
 */
angular.module('todomvc', ['ngRoute', 'ngResource'])
    .config(function ($routeProvider: angular.route.IRouteProvider) {
        'use strict';

        let routeConfig: angular.route.IRoute = {
            controller: 'TodoCtrl',
            templateUrl: 'todomvc-index.html',
            resolve: {
                store: function (todoStorage: any): any {
                    // Get the correct module (API or localStorage).
                    return todoStorage.then(function (module: any): any {
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