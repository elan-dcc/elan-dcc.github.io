let selected_charts = [];

function toggleArray(myArray, item) {
    var index = myArray.indexOf(item);
    if (index === -1) {
        myArray.push(item); // Add if not in array
    } else {
        myArray.splice(index, 1); // Remove if already in array
    }
}

function loadChart(charttype = "", element) {
    // Change the colour of the button
    element.classList.toggle("checked-mode");

    var xhttp = new XMLHttpRequest();
    var display = document.getElementById("flowchartdisplay");
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            display.innerHTML = this.responseText;
        }
    };
    toggleArray(selected_charts, charttype);

    var chart = "../../charts/main" + [...selected_charts].sort().join("") + ".svg";
    xhttp.open("GET", chart, true);
    xhttp.send();
}

function initiateChart() {
    var xhttp = new XMLHttpRequest();
    var display = document.getElementById("flowchartdisplay");
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            display.innerHTML = this.responseText;
        }
    };
    var chart = "../../charts/main.svg";
    xhttp.open("GET", chart, true);
    xhttp.send();
}


window.onload = initiateChart();