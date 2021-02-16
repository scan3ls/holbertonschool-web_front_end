function changeMode(size , weight, transform, background, color){
    return function(){
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };
}

function main(){
    var spooky = changeMode(9, "bold", 'uppercase', 'pink', 'green');
    var darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    var screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    
    var btnSpooky = document.createElement('button');
    btnSpooky.textContent = "Spooky";
    btnSpooky.onclick = spooky;
    
    var btnDark = document.createElement('button');
    btnDark.textContent = "Dark Mode";
    btnDark.onclick = darkMode;
    
    var btnScream = document.createElement('button');
    btnScream.textContent = "Scream Mode";
    btnScream.onclick = screamMode;
    
    document.body.innerHTML += "<p>Welcome Holberton!</p>"
    document.body.appendChild(btnSpooky);
    document.body.appendChild(btnDark);
    document.body.appendChild(btnScream);
}
