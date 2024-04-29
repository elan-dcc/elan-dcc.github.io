function isDatasource(category){
    return category.startsWith("clickerd");
}

function tagmagician(category, element) {

    element.classList.toggle("checked-mode");

    // updating the "storage"
    if (isDatasource(category)){
        var storage = document.getElementById("tagmagicianstoraged").classList;
        var storageother = document.getElementById("tagmagicianstoraget").classList;
    }
    else{
        var storage = document.getElementById("tagmagicianstoraget").classList;
        var storageother = document.getElementById("tagmagicianstoraged").classList;
    }
    storage.toggle(category);

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
        x[i].style.display = display;
    }   
}