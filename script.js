const mainBox = document.querySelector("#main");
let html = "";
for (let i = 0; i < 256; i++) {
    html += `<div class="box"></div>`;
}
mainBox.innerHTML = html;
const newbox = document.querySelectorAll(".box");
 newbox.forEach(box => {
    box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "black";
    });
});
const btn = document.createElement("button");
document.body.append(btn);
btn.textContent = "Rest Grid";
btn.addEventListener("click", function(){
    let gridCount = parseInt(prompt("Enter The no. of grid not more then 100: "));
    if (!gridCount || gridCount < 1 || gridCount > 100) {
    alert("Please enter a number between 1 and 100");
    return;
}

    else{
        let size = 960 / gridCount;
        let noOfBoxes = gridCount * gridCount;
        mainBox.innerHTML = "";
        let newHtml = "";
        for (let i = 0; i < noOfBoxes; i++) {
            newHtml += `<div class="box1"></div>`;
            }
        mainBox.innerHTML = newHtml;
        const newbox = document.querySelectorAll(".box1");
        newbox.forEach(box => {
            box.style.cssText = `
                width:${size}px;
                height:${size}px;
             `;
            box.addEventListener("mouseover", () => {
                box.style.backgroundColor = "black";
             });  
        });
    }
});
