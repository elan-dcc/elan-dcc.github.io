let selected_sources = [],
    selected_themes = [];

function toggleArray(myArray, item) {
    var index = myArray.indexOf(item);
    if (index === -1) {
        myArray.push(item); // Add if not in array
    } else {
        myArray.splice(index, 1); // Remove if already in array
    }
}

function isDatasource(category){
    return category.startsWith("clickerd");
}

function toggle(word, element){
    if (word === "block"){
        element.classList.add("public-visible");
    }
    else if (word === "none"){
        element.classList.remove("public-visible");
    }
}

function tagmagician(category, element) {

    element.classList.toggle("checked-mode");

    // updating the "storage"
    if (isDatasource(category)){
        var storage = selected_sources;
        var storageother = selected_themes;
    }
    else{
        var storage = selected_themes;
        var storageother = selected_sources;
    }
    toggleArray(storage, category);


    // adjusting the publications
    var x = document.getElementsByClassName("publication " + category);
    for(var i = 0; i < x.length; i++){
        var display = "none";
        myClassList = x[i].classList;
        for(var j = 0; j < storage.length; j++){
            if(myClassList.contains(storage[j])){
                for(var k = 0; k < storageother.length; k++){
                    if(myClassList.contains(storageother[k])){
                        display = "block";
                        break;
                    }
                }
                break;
            }
        }
        toggle(display, x[i]);
    }   
}