'use strict';

(function () {
  var wizardsCommon = {};
  var config = window.config;
  var utils = window.utils;

  function getName() {
    var firstName = utils.getRandomElement(config.data.firstNames);
    var lastName = utils.getRandomElement(config.data.lastNames);
    var coin = Math.random();
    return coin > 0.5 ? firstName + ' ' + lastName : lastName + ' ' + firstName;
  }

  function getCoatColor() {
    return utils.getRandomElement(config.data.coatColors);
  }

  function getEyesColor() {
    return utils.getRandomElement(config.data.eyesColors);
  }

  function getFireballColor() {
    return utils.getRandomElement(config.data.fireballColors);
  }

  function clearWizards() {
    var container = config.elements.setup.similarList;

    while (container.firstChild) {
      container.firstChild.remove();
    }
  }

  wizardsCommon.getName = getName;
  wizardsCommon.getCoatColor = getCoatColor;
  wizardsCommon.getEyesColor = getEyesColor;
  wizardsCommon.getFireballColor = getFireballColor;
  wizardsCommon.clearWizards = clearWizards;

  window.wizardsCommon = wizardsCommon;
})();
