'use strict';

(function () {
  var config = window.config;
  var backend = window.backend;
  var utils = window.utils;
  var dialog = window.dialog;
  // var wizardsMock = window.wizardsMock;
  var wizardsLoad = window.wizardsLoad;
  var wizardsCommon = window.wizardsCommon;
  var block = config.elements.setup;

  dialog.init(block.upload, block.root, movePopup);

  function movePopup(x, y) {
    block.root.style.left = (block.root.offsetLeft - x) + 'px';
    block.root.style.top = (block.root.offsetTop - y) + 'px';
  }

  function openPopup() {
    block.root.classList.remove('hidden');
    block.root.style.left = '';
    block.root.style.top = '';
    document.addEventListener('keydown', onPopupEscPress);
    block.open.removeEventListener('click', openPopup);
    if (config.wizards.length > 0) {
      block.similar.classList.remove('hidden');
      wizardsLoad.renderWizards(config.wizardsCount, block.similarList, block.coatInput.value, block.eyesInput.value);
    }
    // wizardsMock.renderWizards(config.wizardsCount, block.similarList);
  }

  function closePopup() {
    block.root.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    block.open.addEventListener('click', openPopup);
    wizardsCommon.clearWizards();
    block.similar.classList.add('hidden');
  }

  function onPopupEscPress(evt) {
    utils.isEscEvent(evt, closePopup);
  }

  block.open.addEventListener('click', openPopup);

  block.open.addEventListener('keydown', function (evt) {
    utils.isEnterEvent(evt, openPopup);
  });

  block.close.addEventListener('click', closePopup);

  block.close.addEventListener('keydown', function (evt) {
    utils.isEnterEvent(evt, closePopup);
  });

  function stopProp(evt) {
    evt.stopPropagation();
  }

  block.input.addEventListener('keydown', function (evt) {
    utils.isEscEvent(evt, stopProp);
  });

  block.submit.addEventListener('click', function (evt) {
    submitForm(evt);
  });

  block.submit.addEventListener('keydown', function (evt) {
    utils.isEnterEvent(evt, submitForm);
  });

  function onUpLoad() {
    closePopup();
  }

  function onError(response) {
    config.elements.errorScreen.root.classList.add('error-screen--open');
    config.elements.errorScreen.root.textContent = response;
  }

  function submitForm(evt) {
    backend.upload(config.uploadUrl, new FormData(block.form), onUpLoad, onError);
    evt.preventDefault();
  }
})();
