'use strict';

(function () {
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

  window.config = config;
})();
