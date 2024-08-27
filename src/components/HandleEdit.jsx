

export function HandleEdit (e) {
  let input = document.createElement("input");
  input.value = e.target.innerText;
  input.id = e.target.id;
  input.style.position = e.target.style.position;
  input.style.height = ".08in";
  input.style.top =
    parseFloat(e.target.style.top) +
    parseFloat(input.style.height) * 2 +
    "in";
  input.style.left = e.target.style.left;
  input.style.right = e.target.style.right;
  input.style.width = e.target.style.width;
  const stubContainer = document.getElementById(e.target.parentNode.parentNode.id);
  stubContainer.appendChild(input);
  input.focus();
  return [input, stubContainer];
}

