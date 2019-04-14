//
//
// let getDiv = document.querySelector(".chicken");//another way of getting the element.
// let getbut = document.querySelector(".but"); //pakarne mein asani hoti hai as class dedo or id dedo
//
// getbut.onclick = function(event) {
//   getDiv.className += " animate"; //space se pejli wali class aajaye gi and doosri bhi ta k chalne k baad wh wapis purane p aajaye
// };
// getbut.addEventListener ('Keyup',(e)=>{console.log('lalsoos');});
// getbut.addEventListener('click',()=>{console.log('babyy');});
// getbut.removeEventListener('click');

// //todo application
function adding(parent, child) {
  parent.appendChild(child);
}
function creation(string) {
  return document.createElement(string);
}
function texting(text) {
  return document.createTextNode(text);
}

function textIn(abu, kahani) {
  return (abu.innerHTML = kahani);
}
function local(key, value) {
  localStorage.setItem(key, value);
}
function localg(text){
  if (onload) {
  localStorage.getItem(text)
  }
}
function attachHandler(type, callback) {
  this.element[type] = callback;
}
let getdiv = document.querySelector(".new");
let newinpt = document.createElement("input");

adding(getdiv, newinpt);

var subm = document.createElement("button");
textIn(subm, "ADD"); // self closing tags pe inner html chALTA HAI.

adding(getdiv, subm);

let getol = creation("ol");
adding(getdiv, getol);

let eventOn = () => {
  // func made to give an expected change while by enter of click.
  let val = newinpt.value;
  let addli = creation("li");
  addli.className = "animate";
  let txtval = textIn(addli, val);
  newinpt.value = "";
  buttON = creation("button");
  textIn(buttON, "Delete");
  let inpCheck = creation("input");
  inpCheck.type = "checkbox";
  adding(addli, inpCheck);
  let makedict = { txtval };
  let makejson = JSON.stringify(makedict);
  local('list',txtval);
  inpCheck.onchange = () => {
    if (inpCheck.target) inpCheck.style.textDecoration = "lineThrough";
  };

  adding(addli, buttON);
  adding(getol, addli);

  buttON.onclick = e => {
    let abu = e.target.parentNode;
    getol.removeChild(abu);
  };
};

subm.onclick = eventOn; //on click kring
newinpt.onchange = eventOn; // on enter kring

localg(txtval)
