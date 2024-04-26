
function tagmagician(category, element) {

    element.classList.toggle("checked-mode");
    console.log("klik!");

    var x = document.getElementsByClassName("publication");
    console.log(x);
    for(var i = 0; i < x.length; i++){
        if (x[i].classList.contains(category)) {
            if (x[i].style.display === "none") {
                x[i].style.display = "block";
            } else {
                x[i].style.display = "none";
            }
        }
    }

  }