const movements = {
  DOWN: "DOWN",
  RIGHT: "RIGHT",
  LEFT: "LEFT",
  ROTATE: "ROTATE"
}


function printScreen(initialScreen){
  console.log("\n Nueva Pantalla: \n")
  for(row of initialScreen){
    let new_layout = row.map(String).join("")
    console.log(new_layout);
  }
}


function movementPiece(screen, movement, rotation){

  let newScreen = Array(10).fill().map(()=> Array(9).fill("🔲"));

  let rotationItem = 0;                      //identificamos el numero de la pieza de la figura con la que nos encontramos
  let rotations = [
    [[0,0], [-1,1], [0,0], [-2,2]],           //cada cordenada digamos (1,0) indica la posicion de rotacion para cada pieza de la figura
    [[0,1], [1,0], [2,-1], [0,-1]],
    [[1,1], [-1,1], [0,0], [-1,-1]],
    [[1,0], [-1,0], [0,-1], [1,-2]],
  ]

  let newRotation = rotation;
  if(movement == movements.ROTATE){
    newRotation = rotation == 3 ? 0 : rotation + 1
  }

  for(let rowIndex in screen){
    for(let columnIndex in screen[rowIndex]){

      if(screen[rowIndex][columnIndex] === "🔳"){
        
        let newRowIndex = 0;
        let newColumnIndex = 0;

        switch(movement){
          case movements.DOWN:
            newRowIndex = +rowIndex + 1
            newColumnIndex = +columnIndex;
            break;
          case movements.LEFT:
            newRowIndex = +rowIndex
            newColumnIndex = +columnIndex - 1;
            break;
          case movements.RIGHT:
            newRowIndex = +rowIndex
            newColumnIndex = +columnIndex + 1;
            break;
          case movements.ROTATE:
            newRowIndex = +rowIndex + rotations[newRotation][rotationItem][0]
            newColumnIndex = +columnIndex + rotations[newRotation][rotationItem][1]
            rotationItem += 1

      
        }
        if(newRowIndex > 9 || newColumnIndex > 9 || newColumnIndex < 0){
          console.log("\nNo se puede realizar este movimiento\n");
          return {screen, rotation}
        }else{
          newScreen[newRowIndex][newColumnIndex] = "🔳"
        }
      }
    }
  }
  printScreen(newScreen)
  return {newScreen, newRotation}
}


function tetris(){
  let initialScreen = [
    ["🔳", "🔳", "🔳", "🔲", "🔲", "🔲", "🔲", "🔲", "🔲"], //ROW
    ["🔲", "🔳", "🔲", "🔲", "🔲", "🔲", "🔲", "🔲", "🔲"],
    ["🔲", "🔲", "🔲", "🔲", "🔲", "🔲", "🔲", "🔲", "🔲"],
    ["🔲", "🔲", "🔲", "🔲", "🔲", "🔲", "🔲", "🔲", "🔲"],
    ["🔲", "🔲", "🔲", "🔲", "🔲", "🔲", "🔲", "🔲", "🔲"],
    ["🔲", "🔲", "🔲", "🔲", "🔲", "🔲", "🔲", "🔲", "🔲"],
    ["🔲", "🔲", "🔲", "🔲", "🔲", "🔲", "🔲", "🔲", "🔲"],
    ["🔲", "🔲", "🔲", "🔲", "🔲", "🔲", "🔲", "🔲", "🔲"],
    ["🔲", "🔲", "🔲", "🔲", "🔲", "🔲", "🔲", "🔲", "🔲"],
    ["🔲", "🔲", "🔲", "🔲", "🔲", "🔲", "🔲", "🔲", "🔲"]
  ] //Column

  let rotation = 0;

  printScreen(initialScreen);
  
  let result = movementPiece(initialScreen,movements.ROTATE, rotation);
  initialScreen = result.newScreen || result.screen;
  rotation = result.newRotation || result.rotation;

  result = movementPiece(initialScreen,movements.ROTATE, rotation);
  initialScreen = result.newScreen || result.screen;
  rotation = result.newRotation || result.rotation;

  result = movementPiece(initialScreen,movements.ROTATE, rotation);
  initialScreen = result.newScreen || result.screen;
  rotation = result.newRotation || result.rotation;

  result = movementPiece(initialScreen,movements.DOWN, rotation);
  initialScreen = result.newScreen || result.screen;
  rotation = result.newRotation || result.rotation;

  result = movementPiece(initialScreen,movements.DOWN, rotation);
  initialScreen = result.newScreen || result.screen;
  rotation = result.newRotation || result.rotation;

  result = movementPiece(initialScreen,movements.RIGHT, rotation);
  initialScreen = result.newScreen || result.screen;
  rotation = result.newRotation || result.rotation;

  result = movementPiece(initialScreen,movements.RIGHT, rotation);
  initialScreen = result.newScreen || result.screen;
  rotation = result.newRotation || result.rotation;

  result = movementPiece(initialScreen,movements.LEFT, rotation);
  initialScreen = result.newScreen || result.screen;
  rotation = result.newRotation || result.rotation;
}


tetris();