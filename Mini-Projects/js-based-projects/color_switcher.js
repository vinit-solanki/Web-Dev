const btns=document.querySelectorAll('.button')
const body=document.querySelector("body")
btns.forEach(function (btn){
    console.log(btn);
    btn.addEventListener('click',function (e){
        console.log(e.target);
        console.log(e.target.style.backgroundColor);
        body.style.backgroundColor=e.target.style.backgroundColor;
    });
});