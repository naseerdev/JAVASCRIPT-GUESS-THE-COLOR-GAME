window.onload = function () {
  var ChoseColor = [];
  for (let i = 0; i < 3; i++) {
    ChoseColor[i] = randomColor(255);
  }
  var allColors = [];
  function generateColor() {
    var rgba = [];
    for (let i = 0; i < 3; i++) {
      rgba[i] = randomColor(255);
    }
    return rgba;
  }
  for (let i = 0; i < 6; i++) {
    allColors[i] = generateColor();
  }
  let colorCode = document.getElementById("color-display");
  colorCode.textContent += `(${ChoseColor})`;
  var squre = document.getElementsByClassName('square');
  var randomBox = randomColor(6);
  squre[randomBox].style.backgroundColor = `rgba(${ChoseColor})`;
  for (let i = 0; i < squre.length; i++) {
    if (i !== randomBox) {
      squre[i].style.backgroundColor = `rgba(${allColors[i]})`;
    }
  }
  var selectedmode = document.getElementsByClassName("mode");
  console.log(selectedmode);
  // for (let i = 0; i <= selectedmode.length; i++) {
  //   if (selectedmode.length > 0) {

  //     selectedmode[i].addEventListener('click', function () {
  //       var mode = (this.textContent === "Easy") ? '1' : '0';
  //       console.log('true')
  //       console.log(mode)
  //     })
  //   }
  // }
  for (let i = 0; i <= squre.length; i++) {
    if (squre.length > 0) {

      squre[i].addEventListener('click', function () {
        var clickedColor = this.style.backgroundColor;
        console.log(clickedColor)
        let convertRgba = clickedColor;
        convertRgba = convertRgba.replace(/[,\s\$rgba()]/g, "");
        let toString;
        toString = ChoseColor.toString();
        let colonRemoved = toString.replace(/[,\s\$]/g, "");
        if (convertRgba === colonRemoved) {
          document.getElementById('message').textContent = 'Correct';
          document.getElementsByTagName("H1")[0].style.backgroundColor = `rgba(${ChoseColor})`;
          for (let i = 0; i < squre.length; i++) {
            if (i !== randomBox) {
              squre[i].style.backgroundColor = `rgba(${ChoseColor})`;
            }
          }
        } else {
          document.getElementById('message').textContent = 'Try Again';
        }
      })
    }
  }

  function randomColor(limit) {
    return Math.floor(Math.random() * limit);
  }
}