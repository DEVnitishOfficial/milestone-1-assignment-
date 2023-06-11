
const movingImg = document.getElementById("moving-img");

let X_axis_Movement = 0;
let y_axis_Movement = 0;
const imageMovement = 10;

document.addEventListener("keydown",(event) => {
  switch(event.key) {
    case "ArrowUp":
      y_axis_Movement -= imageMovement;
      if (y_axis_Movement < -400) {
        y_axis_Movement = 400;
      }
      break;
    case "ArrowDown":
      y_axis_Movement += imageMovement;
      if (y_axis_Movement > 400) {
        y_axis_Movement = -400;

      }
      break;
    case "ArrowRight":
      X_axis_Movement += imageMovement;
      console.log(X_axis_Movement);
      if (X_axis_Movement > 820) {
        X_axis_Movement = -820;

      }
      break;
    case "ArrowLeft":
      X_axis_Movement -= imageMovement;
      if (X_axis_Movement < -820) {
        X_axis_Movement = 820;
      }
      break;
  }
  
  movingImg.style.transform = `translate(${X_axis_Movement}px, ${y_axis_Movement}px)`;
});
