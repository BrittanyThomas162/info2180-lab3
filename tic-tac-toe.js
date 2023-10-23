document.addEventListener("DOMContentLoaded", function () {

    var squares = document.querySelectorAll("#board div");
    var isPlayerX = true;
    var gameState = ["0","1","2","3","4","5","6","7","8"];
    var status = document.getElementById("status");
    var newGameBtn = document.querySelector(".btn");
    
    squares.forEach(function(elem,index) {

        elem.setAttribute('class', 'square');

        elem.addEventListener("click", function () 
        {
            if (elem.textContent == "") {

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

                let winner = checkForWinner(gameState);
                console.log(winner)
                if (winner!=null) {
                    status.textContent = `Congratulations! ${winner} is the Winner!`;
                    status.classList.add("you-won");
                }
              
            }
    
        });


        elem.addEventListener("mouseover", function(e) {
            e.target.classList.add("hover");
        });
    
        elem.addEventListener("mouseout", function(e) {
            e.target.classList.remove("hover");
          });


        function checkForWinner(gameState) {
            const winningCombos = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
                [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
                [0, 4, 8], [2, 4, 6] // Diagonals
            ];
            
            for (let i = 0; i < winningCombos.length; i++) {
                const [a, b, c] = winningCombos[i];
                if (gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                    return gameState[a];
                }
            }
    
            return null;
        }

    });

    newGameBtn.addEventListener("click", function(e) {
        e.preventDefault();
        squares.forEach(function(square) {
            square.textContent = "";
            square.className = "square";
            gameState = ["0","1","2","3","4","5","6","7","8"];
            status.textContent = "Move your mouse over a square and click to play an X or an O."
            if (status.classList.contains("you-won")) {
                status.classList.remove("you-won");
            }
            
        });

    });



  });



  

