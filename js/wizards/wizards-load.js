'use strict';

(function () {
  var wizardsLoad = {};
  var config = window.config;
  var utils = window.utils;

  function renderWizard(item) {
    var wizard = config.elements.template.wizard.cloneNode(true);
    wizard.querySelector('.setup-similar-label').textContent = item.name;
    wizard.querySelector('.wizard-coat').style.fill = item.colorCoat;
    wizard.querySelector('.wizard-eyes').style.fill = item.colorEyes;
    return wizard;
  }

  function renderWizards(wizardsCount, container) {
    var fragment = document.createDocumentFragment();
    var array = config.wizards.slice(0);
    var item;
    var temp;

    for (var i = 0; i < wizardsCount; i += 1) {
      temp = utils.getRandomNumber(0, array.length - 1);
      item = array.splice(temp, 1)[0];
      fragment.appendChild(renderWizard(item));
    }
    container.appendChild(fragment);
  }

  wizardsLoad.renderWizards = renderWizards;

  window.wizardsLoad = wizardsLoad;
})();
