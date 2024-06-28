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