// We cannot use display: block for the mermaid graphs, because then
// the mermaid script shipped with Hugo can no longer process the
// graphs. So... we achieve a similar results using visibility and height.

function removeByValue(array, item){
    var index = array.indexOf(item);
    if (index !== -1) {
        array.splice(index, 1);
    }
    return array;
}

function sameArray(x,y) {
    return x.sort().join(',') === y.sort().join(',');
  }

function processtoggle(category, element) {
    element.classList.toggle("checked-mode");
   
    // updating storage
    document.getElementById("processstorage").classList.toggle(category);

    var flowchart = [...document.getElementById("processstorage").classList];

    // display correct flowchart
    var x = document.getElementsByClassName("mermaid");

    for(var i = 0; i < x.length; i++){
        var myClassList = [...x[i].classList];
        myClassList = removeByValue(myClassList, "mermaid");
        if (sameArray(myClassList,flowchart)) { 
            x[i].style.display = "block";
            x[i].style.visibility = "visible";
            x[i].style.height = "auto";
            
        }
        else{
            x[i].style.display = "none";
        }
    }
}

function startPage() {
    var x = document.getElementsByClassName("mermaid");

    for(var i = 0; i < x.length; i++){
        var myClassList = [...x[i].classList];
        if (myClassList.length === 1) { 
            x[i].style.visibility = "visible";
        }
        else{
            x[i].style.visibility = "hidden";
            x[i].style.height = 0;
        }
    }
}

window.onload = startPage();