const addSquareButton = document.createElement("button");
addSquareButton.textContent = "Add Sqaure";
document.body.appendChild(addSquareButton);

const squareConatainer = document.createElement("div");
squareConatainer.id = "square-container";
document.body.appendChild(squareConatainer);

let numOfSquares = 0;

addSquareButton.addEventListener("click", function () {
  const newDiv = document.createElement("div");
  newDiv.className = "square";

  numOfSquares++
  newDiv.id = numOfSquares;
 
  newDiv.addEventListener("mouseover", function () {
    newDiv.textContent = newDiv.id
  });
  
  newDiv.addEventListener("mouseout", function (){
    newDiv.textContent = "";
  });

    squareConatainer.appendChild(newDiv);
});
