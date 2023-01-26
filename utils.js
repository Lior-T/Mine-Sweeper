<!DOCTYPE html>
<html lang="en">

<head>
  <footer>Trosman Lior</footer>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Mine Sweeper</title>
    <link rel="stylesheet" href="css/app.css">
</head>

<body onload="init()">

    <h2>Score: <span>0</span></h2>
    <div class="board">
      <table class="board-mine">
        <tbody id = 'cell'class="cell" onclick=" onCellClicked()"></tbody>
      </table>
    </div>
    <div id="pop" hidden class="popup" ><h2>You lose!</h2>
        <button onclick="init()">Restart</button>
    </div>
    
    <script src="utils.js"></script>
    <script src="game.js"></script>
    <script src="bombs.js"></script>
</body>

</html>
