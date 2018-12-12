(function () {
  'use strict';
  var app = angular.module('taskoli');

  // Image fallback default image set if any missing.
  app.directive('fallbackSrc', function () {
    var fallbackSrc = {
      link: function postLink(scope, elem, iAttrs) {
        if (!elem.attr('src')) {
          elem.attr("src", '/content/img/no-image.png');
        }
        elem.bind('error', function () {
          elem.attr("src", '/content/img/no-image.png');
        });
      }
    }
    return fallbackSrc;
  });
})();