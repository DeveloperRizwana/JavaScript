function changeContent() {
  const boxes = document.querySelectorAll(".container p");
  boxes.forEach((box) => {
    box.style.color = "#B8E8FC";
    box.style.backgroundColor = "#FF6B6B";
    box.style.fontSize = "4rem";
  });
}

function resetContent() {
  const boxes = document.querySelectorAll(".container p");
  boxes.forEach((box) => {
    box.style.color = "#423770";
    box.style.fontFamily = "Arial, sans-serif";
    box.style.backgroundColor = "#8F91A2";
    box.style.fontSize = "2rem";
  });
}
