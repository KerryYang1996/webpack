import x from "./x.js";
import jpg from "./assets/1.jpg";

const div = document.getElementById("app");
div.innerHTML = `
<img src="${jpg}">
`;

const button = document.createElement("button");
button.innerText = "懒加载";
button.onclick = () => {
  const promise = import("./lazy.js");
  promise.then(
    (module) => {
      const fn = module.default;
      fn();
    },
    () => {}
  );
};

div.appendChild(button);
