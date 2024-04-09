const cat_names = ["1", "2", "3"];
const cats = cat_names.map(cat => document.getElementsByClassName("category" + cat));
const regs = cat_names.map(cat => document.getElementById("hover_container_" + cat));
const hovers = cat_names.map(cat => document.getElementById("hover_text_" + cat));

for(let j = 0; j < cat_names.length; j++) {
    for(let i = 0; i < cats[j].length; i++) {
        cats[j][i].onmouseleave = function(){
            regs[j].classList.add('hover_container_hidden');
            hovers[j].children[0].textContent = '';
            hovers[j].children[1].textContent = '';
        };
        
        cats[j][i].onmouseover = function(){
            hovers[j].children[0].textContent = 'Municipality: ';
            console.log(cats[j][i].getAttribute('data-name'));
            hovers[j].children[1].textContent = cats[j][i].getAttribute('data-name');
            regs[j].classList.remove('hover_container_hidden');
        };
    };
};    
        