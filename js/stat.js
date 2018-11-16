'use strict';

var myVars = {
  CLOUD_HEIGHT: 270,
  CLOUD_WIDTH: 420,
  message: ['Ура вы победили!', 'Список результатов:'],
  messageFontSize: 16,
  messageFontFamily: 'PT Mono',
  getMessageFont: function () {
    return (this.messageFontSize + 'px ' + this.messageFontFamily);
  },
  cloudPositionX: 100,
  cloudPositionY: 10,
  cloudPadding: 30,
  renderCloud: function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, this.CLOUD_WIDTH, this.CLOUD_HEIGHT);
  },
  playerColor: 0,
  otherColor: 240,
  getColor: function (color, saturation) {
    return ('hsl(' + color + ', ' + saturation + '%, 50%)');
  },
  columnWidth: 40,
  columnHeight: 150,
  columnMargin: 50
};

window.renderStatistics = function (ctx, names, times) {
  var count = names.length < 5 ? names.length : 4;
  var i;
  var maxTime;

  myVars.renderCloud(ctx, myVars.cloudPositionX + 10, myVars.cloudPositionY + 10, 'rgba(0, 0, 0, 0.7)');
  myVars.renderCloud(ctx, myVars.cloudPositionX, myVars.cloudPositionY, '#fff');

  ctx.font = myVars.getMessageFont();
  ctx.fillStyle = '#000';
  myVars.message.forEach(function (element, index) {
    var x = myVars.cloudPositionX + myVars.cloudPadding;
    var y = myVars.cloudPositionY + myVars.cloudPadding + index * 1.5 * myVars.messageFontSize;
    ctx.fillText(element, x, y);
  });

  maxTime = times.reduce(function (max, element) {
    return element > max ? element : max;
  });

  for (i = 0; i < count; i += 1) {
    (function () {
      var x = myVars.cloudPositionX + myVars.cloudPadding + i * (myVars.columnMargin + myVars.columnWidth);
      var y = myVars.cloudPositionY + myVars.CLOUD_HEIGHT - myVars.cloudPadding / 2;
      var time = Math.round(times[i]);
      var timeHeight = Math.round(time * myVars.columnHeight / maxTime);

      ctx.fillStyle = '#000';
      ctx.fillText(names[i], x, y);
      ctx.fillText(time, x, y - 2 * myVars.messageFontSize - timeHeight);

      ctx.fillStyle = (names[i] === 'Вы') ? myVars.getColor(myVars.playerColor, 100) : myVars.getColor(myVars.otherColor, Math.round(Math.random() * 100));

      ctx.fillRect(x, y - myVars.messageFontSize - timeHeight, myVars.columnWidth, timeHeight);
    })();
  }
};
