function loadChart(charttype = "") {
    var xhttp = new XMLHttpRequest();
    var display = document.getElementById("flowchartdisplay");
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            display.innerHTML = this.responseText;
        }
    };
    display.classList.toggle(charttype);

    var chart = "../../charts/main" + [...display.classList].sort().join("") + ".svg";
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