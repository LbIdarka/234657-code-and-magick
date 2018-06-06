'use strict';

var RADIUS_X = 115;
var RADIUS_Y = 145;
var ROTATION = 10;
var START_ANGLE = 0;
var END_ANGLE = Math.PI * 2;
var ANTICLOCWISE = false;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var FONT_GAP = 16;
var TEXT_HEIGHT = 30;
var USER_BAR_COLOR = 'rgba(255, 0, 0, 1)';
var textFont = '16 px PT Mono';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  for (var i = 0; i < 4; i++) {
    ctx.beginPath();
    x = x + 105;
    ctx.ellipse(x, y, RADIUS_X, RADIUS_Y, ROTATION, START_ANGLE, END_ANGLE, ANTICLOCWISE);
    ctx.closePath();
    ctx.fill();
  }
};


var renderText = function (ctx, text, x, y, font, color) {
  ctx.fillStyle = color || '#000';
  ctx.font = textFont;
  ctx.fillText(text, x, y);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  if (arr.length === 0) {
    return 0;
  }

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var getRandomBarColor = function () {
  var red = 0;
  var green = 0;
  var blue = Math.floor(Math.random() * 256);
  var playersBarColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  return playersBarColor;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, 110, 160, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 150, '#fff');

  renderText(ctx, 'Ура вы победили!', RADIUS_Y * 2, CLOUD_Y + FONT_GAP + TEXT_HEIGHT);
  renderText(ctx, 'Список результатов:', RADIUS_Y * 2, CLOUD_Y + FONT_GAP * 2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var barColor = players[i] === 'Вы' ? USER_BAR_COLOR : getRandomBarColor();
    var histogramY = CLOUD_Y + GAP + BAR_HEIGHT + TEXT_HEIGHT;

    ctx.fillStyle = barColor;

    ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, histogramY, BAR_WIDTH, -(BAR_HEIGHT * times[i]) / maxTime);

    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_Y + GAP + BAR_HEIGHT + FONT_GAP + TEXT_HEIGHT);
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, histogramY + -(BAR_HEIGHT * times[i]) / maxTime - CLOUD_Y);
  }
};
