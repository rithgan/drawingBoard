window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");
  //   console.log(window.innerHeight, window.innerWidth);
  //resizing
  function windowSize() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
  }

  window.addEventListener("resize", windowSize());

  //variables
  let drawing = false;

  const startPosition = (event) => {
    drawing = true;
    console.log("mousedown");
    ctx.beginPath();
    ctx.moveTo(event.clientX, event.clientY);
    draw(event);
    // console.log(event);
  };
  const endPosition = () => {
    drawing = false;
    ctx.beginPath();
    console.log("mouseup");
  };

  const draw = (event) => {
    // console.log(event);
    if (!drawing) return;
    ctx.strokeStyle = "black";
    ctx.lineWidth = 7;
    ctx.lineCap = "round";
    ctx.lineTo(event.clientX, event.clientY);
    // ctx.lineTo(100, 100);
    ctx.stroke();
    // ctx.beginPath();
    // ctx.arc(event.clientX, event.clientY, 7, 0, Math.PI * 2, true);
    // ctx.stroke();
    //for smoothness at end of line
    ctx.beginPath();
    ctx.moveTo(event.clientX, event.clientY);
    // ctx.moveTo(100, 100);
  };
  //event listeners
  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseup", endPosition);
});
