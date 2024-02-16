let counter = 0;

function createHexColor() {
  const bgArr = [];
  for (let i = 1; i <= 6; i++) {
    let num = Math.trunc(Math.random() * 15) + 1;
    if (num >= 10) {
      num = String.fromCharCode("a".charCodeAt(0) + num - 10);
    }
    bgArr.push(num);
  }
  return `#${bgArr.join("")}`;
}

function createInverseHexColor(color) {
  color = color.slice(1).split("");
  color = color.map((c) => {
    return c >= "9" ? 10 + c.charCodeAt(0) - "a".charCodeAt(0) : c;
  });
  color.forEach((c, i) => {
    c = 15 - c;
    color[i] = c >= 10 ? String.fromCharCode("a".charCodeAt(0) + c - 10) : c;
  });
  return `#${color.join("")}`;
}

function createButton() {
  const color = createHexColor();
  const button = document.createElement("button");
  button.style.background = color;
  button.textContent = `btn-${color}`;
  button.style.color = createInverseHexColor(color);

  return button;
}

document.addEventListener("click", function (e) {
  e.preventDefault();
  counter++;
  if (e.target.tagName !== "BUTTON") {
    return;
  }
  const clickedButton = e.target;
  const extractedColor = clickedButton.textContent.slice(
    clickedButton.textContent.indexOf("#")
  );
  console.log(extractedColor);
  document.body.style.background = extractedColor + "aa";

  const createdColor = createHexColor();
  clickedButton.style.background = createdColor;
  clickedButton.style.color = createInverseHexColor(createdColor);
  clickedButton.textContent = `btn-${createdColor}`;

  if (counter > 4) {
    counter = 0;
    document.body.appendChild(createButton());
  }
});
