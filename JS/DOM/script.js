const allImages=document.getElementsByTagName("img")
for (let img of allImages){
    console.log(img.src);
} 
console.log(document.getElementById("para-1"));
console.log(document.getElementsByClassName("lion-heading"));
console.log(document.getElementsByTagName("section"));
console.log(document.getElementsByClassName("img")); 
console.log(document.querySelector("img"));
console.log(document.querySelectorAll("img"));
console.log(document.querySelectorAll("div a"));
console.log(document.querySelector("h1"));
const links=document.querySelectorAll("a")
for (let link of links){
    console.log(link.href);
}
console.log(document.querySelector("input[type='text']"));
console.log(document.querySelectorAll("section"));
console.log(document.querySelector('h1').innerHTML="The Lion");
console.log(document.getElementById("para-1").innerText);
console.log(document.getElementById("para-2").textContent);
console.log(document.getElementById("para-2").innerHTML);
console.log(document.querySelector('img').alt="lion-img-1");
// Changing the image
const img1=document.querySelector('img')
console.log(img1);
img1.src="https://s.yimg.com/fz/api/res/1.2/j5aUeW.xQxv2v4Aga2SWXw--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0yMjA7cT04MDt3PTI3NQ--/https://s.yimg.com/zb/imgv1/fc58dbb7-6e1d-30bb-b64a-e6fc0f4b6366/t_500x300";
const inpt_type = document.querySelectorAll('input');      
        // Check if the input element exists
if (inpt_type) {
    // If it exists, log its type
    console.log(inpt_type.type);
} else {
    console.error('No input element found.');
}
// *****INLINE STYLE CHANGES*****
const h1=document.querySelector('h1');
h1.style.fontStyle="italic";
h1.style.fontFamily="Poppins, sans-serif";
const paras=document.querySelectorAll('p');
paras.forEach((para)=>{
   para.style.fontFamily="Poppins, sans-serif";
});
// *****CLASS LIST********
const parag=document.querySelectorAll("p");
// parag.forEach((para)=>{
//     para.getAttribute('class')
//     para.setAttribute('class','border')
// });
// The better way of classlist:
let p=0;
parag.forEach((para)=>{
    console.log(para.classList)
    // first we need to add a class, if none exit
    para.classList.add('class')
    para.classList.add('border')
    para.classList.remove('class')
    console.log(` for para-${p++}:${para.classList.contains('class')}`);
    console.log(` for para-${p++}:${para.classList.contains('border')}`);
});

// Will not work since paras is an array
// paras.style.fontFamily="Poppins, sans-serif";
const allLinks=document.querySelectorAll('a');
for (let link of allLinks){
    link.style.color='rgb(0,108,134)';
    link.style.fontStyle="italic";
}
console.log(
    window.getComputedStyle(h1)
);
const div=document.querySelector('div');
console.log(div.parentElement);
console.log(div.parentElement.parentElement);
console.log(div.parentElement.parentElement);
console.log(div);
console.log(div.parentElement.children);
console.log(img1.nextSibling);
const divi=document.querySelector('div')
console.log(divi.previousSibling);
console.log(divi.nextSibling);
console.log(document.createElement); 

document.createElement('img');
const newImg=document.createElement('img');
console.dir(newImg)
newImg.src="https://up.yimg.com/ib/th?id=OIP.puD7uThVLGBAHlq2QTfK4gHaFj&pid=Api&rs=1&c=1&qlt=95&w=140&h=105";
newImg.alt="a lion in grass";
divi.appendChild(newImg)
newImg.classList.add('border')
document.body.append('new text appended')

// const pokediv=document.querySelector(".pokemons");
// const baseURL='https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/';
// for(let i=100;i<150;i++){
//     const pokemon=document.createElement('div');
//     const label=document.createElement('span');
//     label.innerText=`#${i}`;
//     const newPokImg=document.createElement('img');
//     newPokImg.src=`${baseURL}${i}.png?raw=true`;
//     newPokImg.alt=`pokemon-${i}`;
//     pokediv.appendChild(newPokImg);
//     pokemon.appendChild(label);
//     pokediv.appendChild(pokemon);
// }

