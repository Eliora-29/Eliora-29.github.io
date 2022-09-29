let screen=document.querySelector('#screen');
let btn=document.querySelectorAll('.btn')

for(item of btn){
    item.addEventListener('click', (e)=>{
        btntext=e.target.innerText;
        if(btntext=='x'){
        let btntext='*';
        }
        if(btntext=='÷'){
        let btntext='/';
        }
        screen.value+=btntext;
    });
}
function sin() {
    screen.value=Math.sin(screen.value);
}
function tan() {
    screen.value=Math.tan(screen.value);
}
function cos() {
    screen.value=Math.cos(screen.value);
}
function log() {
    screen.value=Math.log(screen.value);
}
function sqrt() {
    screen.value=Math.sqrt(screen.value,2);
}
function pow() {
    screen.value=Math.pow(screen.value,2);
}
function e() {
    screen.value=2.71828182846 ;
}
function pi() {
    screen.value=3.14159265359 ;
}
function fact(){
    let i, num, f;
    f=1
    num=screen.value;
    for(i=1; i<=num; i++){
        f=f*i;
    }
    i=i-1;

    screen.value=f;
}
function backspc() {
    screen.value=screen.value.substr(0,screen.value.length-1);
}