let container = document.getElementById('container');

for (let i = 1; i <= 10; i++) {
    let div = document.createElement('div');
    div.setAttribute("id", "div" + i);
    div.textContent = "Dit is div nummer " + i;
    
    container.appendChild(div);
}