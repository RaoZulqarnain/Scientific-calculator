let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
for (item of buttons) {
  item.addEventListener('click', (e) => {
    buttonText = e.target.innerText;
    if (buttonText == 'X') {
      buttonText = "*"
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "C") {
      screenValue = ""
      screen.value = screenValue;
    } else if (buttonText == "=") {
      screen.value = eval(screenValue)
    } else if (buttonText == "DEL") {
      screen.value = screenValue.slice(0, -1)
      screenValue = screen.value

    } else if (buttonText == "sin") {
      let x = screen.value;
      x = x * Math.PI / 180;
      screen.value = Math.sin(x);
      screenValue = screen.value
    }
    else if (buttonText == "cos") {
      var x = screen.value;
      x = x * Math.PI / 90;
      screen.value = Math.cos(x);
      screenValue = screen.value
    }
    else if (buttonText == "tan") {
      var x = screen.value;
      x = x * Math.PI / 180;
      screen.value = Math.tan(x);
      screenValue = screen.value
    }
    else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  })
}
