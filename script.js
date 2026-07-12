const mainBox = document.querySelector("#main");
let html = "";
for (let i = 0; i < 256; i++) {
  html += `<div class="box"></div>`;
}
mainBox.innerHTML = html;

const newbox = document.querySelectorAll(".box");
newbox.forEach((box) => {
  let count = 0;

  box.addEventListener("mouseover", () => {
    count++;
    let opacityValue = count * 0.1;

   box.style.backgroundColor = "black";
box.style.opacity = opacityValue;
  });
});
const btn = document.createElement("button");
document.body.append(btn);
btn.textContent = "Rest Grid";
btn.addEventListener("click", function () {
  let gridCount = parseInt(prompt("Enter The no. of grid not more then 100: "));
  if (!gridCount || gridCount < 1 || gridCount > 100) {
    alert("Please enter a number between 1 and 100");
    return;
  } else {
    let size = 960 / gridCount;
    let noOfBoxes = gridCount * gridCount;
    mainBox.innerHTML = "";
    let newHtml = "";
    for (let i = 0; i < noOfBoxes; i++) {
      newHtml += `<div class="box1"></div>`;
    }
    mainBox.innerHTML = newHtml;
    const newbox = document.querySelectorAll(".box1");
    newbox.forEach((box) => {
      let count = 0;
      box.style.cssText = `
                width:${size}px;
                height:${size}px;
             `;
      box.addEventListener("mouseover", () => {
        count++;
        let opacityValue = count * 0.1;

        box.style.backgroundColor = "black";
        box.style.opacity = opacityValue;
      });
    });
  }
});
