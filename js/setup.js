'use strict';

// config definitions block
var config = {
  wizardsCount: 4,
  data: {
    firstNames: ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    lastNames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
    coatColors: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    eyesColors: ['black', 'red', 'blue', 'yellow', 'green'],
  },
  selectors: {
    setUpBlock: '.setup',
    similar: '.setup-similar',
    similarList: '.setup-similar-list',
    template: '#similar-wizard-template'
  }
};

config.elements = (function () {
  var obj = {};
  for (var selector in config.selectors) {
    if (config.selectors.hasOwnProperty(selector)) {
      obj[selector] = document.querySelector(config.selectors[selector]);
    }
  }
  return obj;
})();

config.elements.wizardTemplate = config
                                .elements
                                .template
                                .content
                                .querySelector('.setup-similar-item');


// functions definitions block
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getName() {
  var firstName = getRandomElement(config.data.firstNames);
  var lastName = getRandomElement(config.data.lastNames);
  var coin = Math.random();
  return coin > 0.5 ? firstName + ' ' + lastName : lastName + ' ' + firstName;
}

function getCoatColor() {
  return getRandomElement(config.data.coatColors);
}

function getEyesColor() {
  return getRandomElement(config.data.eyesColors);
}

function renderWizard() {
  var wizard = config.elements.wizardTemplate.cloneNode(true);
  var name = getName().trim();
  var coatColor = getCoatColor();
  var eyesColor = getEyesColor();
  wizard.querySelector('.setup-similar-label').textContent = name;
  wizard.querySelector('.wizard-coat').style.fill = coatColor;
  wizard.querySelector('.wizard-eyes').style.fill = eyesColor;
  return wizard;
}

function renderWizards(wizardsCount) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizardsCount; i += 1) {
    fragment.appendChild(renderWizard());
  }
  config.elements.similarList.appendChild(fragment);
}

function clear() {
  config.elements.setUpBlock.classList.remove('hidden');
  config.elements.similar.classList.remove('hidden');
}

function setup() {
  clear();
  renderWizards(config.wizardsCount);
}

setup();
