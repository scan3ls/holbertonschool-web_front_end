let globalVariable = 'Welcome';

function outer() {
    alert(globalVariable);

    let course = 'Holberton';

    function inner() {
        alert(`${globalVariable} ${course}`);

        let exclamtion = '!';

        function inception() {
            alert(`${globalVariable} ${course}${exclamtion}`);
        }
        inception();
    }
    inner();
}
outer();
