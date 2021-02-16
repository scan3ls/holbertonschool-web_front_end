function createElement(data) {
    var p1 = document.createElement('p');
    p1.textContent = data.currentTarget.response;
    document.body.appendChild(p1);
}

function queryWikipedia(callback) {
    var req = new XMLHttpRequest();

    req.open("GET","https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*");
    req.onload = callback;
    req.send();
}

queryWikipedia(createElement);
