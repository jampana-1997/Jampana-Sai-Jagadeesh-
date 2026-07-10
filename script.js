// ===============================
// Apple Portfolio Script
// ===============================

// Typing Effect
const words = [
  "Computer Operator",
  "Frontend Developer",
  "MBA Finance Graduate",
  "Excel Expert",
  "Oracle SQL"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    if(!typing) return;

    let current = words[wordIndex];

    if(!deleting){

        typing.innerHTML=current.substring(0,charIndex++);

        if(charIndex>current.length){

            deleting=true;

            setTimeout(typeEffect,1500);

            return;

        }

    }else{

        typing.innerHTML=current.substring(0,charIndex--);

        if(charIndex<0){

            deleting=false;

            wordIndex++;

            if(wordIndex>=words.length){

                wordIndex=0;

            }

        }

    }

    setTimeout(typeEffect,deleting?60:120);

}

typeEffect();


// Navbar Background

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>80){

header.style.background="rgba(5,8,22,.92)";

}else{

header.style.background="rgba(10,10,15,.55)";

}

});


// Active Navigation

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

const height=section.clientHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});


// Reveal Animation

const reveal=document.querySelectorAll(".card,.about-box,.skill,.hero-left,.hero-right");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

reveal.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(50px)";

item.style.transition=".8s";

observer.observe(item);

});


// Scroll Top Button

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="30px";
topBtn.style.right="30px";
topBtn.style.width="55px";
topBtn.style.height="55px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#2563eb";
topBtn.style.color="white";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="9999";

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


// Current Year

const footer=document.querySelector("footer p:last-child");

if(footer){

footer.innerHTML="© "+new Date().getFullYear()+" All Rights Reserved";

}