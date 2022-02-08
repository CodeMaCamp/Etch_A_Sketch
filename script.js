var numb = 16;
var isRandom = false;
var isFade = false;

function makeIdObject(num, idName) {
  let rowItems = {};
  for (var i = 0; i < num; i++) {
    rowItems[i] = {
      id: idName + i,
    };
  }
  return rowItems;
}
function setColor(isRandom) {
  if (isRandom) {
    return "'#" + getRandomColor() + "'";
  } else {
    return "'#000000'";
  }
}
function gridMaker(num) {
  document.getElementById("container").innerHTML = "";
  let rowId = makeIdObject(num, "row");
  for (var i = 0; i < num; i++) {
    let elemRow = document.createElement("div");
    elemRow.setAttribute("id", rowId[i].id);
    elemRow.setAttribute("class", "row");
    document.getElementById("container").appendChild(elemRow);
    for (var j = 0; j < num; j++) {
      let elemCol = document.createElement("div");
      elemCol.setAttribute("class", "column");
      elemCol.setAttribute("onmouseover", changeBckgd());
      document.getElementById(rowId[i].id).appendChild(elemCol);
    }
  }
}
function changeBckgd() {
  if (isFade == true) {
    let cloe = setColor(isRandom);
    return "this.style.backgroundColor =" + cloe;
  } else if (isFade == false) {
    let cloe = setColor(isRandom);
    return "this.style.backgroundColor =" + cloe;
  }
}
var slide = document.getElementById("myRange");
numb = slide.value;
gridMaker(numb);
slide.onchange = function () {
  numb = this.value;
  console.log(numb);
  gridMaker(numb);
};
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
var clearBtn = document.getElementById("clear");
var colorsBtn = document.getElementById("colors");
var resetBtn = document.getElementById("reset");

colorsBtn.onclick = function () {
  if (colorsBtn.value == "true") {
    colorsBtn.style.backgroundColor = "red";
    isRandom = true;
    colorsBtn.value = "false";
    gridMaker(numb);
  } else if (colorsBtn.value == "false") {
    colorsBtn.style.backgroundColor = "green";
    isRandom = false;
    colorsBtn.value = "true";
    gridMaker(numb);
  }
  //console.log(colorsBtn.value);
};
clearBtn.onclick = function () {
  gridMaker(numb);
};
resetBtn.onclick = function () {
  numb = 16;
  isFade = false;
  isRandom = false;
  colorsBtn.style.backgroundColor = "green";
  colorsBtn.value = "true";
  gridMaker(numb);
  slide.value = 16;
};
