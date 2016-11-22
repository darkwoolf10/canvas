
var canvasBody = document.getElementById("canvas"),
    canvas = canvasBody.getContext("2d"),
    tick = 0;
    w = canvasBody.width = window.innerWidth,
    h = canvasBody.height = window.innerHeight;

    opts = {
      count:5,
      size:20,
      sizeRandom:10,
      spawnOpacity:2,
      sparkLife: 0.06,
      color: "rgba(39, 173, 96, alpha)"
    };

  function anim(){
    window.requestAnimationFrame(anim);
    tick++;
    console.log(tick);
    step();
  }

  anim();

function step(){
  var fillColor = opts.color.replace("alpha", opts.spawnOpacity);
  canvas.fillStyle = fillColor;
  for(var i = 0; i < Math.round(opts.count); i++){
    var random = Math.random() * opts.sizeRandom;
    canvas.fillRect(-(opts.size/2) + Math.random() * w, -(opts.size/2) + Math.random()* h,opts.size + random,opts.size + random);
  }

  canvas.fillStyle = "rgba(255, 255,255,"+ opts.sparkLife +")";
  canvas.fillRect(0, 0, w, h);
}
