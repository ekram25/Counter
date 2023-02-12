const value=document.querySelector(".value");
const btns=document.querySelectorAll(".btn");
let num=0;

btns.forEach((btn)=>{
btn.addEventListener("click", (event)=>{
const style=event.currentTarget.classList;
if(style.contains("btn-danger")){
    num--;
}else if (style.contains("btn-success")){
num++;
}else{
    num=0;
}
value.textContent=num;
});
});
