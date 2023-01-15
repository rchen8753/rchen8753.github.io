function displayName() {
  alert("My Name is Kevin");
}

var $title = function (title) {
  console.log("");
  var len = Math.floor((60 - title.length) / 2);
  title =
    title.length > 0
      ? `${"=".repeat(len)}${title}${"=".repeat(len)}`
      : "=".repeat(60);
  console.log(title);
};

var $ex = function (title) {
  console.log("");
  var len = Math.floor((50 - title.length) / 2);
  title =
    title.length > 0
      ? `${".".repeat(len)}${title}${".".repeat(len)}`
      : "=".repeat(60);
  console.log(title);
};

function $g(selector) {
  let nodelist = document.querySelector(selector);

  if (nodelist.length == 0) {
    return null;
  }
  return nodelist.length == 1 ? nodelist[0] : nodelist;
}
export { $g };

function $c(element) {
  return document.createElement(element);
}

function $ct(element, text) {
  let el = document.createElement(element);

  if (text !== null && text !== undefined && text.length > 0) {
    el.innerText = text;
  }

  return el;
}

function $log(value) {
  console.log(value);
}

function $random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function $showName() {
  alert("My name is Kevin");
}
function $drawChart(ctx, xArray, yArray) {
  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: xArray,
      datasets: [
        {
          label: "台積電",
          data: yArray,
          fill: false,
          backgroundColor: "rgba(255,165,0,0.3)",
          borderColor: "rgb(255,165,0)",
          pointStyle: "circle",
          pointBackgroundColor: "rgb(0,255,0)",
          pointRadius: 5,
          pointHoverRadius: 10
        }
      ]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        fontSize: 26,
        text: "2020年台積電股價"
      },
      tooltips: {
        mode: "point",
        intersect: true
      },
      legend: {
        position: "bottom",
        labels: {
          fontColor: "black"
        }
      }
    }
  });
}

//create element & innerText
function $ce(element, text) {
  let el = document.createElement(element);

  //判斷text參數是否合規?
  if (text !== undefined && text !== "" && text !== null) {
    el.innerText = text;
  }
  return el;
}

// css fade in
function $fade(element) {
  var op = 1; // initial opacity
  var timer = setInterval(function () {
    if (op <= 0.1) {
      clearInterval(timer);
      element.style.display = "none";
    }
    element.style.opacity = op;
    element.style.filter = "alpha(opacity=" + op * 100 + ")";
    op -= op * 0.1;
  }, 50);
}

export { displayName, $title, $ex, $log, $random, $c, $ct, $ce,$fade};
