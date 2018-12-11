'use strict';

(function () {
  var backend = window.backend;
  var config = {
    wizards: [],
    dataUrl: 'https://js.dump.academy/code-and-magick/data',
    uploadUrl: 'https://js.dump.academy/code-and-magick',
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
      errorScreen: {
        root: '.error-screen'
      },
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
        coatInput: '[name="coat-color"]',
        wizardEyes: '.setup-wizard .wizard-eyes',
        eyesInput: '[name="eyes-color"]',
        fireball: '.setup-fireball-wrap',
        fireballInput: '[name="fireball-color"]'
      }
    },
    template: {
      wizard: {
        root: '#similar-wizard-template',
        cont: '.setup-similar-item'
      }
    },
    elements: {}
  };

  function findBlocks(selectors, action) {
    var keys = Object.keys(selectors);
    return keys.reduce(function (obj, key) {
      obj[key] = action(selectors[key]);
      return obj;
    }, {});
  }

  function findDOMElements(block) {
    var keys = Object.keys(block);
    return keys.map(function (key) {
      return document.querySelector(block[key]);
    }).reduce(function (obj, element, i) {
      obj[keys[i]] = element;
      return obj;
    }, {});
  }

  function findTemplateContent(block) {
    return document.querySelector(block.root).content.querySelector(block.cont);
  }

  config.elements = findBlocks(config.selectors, findDOMElements);
  config.elements.template = findBlocks(config.template, findTemplateContent);

  function onLoad(response) {
    config.wizards = response;
  }

  function onError(response) {
    config.elements.errorScreen.root.classList.add('error-screen--open');
    config.elements.errorScreen.root.textContent = response;
  }

  backend.load(config.dataUrl, onLoad, onError);

  window.config = config;
})();
