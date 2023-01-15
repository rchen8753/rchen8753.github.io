


let steps = 0; //steps that neeed to be finished
let currentStep = 0; //the current step at the brick
let allSteps = 0; //all the steps needed to finish bricks.length

//格子資料
let brickData = [
      {
            id: "1",
            color: "red",
            icon: "fab fa-instagram-square",
            target: function () {
                  return "IG";
            }
      },
      {
            id: "2",
            color: "blue",
            icon: "fab fa-facebook-square",
            target: function () {
                  return "FB";
            }
      },
      {
            id: "3",
            color: "green",
            icon: "fab fa-line",
            target: function () {
                  return "LINE";
            }
      },
      {
            id: "4",
            color: "red",
            icon: "fab fa-instagram-square",
            target: function () {
                  return "IG";
            }
      },
      {
            id: "14",
            color: "blue",
            icon: "fab fa-facebook-square",
            target: function () {
                  return "FB";
            }
      },
      {
            id: "15",
            color: "green",
            icon: "fab fa-line",
            target: function () {
                  return "LINE";
            }
      },
      {
            id: "16",
            color: "red",
            icon: "fab fa-instagram-square",
            target: function () {
                  return "IG";
            }
      },
      {
            id: "25",
            color: "red",
            icon: "fab fa-instagram-square",
            target: function () {
                  return "IG";
            }
      },
      {
            id: "26",
            color: "blue",
            icon: "fab fa-facebook-square",
            target: function () {
                  return "FB";
            }
      },
      {
            id: "27",
            color: "green",
            icon: "fab fa-line",
            target: function () {
                  return "LINE";
            }
      },
      {
            id: "28",
            color: "red",
            icon: "fab fa-instagram-square",
            target: function () {
                  return "IG";
            }
      },
      {
            id: "29",
            color: "blue",
            icon: "fab fa-facebook-square",
            target: function () {
                  return "FB";
            }
      },
      {
            id: "30",
            color: "green",
            icon: "fab fa-line",
            target: function () {
                  return "LINE";
            }
      },
      {
            id: "31",
            color: "red",
            icon: "fab fa-instagram-square",
            target: function () {
                  return "IG";
            }
      }
];
//DOM
const startBtn = document.querySelector("button");
const msgBox = document.querySelector("#msg");
const colContent = document.querySelectorAll('.col');
const okBtn = document.querySelector('.close-btn');
let bricks;
let speed;
let light;
//function
function renderBrick() {
      bricks = document.querySelectorAll("[box-id]");
      bricks = Array.from(bricks).sort((a, b) => {
            return (
                  a.getAttributeNode("box-id").value - b.getAttributeNode("box-id").value
            );
      });
      bricks.forEach((item, index) => {
            let id = item.getAttributeNode("box-id").value;
            let data = brickData.find((item) => item.id == id);
            console.log(item);
            // let icon = document.createElement("i");
            // icon.setAttribute("class", data.icon);
            // icon.style.color = data.color;
            // item.appendChild(icon);
      });
}


function go() {
      speed = 100;
      let random = Math.floor(Math.random() * brickData.length);
      steps = random + bricks.length * 3;
      allSteps = steps;
      turnAround();
}


function turnAround() {
      bricks[currentStep].classList.remove("active");
      currentStep++;

      if (currentStep >= bricks.length) currentStep = 0;

      bricks[currentStep].classList.add("active");
      steps--;

      

      if (steps > 0) {
            setTimeout(turnAround, speed);

            if (steps < Math.floor(allSteps / 3)) speed += 7;
      } else {
            let popUp = document.querySelector('.popup-wrap')
            let PrizeName = document.querySelector('#winPrizes')
            popUp.classList.remove("popup-wrap");
            PrizeName.innerHTML += bricks[currentStep].innerText;
      }

      return startBtn.disabled = true;
}
function reset (){
      window.onload = function(){

      }
}

function close(){
      let popUp = document.querySelector('.popup-wrap')
      popUp.classList.add('')
}
//window.onload
window.onload = function () {
      renderBrick();
      startBtn.onclick = function () {
            go();
      };
      okBtn.onclick = function (){
            window.location.reload();
      }
};
