const ghost = document.querySelector(".ghost");

ghost.addEventListener("click", () => {
  // Generate a random color
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  ghost.style.backgroundColor = randomColor;

  // Update the skirt color to match the ghost body
  ghost.querySelector("::after").style.backgroundColor = randomColor;
});


const eyeleft = document.querySelector(".eye left");

eyeleft.addEventListener ()