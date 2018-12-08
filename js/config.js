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
        coatInput: '[name=coat-color]',
        wizardEyes: '.setup-wizard .wizard-eyes',
        eyesInput: '[name=eyes-color]',
        fireball: '.setup-fireball-wrap',
        fireballInput: '[name=fireball-color]'
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

  config.elements = (function () {
    var obj = {};
    for (var block in config.selectors) {
      if (config.selectors.hasOwnProperty(block)) {
        obj[block] = (function () {
          var object = {};
          for (var selector in config.selectors[block]) {
            if (config.selectors[block].hasOwnProperty(selector)) {
              object[selector] = document.querySelector(config.selectors[block][selector]);
            }
          }
          return object;
        })();
      }
    }
    return obj;
  })();

  config.elements.template = (function () {
    var obj = {};
    var temp1;
    var temp2;
    for (var selector in config.template) {
      if (config.template.hasOwnProperty(selector)) {
        temp2 = config.template[selector].cont;
        temp1 = config.template[selector].root;
        obj[selector] = document.querySelector(temp1)
                                .content
                                .querySelector(temp2);
      }
    }
    return obj;
  })();

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
