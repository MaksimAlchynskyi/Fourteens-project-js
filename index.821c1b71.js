document.querySelector("body"),document.querySelector("p"),document.querySelector("a"),document.querySelector("li");const e=document.querySelector("main"),n=document.querySelector("footer"),t=document.querySelector("header"),o=document.querySelector(".input-darkmode-toggle"),r=document.querySelector(".modal-content-header"),c=document.querySelectorAll("button"),d=document.querySelectorAll("h2"),a=document.querySelectorAll("p"),s=document.querySelectorAll("a"),u=document.querySelector(".modal");o.addEventListener("click",(()=>{n.classList.toggle("dark-theme"),e.classList.toggle("dark-theme"),t.classList.toggle("dark-theme"),r.classList.toggle("dark-theme"),u.classList.toggle("dark-theme");for(let e of c)e.classList.toggle("dark-theme");for(let e of d)e.classList.toggle("dark-theme");for(const e of a)e.classList.toggle("dark-theme");for(const e of s)e.classList.toggle("dark-theme")}));const i=document.querySelector(".modal-link"),l=document.getElementById("modal-header"),m=document.querySelector(".close-modal-header"),p=document.querySelector(".button-modal-header");function y(){l.style.visibility="hidden"}i.addEventListener("click",(function(){l.style.visibility="visible"})),m.addEventListener("click",y),p.addEventListener("click",y),p.addEventListener("click",(function(){const e=document.querySelector(".input-modal-header").value;i.innerHTML="Вітаємо "+e}));const b={openModalBtn:document.querySelector('[data-action="open-modal"]'),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop")};function L(){window.removeEventListener("keydown",S),document.body.classList.remove("show-modal")}function S(e){"Escape"===e.code&&L()}b.openModalBtn.addEventListener("click",(function(){window.addEventListener("keydown",S),document.body.classList.add("show-modal")})),b.closeModalBtn.addEventListener("click",L),b.backdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&L()}));const q=document.querySelector(".dino"),v=document.querySelector(".cactus");document.querySelector(".dino-game").addEventListener("mousedown",(e=>{v.style.animation="cactusMove 1.5s infinite linear",function(){"jump"!=q.classList&&q.classList.add("jump");setTimeout((()=>{q.classList.remove("jump")}),550)}(),q.classList.add("dinoRun")}));setInterval((()=>{let e=parseInt(window.getComputedStyle(q).getPropertyValue("top")),n=parseInt(window.getComputedStyle(v).getPropertyValue("left"));n<50&&n>0&&e>=140&&(alert("GAME OVER"),v.style.animation="none",q.classList.remove("dinoRun"))}),10);const g=document.querySelector(".input"),f=document.querySelector(".search"),k=document.querySelector(".year-you-born");f.addEventListener("click",(()=>{g.value%4==0?(k.textContent="Ви народилися у високосний рік!",k.style.color="#039900"):(k.textContent="Ви народилися не у високосний рік!",k.style.color="#900")}));const h=document.querySelector(".enter-number"),E=document.querySelector(".search-time"),M=document.querySelector(".day-hour-min-sec");E.addEventListener("click",(()=>{const e=Math.floor(h.value/60),n=h.value%60;M.textContent=`${e}:${n}`}));let $=document.querySelector(".text-win-or-lose-guese-number-computer-guesed");const w=document.querySelector(".check-number-guese-number-computer-guesed");document.querySelector(".input-guese-number-computer-guesed");w.addEventListener("click",(()=>{const e=document.querySelector(".input-guese-number-computer-guesed").value,n=Math.floor(10*Math.random())+1;$.style.color="red",isNaN(e)||e<1||e>10?$.innerHTML="Будь ласка, введіть число від 1 до 10.":parseInt(e)===n?($.innerHTML="Вітаю, ви вгадали число! ("+n+")",$.style.color="green"):$.innerHTML="Ви програли, комп’ютер загадав ("+n+")"}));const C=[{name:"Albert",surname:"Einstein",born:1879,dead:1955,id:1},{name:"Isaac",surname:"Newton",born:1643,dead:1727,id:2},{name:"Galileo",surname:"Galilei",born:1564,dead:1642,id:3},{name:"Marie",surname:"Curie",born:1867,dead:1934,id:4},{name:"Johannes",surname:"Kepler",born:1571,dead:1630,id:5},{name:"Nicolaus",surname:"Copernicus",born:1473,dead:1543,id:6},{name:"Max",surname:"Planck",born:1858,dead:1947,id:7},{name:"Katherine",surname:"Blodgett",born:1898,dead:1979,id:8},{name:"Ada",surname:"Lovelace",born:1815,dead:1852,id:9},{name:"Sarah E.",surname:"Goode",born:1855,dead:1905,id:10},{name:"Lise",surname:"Meitner",born:1878,dead:1968,id:11},{name:"Hanna",surname:"Hammarström",born:1829,dead:1909,id:12}],H=document.getElementById("scientistCardsContainer");function T(e){H.innerHTML="",e.forEach((e=>{const n=document.createElement("div");n.className="scientist-card",n.innerHTML=`\n            <p>Name: ${e.name}</p>\n            <p>Surname: ${e.surname}</p>\n            <p>Born: ${e.born}</p>\n            <p>Dead: ${e.dead}</p>\n        `,H.appendChild(n)}))}document.querySelector(".button-scien1").addEventListener("click",(function(){T(C.filter((e=>e.born>=1800&&e.born<=1899)))})),document.querySelector(".button-scien2").addEventListener("click",(function(){T(C.slice().sort(((e,n)=>e.surname.localeCompare(n.surname))))})),document.querySelector(".button-scien3").addEventListener("click",(function(){T(C.slice().sort(((e,n)=>n.dead-n.born-(e.dead-e.born))))})),document.querySelector(".button-scien4").addEventListener("click",(function(){const e=C.reduce(((e,n)=>e.born<n.born?n:e));H.innerHTML="";const n=document.createElement("div");n.className="scientist-card",n.innerHTML=`\n            <p>Name: ${e.name}</p>\n            <p>Surname: ${e.surname}</p>\n            <p>Born: ${e.born}</p>\n            <p>Dead: ${e.dead}</p>\n        `,H.appendChild(n)})),document.querySelector(".button-scien5").addEventListener("click",(function(){const e=C.find((e=>"Albert"===e.name&&"Einstein"===e.surname)).born;console.log(e),alert(`Birth year of Albert Einstein: ${e}`)})),document.querySelector(".button-scien6").addEventListener("click",(function(){T(C.filter((e=>e.surname.startsWith("C"))))})),document.querySelector(".button-scien7").addEventListener("click",(function(){T(C.filter((e=>!e.name.startsWith("A"))))})),document.querySelector(".button-scien8").addEventListener("click",(function(){const[e,n]=C.reduce((([e,n],t)=>{const o=t.dead-t.born;return[o>e.dead-e.born?t:e,o<n.dead-n.born?t:n]}),[C[0],C[0]]);console.log(e),H.innerHTML="";const t=document.createElement("div");t.className="scientist-card",t.innerHTML=`\n        <p>Name: ${e.name}</p>\n        <p>Surname: ${e.surname}</p>\n        <p>Born: ${e.born}</p>\n        <p>Dead: ${e.dead}</p>\n    `,H.appendChild(t);const o=document.createElement("div");o.className="scientist-card",o.innerHTML=`\n        <p>Name: ${n.name}</p>\n        <p>Surname: ${n.surname}</p>\n        <p>Born: ${n.born}</p>\n        <p>Dead: ${n.dead}</p>\n    `,H.appendChild(o)})),document.querySelector(".button-scien9").addEventListener("click",(function(){T(C.filter((e=>e.name[0]===e.surname[0])))}));
//# sourceMappingURL=index.821c1b71.js.map
