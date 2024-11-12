const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        
        // adds the menu (hamburger) icon 
        toggle.innerHTML = "Menu";
    } else {
        menu.classList.add("active");
        
        // adds the close (x) icon 
        toggle.innerHTML = "Close";
    }
}
/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);

const items = document.querySelectorAll(".item");
/* Activate Submenu */
function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } else {
    this.classList.add("submenu-active");
  }
}
/* Event Listeners */
for (let item of items) {
    if (item.querySelector(".submenu")) {
      item.addEventListener("click", toggleItem, false);
      item.addEventListener("keypress", toggleItem, false);
    }   
}

/* Close Submenu From Anywhere */
function closeSubmenu(e) {
    if (menu.querySelector(".submenu-active")) {
      let isClickInside = menu
        .querySelector(".submenu-active")
        .contains(e.target);
      if (!isClickInside && menu.querySelector(".submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
      }
    }
  }
  /* Event listener */
  document.addEventListener("click", closeSubmenu, false);


  /* Project carousel */
var projectItems = document.querySelectorAll(".projectItem");
var projectContents = document.querySelectorAll(".projectContent");

function toggleProject() {
  for(let content of projectContents){
    if (content.classList.contains(this.dataset.projectcontent)){
      content.classList.add("active");
    } else{
      content.classList.remove("active");      
    }
  }
}

/* Event Listeners */
for (let item of projectItems) {
    item.addEventListener("click", toggleProject, false);
    item.addEventListener("keypress", toggleProject, false);
}
window.onload = projectContents[0].classList.add("active");