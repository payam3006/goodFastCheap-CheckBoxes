const q = console.log;

const goodElem = document.getElementById("good");
const fastElem = document.getElementById("fast");
const cheapElem = document.getElementById("cheap");

q(document.querySelectorAll("input"));
document.querySelectorAll("input").forEach((elem) => {
  elem.addEventListener("change", (ev) => {
    if (ev.target.checked) {
      // q(ev.target.id);
      update(ev.target.id);
    }
  });
});
// document.querySelectorAll("input").addEventListener("change", (ev) => {
//   q(ev);
// });

const update = (elemId) => {
  if (elemId == "good") {
    if (fastElem.checked && cheapElem.checked) {
      fastElem.checked = false;
    }
  }
  if (elemId == "fast") {
    if (goodElem.checked && cheapElem.checked) {
      cheapElem.checked = false;
    }
  }
  if (elemId == "cheap") {
    if (goodElem.checked && fastElem.checked) {
      goodElem.checked = false;
    }
  }
};

q(document.getElementById("good").checked);
