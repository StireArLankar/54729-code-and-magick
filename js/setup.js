'use strict';

// config definitions block
var config = {
  wizardsCount: 4,
  keyCode: {
    esc: 27,
    enter: 13
  },
  data: {
    firstNames: ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    lastNames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
    coatColors: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    eyesColors: ['black', 'red', 'blue', 'yellow', 'green'],
    fireballColors: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
  },
  selectors: {
    setup: {
      root: '.setup',
      form: '.setup-wizard-form',
      open: '.setup-open-icon',
      close: '.setup-close',
      upload: '.upload',
      input: '.setup-user-name',
      submit: '.setup-submit',
      similar: '.setup-similar',
      similarList: '.setup-similar-list',
      wizardCoat: '.setup-wizard .wizard-coat',
      wizardEyes: '.setup-wizard .wizard-eyes',
      fireball: '.setup-fireball-wrap'
    },
    template: {
      wizard: {
        root: '#similar-wizard-template',
        cont: '.setup-similar-item'
      }
    }
  },
  elements: {}
};

config.elements.setup = (function () {
  var obj = {};
  for (var selector in config.selectors.setup) {
    if (config.selectors.setup.hasOwnProperty(selector)) {
      obj[selector] = document.querySelector(config.selectors.setup[selector]);
    }
  }
  return obj;
})();

config.elements.template = (function () {
  var obj = {};
  var temp1;
  var temp2;
  for (var selector in config.selectors.template) {
    if (config.selectors.template.hasOwnProperty(selector)) {
      temp2 = config.selectors.template[selector].cont;
      temp1 = config.selectors.template[selector].root;
      obj[selector] = document.querySelector(temp1)
                              .content
                              .querySelector(temp2);
    }
  }
  return obj;
})();


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

function getFireballColor() {
  return getRandomElement(config.data.fireballColors);
}

function renderWizard() {
  var wizard = config.elements.template.wizard.cloneNode(true);
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
  config.elements.setup.similarList.appendChild(fragment);
}

function clear() {
  config.elements.setup.similar.classList.remove('hidden');
}

function setup() {
  clear();
  renderWizards(config.wizardsCount);
}

function openPopup() {
  config.elements.setup.root.classList.remove('hidden');
  config.elements.setup.root.style.left = '';
  config.elements.setup.root.style.top = '';
  document.addEventListener('keydown', onPopupEscPress);
}

function closePopup() {
  config.elements.setup.root.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
}

function onPopupEscPress(evt) {
  if (evt.keyCode === config.keyCode.esc) {
    closePopup();
  }
}

config.elements.setup.open.addEventListener('click', function () {
  openPopup();
});

config.elements.setup.open.addEventListener('keydown', function (evt) {
  if (evt.keyCode === config.keyCode.enter) {
    openPopup();
  }
});

config.elements.setup.close.addEventListener('click', function () {
  closePopup();
});

config.elements.setup.close.addEventListener('keydown', function (evt) {
  if (evt.keyCode === config.keyCode.enter) {
    closePopup();
  }
});

config.elements.setup.input.addEventListener('keydown', function (evt) {
  if (evt.keyCode === config.keyCode.esc) {
    evt.stopPropagation();
  }
});

config.elements.setup.submit.addEventListener('click', function () {
  config.elements.setup.form.submit();
});

config.elements.setup.submit.addEventListener('keydown', function (evt) {
  if (evt.keyCode === config.keyCode.enter) {
    config.elements.setup.form.submit();
  }
});

config.elements.setup.wizardCoat.addEventListener('click', function () {
  var coat = config.elements.setup.wizardCoat;
  var coatColor = getCoatColor();
  while (coat.style.fill === coatColor) {
    coatColor = getCoatColor();
  }

  coat.style.fill = coatColor;
});

config.elements.setup.wizardEyes.addEventListener('click', function () {
  var eyes = config.elements.setup.wizardEyes;
  var eyesColor = getEyesColor();
  while (eyes.style.fill === eyesColor) {
    eyesColor = getEyesColor();
  }

  eyes.style.fill = eyesColor;
});

config.elements.setup.fireball.addEventListener('click', function () {
  var fireball = config.elements.setup.fireball;
  var fireballColor = getFireballColor();
  while (fireball.style.backgroundColor === fireballColor) {
    fireballColor = getFireballColor();
  }

  fireball.style.backgroundColor = fireballColor;
});

setup();
