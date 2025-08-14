const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        
        // adds the menu (hamburger) icon 
        toggle.classList.toggle("nav-open");
    } else {
        menu.classList.add("active");
        
        // adds the close (x) icon 
        toggle.classList.toggle("nav-open");
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


// SEARCH 
  
  const overlay = document.getElementById("overlay");
  const searchcontainer = document.getElementById("searchcontainer");

  function popupFn(e) {
      overlay.style.display = "block";
      searchcontainer.style.display = "block";
  }
  function closeFn() {
      overlay.style.display = "none";
      searchcontainer.style.display = "none";
  }

  
  const searches = document.getElementsByClassName("searchicon");
  
  for (let item of searches) {
      item.addEventListener("click", popupFn);
  }

    /* Close overlay From Anywhere and scroll to bottom when extending */
  function closeOverlay(e) {

      if (overlay.style.display == "block" && !e.target.classList.contains("searchicon")) {
        let isClickInside = searchcontainer.contains(e.target) || e.target.classList.contains("pagefind-ui__button");
        
        if (!isClickInside) {
          overlay.style.display = "none";
          searchcontainer.style.display = "none";
        }
        else if (e.target.classList.contains("pagefind-ui__button")) {
          var screenh = window.innerHeight; 
          var toScroll = ''+screenh/10;
          document.getElementById('closesearch').scrollIntoView(false);
          window.scrollBy(0,toScroll);
        }
      }
    }
    /* Event listener */
    document.addEventListener("click", closeOverlay, false);