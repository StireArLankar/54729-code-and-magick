'use strict';

(function () {
  var config = window.config;
  var block = config.elements.setup.root;
  var handler = config.elements.setup.upload;

  function onMouseDown(downEvt) {
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

      block.style.left = (block.offsetLeft - shift.x) + 'px';
      block.style.top = (block.offsetTop - shift.y) + 'px';
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

  handler.addEventListener('mousedown', onMouseDown);

})();
