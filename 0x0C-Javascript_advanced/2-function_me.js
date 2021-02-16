function welcomeMessage(fullName) {
    function closureMessage(){
        alert(`Welcome ${fullName}`);
    }
    return closureMessage;
}

var guillaume = welcomeMessage('Guillaume');
var alex = welcomeMessage('Alex');
var fred = welcomeMessage('Fred');
