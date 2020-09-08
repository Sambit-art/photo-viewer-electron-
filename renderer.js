// var image = document.createElement("img");
var savelocation = "D:/Sambit/Electron/electron-api-demos(edited)/";
var image = document.getElementById("myimg");
image.setAttribute("width", "700");
image.setAttribute("height", "700");
image.setAttribute("border", "5px solid red");
image.setAttribute("src", "C:/Users/admin/Desktop/Desktop/Capture.PNG");
// document.body.appendChild(image);
var itemno = -1;
document.getElementById("valincrease").addEventListener("click", valincrease);
document.getElementById("valdecrease").addEventListener("click", valdecrease);

// initiation
document.getElementById("img-no").innerText = -1;
if ((document.getElementById("img-no").innerText = -1)) {
  document.getElementById("img-no").style.opacity = 0;
}

function valincrease() {
  var itemget = Number(document.getElementById("img-no").innerText);
  const fs = require("fs");
  fs.readdir("C:/Users/admin/Desktop/Desktop/photoes", (err, file) => {
    if (file.length - 1 == itemget) {
      itemget = -1;
    }
    itemget = itemget + 1;
    var filename = file[itemget];
    document.getElementById("item").innerText = filename;
    image.setAttribute(
      "src",
      "C:/Users/admin/Desktop/Desktop/photoes/" + filename
    );
    document.getElementById("img-no").innerText = itemget;
    document.getElementById("img-no").style.opacity = 1;
  });
}

function valdecrease() {
  var itemget = Number(document.getElementById("img-no").innerText);
  const fs = require("fs");
  fs.readdir("C:/Users/admin/Desktop/Desktop/photoes", (err, file) => {
    if (itemget == 0) {
      alert("No back is possible");
    } else {
      itemget = itemget - 1;
      var filename = file[itemget];
      document.getElementById("item").innerText = filename;
      image.setAttribute(
        "src",
        "C:/Users/admin/Desktop/Desktop/photoes/" + filename
      );
      document.getElementById("img-no").innerText = itemget;
      document.getElementById("img-no").style.opacity = 1;
    }
  });
}
