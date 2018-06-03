'use strict';

window.renderStatistics = function(ctx) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
  ctx.beginPath();
  ctx.ellipse(160, 160, 80, 140, 10, 0, Math.PI * 2, false);
  ctx.ellipse(270, 160, 110, 140, 10, 0, Math.PI * 2, false);
  ctx.ellipse(380, 160, 110, 140, 10, 0, Math.PI * 2, false);
  ctx.ellipse(490, 160, 80, 140, 10, 0, Math.PI * 2, false);
  ctx.fill();

  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.ellipse(150, 150, 80, 140, 10, 0, Math.PI * 2, false);
  ctx.ellipse(260, 150, 110, 140, 10, 0, Math.PI * 2, false);
  ctx.ellipse(370, 150, 110, 140, 10, 0, Math.PI * 2, false);
  ctx.ellipse(480, 150, 80, 140, 10, 0, Math.PI * 2, false);
  ctx.fill();
}
