var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}


var state = false;
const lmao = document.querySelectorAll("#hidden");
const butt = document.querySelector("#button");
butt.addEventListener("click", () => {
  if (state === false) {
    state = true;
    lmao.forEach((e) => {
      e.style.display = "block";
    });
    butt.style.display = "none";
  }
});

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
  sidemenu.style.right = "0";
}
function closemenu(){
  sidemenu.style.right='-300px';
}

const msg = document.getElementsByClassName("msg")