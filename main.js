function move() {
  var elem = document.getElementsByClassName("bar");   
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      for (var i = 0; i < elem.length; i++) {
           elem[i].style.width = width + '%'; 
       } 
    }
  }
}