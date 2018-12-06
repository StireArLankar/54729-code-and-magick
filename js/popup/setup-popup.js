'use strict';

(function () {
  var config = window.config;
  var utils = window.utils;
  var dialog = window.dialog;
  var wizardsMock = window.wizardsMock;
  var wizardsCommon = window.wizardsCommon;
  var block = config.elements.setup.root;
  var handler = config.elements.setup.upload;

  dialog.init(handler, block, movePopup);

  function movePopup(x, y) {
    block.style.left = (block.offsetLeft - x) + 'px';
    block.style.top = (block.offsetTop - y) + 'px';
  }

  function openPopup() {
    config.elements.setup.root.classList.remove('hidden');
    config.elements.setup.root.style.left = '';
    config.elements.setup.root.style.top = '';
    document.addEventListener('keydown', onPopupEscPress);
    config.elements.setup.similar.classList.remove('hidden');
    wizardsMock.renderWizards(config.wizardsCount, config.elements.setup.similarList);
  }

  function closePopup() {
    config.elements.setup.root.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    wizardsCommon.clearWizards();
    config.elements.setup.similar.classList.add('hidden');
  }

  function onPopupEscPress(evt) {
    utils.isEscEvent(evt, closePopup);
  }

  config.elements.setup.open.addEventListener('click', openPopup);

  config.elements.setup.open.addEventListener('keydown', function (evt) {
    utils.isEnterEvent(evt, openPopup);
  });

  config.elements.setup.close.addEventListener('click', closePopup);

  config.elements.setup.close.addEventListener('keydown', function (evt) {
    utils.isEnterEvent(evt, closePopup);
  });

  function stopProp(evt) {
    evt.stopPropagation();
  }

  config.elements.setup.input.addEventListener('keydown', function (evt) {
    utils.isEscEvent(evt, stopProp);
  });

  config.elements.setup.submit.addEventListener('click', function () {
    submitForm();
  });

  config.elements.setup.submit.addEventListener('keydown', function (evt) {
    utils.isEnterEvent(evt, submitForm);
  });

  function submitForm() {
    config.elements.setup.form.submit();
  }
})();
