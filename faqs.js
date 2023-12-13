const lis = document.querySelectorAll("li");
var body = document.body,
  html = document.documentElement;

var height = Math.max(
  body.scrollHeight,
  body.offsetHeight,
  html.clientHeight,
  html.scrollHeight,
  html.offsetHeight
);
console.log(height);

lis.forEach((li) => {
  li.addEventListener("click", () => {
    handleClick();
    li.firstElementChild.classList.toggle("bordering");
    li.lastElementChild.classList.toggle("hide");
    if (li.lastElementChild.className === "hide") {
      li.firstElementChild.lastElementChild.innerHTML = "+";
    } else {
      li.firstElementChild.lastElementChild.innerHTML = "-";
    }
  });
});

const handleClick = () => {
  lis.forEach((li) => {
    li.firstElementChild.classList.remove("bordering");
  });
};
// window.addEventListener('click',()=>{
//     lis.forEach(li=>{
//         li.firstElementChild.classList.remove("bordering");
//     })
// })
