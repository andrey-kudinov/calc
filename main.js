const buttonSign = document.querySelectorAll('button');
let value = document.querySelector('#value');

function countValue () {
    let counter = 0;
    buttonSign[0].addEventListener('click', (e) => {
        counter--;
        console.log(counter);
        value.innerHTML = counter;
    });
    buttonSign[1].addEventListener('click', (e) => {
        counter++;
        console.log(counter);
        value.innerHTML = counter;
    });
}
countValue();