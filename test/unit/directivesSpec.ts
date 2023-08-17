/*global describe, it, beforeEach, inject, expect, angular*/
(() => {
	'use strict';

	beforeEach(angular.mock.module('todomvc'));

	describe('todoFocus directive', () => {
		let scope: angular.IScope;
		let compile: angular.ICompileService;
		let browser: angular.IBrowserService;

		beforeEach(angular.mock.inject(($rootScope: angular.IRootScopeService, $compile: angular.ICompileService, $browser: angular.IBrowserService) => {
			scope = $rootScope.$new();
			compile = $compile;
			browser = $browser;
		}));

		it('should focus on truthy expression', () => {
			const el = angular.element('<input todo-focus="focus">');
			scope.focus = false;

			compile(el)(scope);
			expect(browser.deferredFns.length).toBe(0);

			scope.$apply(() => {
				scope.focus = true;
			});

			expect(browser.deferredFns.length).toBe(1);
		});
	});
})();
