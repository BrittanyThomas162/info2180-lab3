
document.addEventListener("DOMContentLoaded", function () {

    var boxes = document.querySelectorAll("#board div");
    boxes.forEach(function(elem, index) {
        elem.setAttribute('class', 'square');
    });

  });

