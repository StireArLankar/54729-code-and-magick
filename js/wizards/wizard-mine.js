'use strict';

(function () {
  var config = window.config;
  var wizardsCommon = window.wizardsCommon;
  var block = config.elements.setup;
  var wizardsLoad = window.wizardsLoad;
  var debounce = window.debounce;

  var debouncerCoat = debounce.init(function (count, thisBlock, coatColor, eyesColor) {
    wizardsLoad.renderWizards(count, thisBlock, coatColor, eyesColor);
  });

  var debouncerEyes = debounce.init(function (count, thisBlock, coatColor, eyesColor) {
    wizardsLoad.renderWizards(count, thisBlock, coatColor, eyesColor);
  });

  block.wizardCoat.addEventListener('click', function () {
    var coat = block.wizardCoat;
    var coatInput = block.coatInput;
    var coatColor = wizardsCommon.getCoatColor();

    while (coat.style.fill === coatColor) {
      coatColor = wizardsCommon.getCoatColor();
    }

    coat.style.fill = coatColor;
    coatInput.value = coatColor;

    debouncerCoat(config.wizardsCount, block.similarList, coatColor, block.eyesInput.value);
  });

  block.wizardEyes.addEventListener('click', function () {
    var eyes = block.wizardEyes;
    var eyesInput = block.eyesInput;
    var eyesColor = wizardsCommon.getEyesColor();

    while (eyes.style.fill === eyesColor) {
      eyesColor = wizardsCommon.getEyesColor();
    }

    eyes.style.fill = eyesColor;
    eyesInput.value = eyesColor;

    debouncerEyes(config.wizardsCount, block.similarList, block.coatInput.value, eyesColor);
  });

  block.fireball.addEventListener('click', function () {
    var fireball = block.fireball;
    var fireballInput = block.fireballInput;
    var fireballColor = wizardsCommon.getFireballColor();
    while (fireball.style.backgroundColor === fireballColor) {
      fireballColor = wizardsCommon.getFireballColor();
    }

    fireball.style.backgroundColor = fireballColor;
    fireballInput.value = fireballColor;
  });
})();
