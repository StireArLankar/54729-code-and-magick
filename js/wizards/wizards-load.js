'use strict';

(function () {
  var wizardsLoad = {};
  var config = window.config;

  function renderWizard(item) {
    var wizard = config.elements.template.wizard.cloneNode(true);
    wizard.querySelector('.setup-similar-label').textContent = item.name;
    wizard.querySelector('.wizard-coat').style.fill = item.colorCoat;
    wizard.querySelector('.wizard-eyes').style.fill = item.colorEyes;
    return wizard;
  }

  function renderWizards(wizardsCount, container, coatColor, eyesColor) {
    var fragment = document.createDocumentFragment();

    while (container.firstChild) {
      container.firstChild.remove();
    }

    var array = config.wizards.map(function (wizard) {
      var rating = 0;
      rating = wizard.colorCoat === coatColor ? rating + 2 : rating;
      rating = wizard.colorEyes === eyesColor ? rating + 1 : rating;
      wizard.rating = rating;
      return wizard;
    }).sort(function (a, b) {
      return b.rating - a.rating;
    });

    /* for (var i = 0; i < wizardsCount; i += 1) {
      temp = utils.getRandomNumber(0, array.length - 1);
      item = array.splice(temp, 1)[0];
      fragment.appendChild(renderWizard(item));
    } */

    for (var i = 0; i < wizardsCount; i += 1) {
      fragment.appendChild(renderWizard(array[i]));
    }

    container.appendChild(fragment);
  }

  wizardsLoad.renderWizards = renderWizards;

  window.wizardsLoad = wizardsLoad;
})();
