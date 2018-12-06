'use strict';

(function () {
  window.fireballSize = 22;
  window.wizardSpeed = 3;
  window.wizardWidth = 70;

  window.getFireballSpeed = function (left) {
    return left ? 5 : 2;
  };

  window.getWizardHeight = function () {
    return 1.337 * window.wizardWidth;
  };

  window.getWizardX = function (width) {
    return 0.5 * width;
  };

  window.getWizardY = function (height) {
    return 1 / 3 * height;
  };
})();
