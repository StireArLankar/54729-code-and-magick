'use strict';

(function () {
  var dialog = {};

  function onMouseDown(downEvt, handler, block, action) {
    downEvt.preventDefault();
    var dragged = false;
    var start = {
      x: downEvt.clientX,
      y: downEvt.clientY
    };

    function onMouseMove(moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: start.x - moveEvt.clientX,
        y: start.y - moveEvt.clientY
      };

      start = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      action(shift.x, shift.y);
    }

    function onMouseUp(upEvt) {
      upEvt.preventDefault();

      function onClickPreventDefault(clickEvt) {
        clickEvt.preventDefault();
        handler.removeEventListener('click', onClickPreventDefault);
      }

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        handler.addEventListener('click', onClickPreventDefault);
      }
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }

  function init(handler, block, action) {
    handler.addEventListener('mousedown', function (downEvt) {
      onMouseDown(downEvt, handler, block, action);
    });
  }

  dialog.init = init;

  window.dialog = dialog;
})();
