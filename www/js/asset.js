/* exported Asset */
/* global Media */

var Asset = (function(){
  'use strict';

  function Asset(){
  }

  Asset.load = function(){
    var asset = {};

    asset.ball = new Image();
    asset.ball.src = 'img/earth.png';
    asset.hole = new Image();
    asset.hole.src = 'img/hole.png';
    asset.ray  = new Media();
    asset.ray.src  = 'audio/raygun.mp3';

    return asset;
  };

  return Asset;
})();
