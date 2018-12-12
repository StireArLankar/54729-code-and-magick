'use strict';

(function () {
  var config = window.config;
  var debounce = {};

  function init(cb) {
    var lastTimeout = null;

    return function () {
      var parameters = arguments;

      if (lastTimeout) {
        clearTimeout(lastTimeout);
      }

      lastTimeout = setTimeout(function () {
        cb.apply(null, parameters);
      }, config.debounceDelay);
    };
  }

  debounce.init = init;
  window.debounce = debounce;
})();
