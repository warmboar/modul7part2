
let board = [
    ["x", "o", "x"],
    ["o", "x", "o"],
    ["x", "o", "x"]
  ];
  

  let display = "";
  

  for (let i = 0; i < board.length; i++) {

    display += " ";

    for (let j = 0; j < board[i].length; j++) {
     
      display += board[i][j];
   
      if (j < board[i].length - 1) {
        display += "|";
      }
    }
  
    if (i < board.length - 1) {
      display += "\n";
    }
  }
  
  
  console.log(display);
  