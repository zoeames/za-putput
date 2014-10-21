/* exported Hole */

var Hole = (function(){
  'use strict';

  function Hole(game){
    this.width  = 90;
    this.height = 90;
    this.x      = _.random(0, game.canvas.width - this.width);
    this.y      = _.random(0, game.canvas.height - this.height);
    this.cX     = this.x + (this.width / 2);
    this.cY     = this.y + (this.height / 2);
    this.r      = this.width / 2;
  }

  Hole.prototype.draw = function(game){
    game.ctx.drawImage(game.assets.hole, this.x, this.y, this.width, this.height);
  };

  Hole.prototype.isBallInside = function(ball){
    var sumsquares = Math.pow(this.cX - ball.cX, 2) + Math.pow(this.cY - ball.cY, 2),
        distance   = Math.sqrt(sumsquares);

    return distance < (this.r * 0.25);
  };

  return Hole;
})();
