'use strict';

(function () {
  var config = window.config;
  var wizardsCommon = window.wizardsCommon;

  config.elements.setup.wizardCoat.addEventListener('click', function () {
    var coat = config.elements.setup.wizardCoat;
    var coatColor = wizardsCommon.getCoatColor();
    while (coat.style.fill === coatColor) {
      coatColor = wizardsCommon.getCoatColor();
    }

    coat.style.fill = coatColor;
  });

  config.elements.setup.wizardEyes.addEventListener('click', function () {
    var eyes = config.elements.setup.wizardEyes;
    var eyesColor = wizardsCommon.getEyesColor();
    while (eyes.style.fill === eyesColor) {
      eyesColor = wizardsCommon.getEyesColor();
    }

    eyes.style.fill = eyesColor;
  });

  config.elements.setup.fireball.addEventListener('click', function () {
    var fireball = config.elements.setup.fireball;
    var fireballColor = wizardsCommon.getFireballColor();
    while (fireball.style.backgroundColor === fireballColor) {
      fireballColor = wizardsCommon.getFireballColor();
    }

    fireball.style.backgroundColor = fireballColor;
  });
})();
