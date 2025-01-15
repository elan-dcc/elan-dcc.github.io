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