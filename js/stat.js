'use strict';

var ROTATION = 10;
var START_ANGLE = 0;
var END_ANGLE = Math.PI * 2;
var ANTICLOCWISE = false;

var renderCloud = function (ctx, x, y, radiusY, color) {
  ctx.fillStyle = color;
  for (var i = 0; i < 4; i++) {
    ctx.beginPath();
    x = x + 110;
    var radiusX = radiusY - 20;
    ctx.ellipse(x, y, radiusX, radiusY, ROTATION, START_ANGLE, END_ANGLE, ANTICLOCWISE);
    ctx.fill();
  }
};

window.renderStatistics = function (ctx) {
  renderCloud(ctx, 70, 140, 120, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, 60, 130, 120, '#fff');
};
