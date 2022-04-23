let value = document.querySelector(".value");
let decrease = document.querySelector(".decrease");
let reset = document.querySelector(".reset");
let increase = document.querySelector(".increase");
let count = 0;

decrease.addEventListener("click", () => {
  count = count - 1;
    value.textContent = count;
    value.style.color = "red";
  
});
increase.addEventListener("click", () => {
  count = count + 1;
    value.textContent = count;
    value.style.color = "green";
  
});
reset.addEventListener("click", () => {
  count = 0;
    value.textContent = count;
    value.style.color = "white";
 
});
