const cat_names = ["1", "2", "3"];
const cats = cat_names.map(cat => document.getElementsByClassName("category" + cat));
const regs = document.getElementById("hover_container");
const hovers = document.getElementById("hover_text");
let parentWidth = document.getElementById("elan_map").getBBox();
parentWidth = parentWidth.width + parentWidth.x - 200;

for(let j = 0; j < cat_names.length; j++) {
    for(let i = 0; i < cats[j].length; i++) {
        cats[j][i].onmouseleave = function(){
            regs.classList.add('hover_container_hidden');
            hovers.textContent = '';
        };
        
        cats[j][i].onmouseover = function(){
            hovers.textContent = cats[j][i].getAttribute('data-name');
            regs.classList.remove('hover_container_hidden');
            bbox = cats[j][i].getBBox();
            if (bbox.x + bbox.width >= parentWidth){
                hovers.setAttribute('x', parentWidth - bbox.width);    
            }
            else {
                hovers.setAttribute('x', bbox.x + bbox.width/2 );
            }
            hovers.setAttribute('y', bbox.y + bbox.height/2);
        };
    };
};    