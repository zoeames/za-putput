/* exported Ball */

var Ball = (function(){
  'use strict';

  function Ball(game){
    this.width  = 30;
    this.height = 30;
    this.x      = _.random(0, game.canvas.width - this.width);
    this.y      = _.random(0, game.canvas.height - this.height);
    this.r      = this.width / 2;
  }

  Ball.prototype.draw = function(game){
    if(!game.inHole && !game.isOut){
      game.ctx.drawImage(game.assets.ball, this.x, this.y, this.width, this.height);
    }
  };

  Ball.prototype.update = function(orientation){
    this.x  += orientation.gamma;
    this.y  += orientation.beta;
    this.cX  = this.x + (this.width / 2);
    this.cY  = this.y + (this.height / 2);
  };

  Ball.prototype.didVanish = function(game){
    var isLeft   = this.x < -this.width,
        isRight  = this.x > game.canvas.width,
        isTop    = this.y < -this.height,
        isBottom = this.y > game.canvas.height;

    return isLeft || isRight || isTop || isBottom;
  };

  return Ball;
})();
