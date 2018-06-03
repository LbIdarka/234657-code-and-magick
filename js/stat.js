'use strict';

var RADIUS_X = 115;
var RADIUS_Y = 145;
var ROTATION = 10;
var START_ANGLE = 0;
var END_ANGLE = Math.PI * 2;
var ANTICLOCWISE = false;
var CLOUD_X = 100;
var CLOUD_Y = 150;
var GAP = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var FONT_GAP = 16;
var TEXT_HEIGHT = 50;
var textFont = 'PT Mono';

var renderCloud = function (ctx, x, y, radiusY, color) {
  ctx.fillStyle = color;
  for (var i = 0; i < 4; i++) {
    ctx.beginPath();
    x = x + 105;
    ctx.ellipse(x, y, RADIUS_X, RADIUS_Y, ROTATION, START_ANGLE, END_ANGLE, ANTICLOCWISE);
    ctx.closePath();
    ctx.fill();
  }
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, 110, 160, 105, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 150, 105, '#fff');

  ctx.fillStyle = '#000';

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_Y + GAP + FONT_GAP + TEXT_HEIGHT);
    ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_Y - GAP, BAR_WIDTH, BAR_HEIGHT);
  }
};
