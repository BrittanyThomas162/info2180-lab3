
document.addEventListener("DOMContentLoaded", function () {

    var squares = document.querySelectorAll("#board div");
    var isPlayerX = true;
    var gameState = ["0","1","2","3","4","5","6","7","8"];

    squares.forEach(function(elem,index) {

        elem.setAttribute('class', 'square');
        elem.addEventListener("click", function () 
        {
            if (elem.textContent=="") {
                if (isPlayerX) {
                    elem.textContent = "X";
                    elem.classList.add("X");
                    gameState[index]="X";
                    console.log(gameState)
                } else {
                    elem.textContent = "O";
                    elem.classList.add("O");
                    gameState[index]="O";
                    console.log(gameState)
                }
    
                isPlayerX = !isPlayerX;
            }
    
        });
    });
  



  });

