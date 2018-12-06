'use strict';

(function () {
  var wizardsMock = {};
  var config = window.config;
  var wizardsCommon = window.wizardsCommon;

  function renderWizard() {
    var wizard = config.elements.template.wizard.cloneNode(true);
    var name = wizardsCommon.getName().trim();
    var coatColor = wizardsCommon.getCoatColor();
    var eyesColor = wizardsCommon.getEyesColor();
    wizard.querySelector('.setup-similar-label').textContent = name;
    wizard.querySelector('.wizard-coat').style.fill = coatColor;
    wizard.querySelector('.wizard-eyes').style.fill = eyesColor;
    return wizard;
  }

  function renderWizards(wizardsCount, container) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizardsCount; i += 1) {
      fragment.appendChild(renderWizard());
    }
    container.appendChild(fragment);
  }

  wizardsMock.renderWizards = renderWizards;

  window.wizardsMock = wizardsMock;
})();
