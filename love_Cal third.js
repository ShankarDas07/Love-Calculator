const form = document.getElementById('form');

const Boy = document.getElementById('Boy');
const Girl = document.getElementById('Girl');

form.addEventListener('submit',(e) =>{
    e.preventDefault();
    
    const len1 = Boy.value.length;
    const len2 = Girl.value.length;

    let res = Math.pow(len1+len2,2)%101 ; //  3 means cube
    let display = document.getElementById('res');
    display.textContent = `Result : ${res} %`; // when we do not put result then only show like 100% or 67% 
})