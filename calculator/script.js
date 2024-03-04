let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");


document.querySelectorAll(".button").forEach((button) => {
    button.addEventListener("click", () => {
    input.value += button.value;
  });
});


clear.addEventListener("click", () => {
    input.value = "";
  });
  
  
erase.addEventListener("click", () => {
    input.value = input.value.slice(0, -1);
});  


equal.addEventListener("click", () => {
  try {
    let solution = eval(input.value);
    if (!isFinite(solution)) {
      throw new Error("Invalid mathematical expression");
    }
    input.value = Number.isInteger(solution) ? solution : solution.toFixed(2);
  } 
  catch (error) {
    alert(error.message);
  }
});


