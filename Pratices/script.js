function changeContent() {
  const boxes = document.querySelectorAll(".main-container"); // Select all elements with class "main-container"

  boxes.forEach((box) => {
    box.style.color = "blue"; // Change text color
    box.style.border = "2px solid blue"; // Add border for better visibility
    box.style.padding = "10px";
  });
}
