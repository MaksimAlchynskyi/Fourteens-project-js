let e;document.querySelector("body"),document.querySelector("p"),document.querySelector("a"),document.querySelector("li");const t=document.querySelector("main"),n=document.querySelector("footer"),o=document.querySelector("header"),r=document.querySelector(".input-darkmode-toggle"),c=document.querySelector(".modal-content-header"),s=document.querySelectorAll("button"),d=document.querySelectorAll("h2"),a=document.querySelectorAll("p"),l=document.querySelectorAll("a"),i=document.querySelector(".modal");r.addEventListener("click",()=>{for(let e of(n.classList.toggle("dark-theme"),t.classList.toggle("dark-theme"),o.classList.toggle("dark-theme"),c.classList.toggle("dark-theme"),i.classList.toggle("dark-theme"),s))e.classList.toggle("dark-theme");for(let e of d)e.classList.toggle("dark-theme");for(let e of a)e.classList.toggle("dark-theme");for(let e of l)e.classList.toggle("dark-theme")});const u=document.querySelector(".modal-link"),m=document.getElementById("modal-header"),p=document.querySelector(".close-modal-header"),y=document.querySelector(".button-modal-header");function v(){m.style.visibility="hidden"}u.addEventListener("click",function(){m.style.visibility="visible"}),p.addEventListener("click",v),y.addEventListener("click",v),y.addEventListener("click",function(){let e=document.querySelector(".input-modal-header").value;u.innerHTML="Вітаємо "+e});const L={openModalBtn:document.querySelector('[data-action="open-modal"]'),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop")};function b(){window.removeEventListener("keydown",S),document.body.classList.remove("show-modal")}function S(e){"Escape"===e.code&&b()}L.openModalBtn.addEventListener("click",function(){window.addEventListener("keydown",S),document.body.classList.add("show-modal")}),L.closeModalBtn.addEventListener("click",b),L.backdrop.addEventListener("click",function(e){e.currentTarget===e.target&&b()});const f=document.querySelector(".dino"),q=document.querySelector(".cactus");document.querySelector(".dino-game").addEventListener("mousedown",e=>{q.style.animation="cactusMove 1.5s infinite linear","jump"!=f.classList&&f.classList.add("jump"),setTimeout(()=>{f.classList.remove("jump")},550),f.classList.add("dinoRun")}),setInterval(()=>{let e=parseInt(window.getComputedStyle(f).getPropertyValue("top")),t=parseInt(window.getComputedStyle(q).getPropertyValue("left"));t<50&&t>0&&e>=140&&(alert("GAME OVER"),q.style.animation="none",f.classList.remove("dinoRun"))},10);const g=document.querySelector(".input"),k=document.querySelector(".search"),E=document.querySelector(".year-you-born");k.addEventListener("click",()=>{g.value%4==0?(E.textContent="Ви народилися у високосний рік!",E.style.color="#039900"):(E.textContent="Ви народилися не у високосний рік!",E.style.color="#900")});const h=document.querySelector(".enter-number"),x=document.querySelector(".search-time"),C=document.querySelector(".day-hour-min-sec");x.addEventListener("click",()=>{console.log(h.value);let e=Math.floor(h.value/86400),t=Math.floor(h.value%86400/3600),n=Math.floor(h.value%3600/60),o=Math.floor(h.value%60);return C.textContent=`${e}\u{434}\u{43D}. ${t}:${n}:${o}`});let M=document.querySelector(".text-win-or-lose-guese-number-computer-guesed");const w=document.querySelector(".check-number-guese-number-computer-guesed");document.querySelector(".input-guese-number-computer-guesed"),w.addEventListener("click",()=>{let e=document.querySelector(".input-guese-number-computer-guesed").value,t=Math.floor(10*Math.random())+1;M.style.color="red",isNaN(e)||e<1||e>10?M.innerHTML="Будь ласка, введіть число від 1 до 10.":parseInt(e)===t?(M.innerHTML="Вітаю, ви вгадали число! ("+t+")",M.style.color="green"):M.innerHTML="Ви програли, комп’ютер загадав ("+t+")"});let j="";const B=document.querySelector("#stone"),H=document.querySelector("#scissors"),T=document.querySelector("#paper");let N=1;const A=document.querySelector(".result"),I=document.querySelector(".pcScore"),D=document.querySelector(".userScore");let G=0,X=0;B.addEventListener("click",()=>{B.classList.add("box-cvc-js"),H.classList.remove("box-cvc-js"),T.classList.remove("box-cvc-js"),j="stone"}),H.addEventListener("click",()=>{B.classList.remove("box-cvc-js"),H.classList.add("box-cvc-js"),T.classList.remove("box-cvc-js"),j="scissors"}),T.addEventListener("click",()=>{B.classList.remove("box-cvc-js"),H.classList.remove("box-cvc-js"),T.classList.add("box-cvc-js"),j="paper"}),document.getElementById("restart").addEventListener("click",function(){G=0,X=0,D.textContent=G,I.textContent=X,N=1,e="",j="",B.classList.remove("box-cvc-js"),H.classList.remove("box-cvc-js"),T.classList.remove("box-cvc-js"),A.textContent="Результат"}),document.getElementById("play").addEventListener("click",function(){1==(N=Math.floor(3*Math.random()+1))&&(e="stone"),2==N&&(e="scissors"),3==N&&(e="paper"),e==j&&(A.textContent="Нічия"),""==j&&(A.textContent="Результат"),"scissors"==j&&"stone"==e?(A.textContent="Поразка, комп'ютер обрав камінь",X++,I.textContent=X):"scissors"==j&&"paper"==e&&(A.textContent="Перемога, комп'ютер обрав папір",G++,D.textContent=G),"stone"==j&&"paper"==e?(A.textContent="Поразка, комп'ютер обрав папір",X++,I.textContent=X):"stone"==j&&"scissors"==e&&(A.textContent="Перемога, комп'ютер обрав ножиці",G++,D.textContent=G),"paper"==j&&"scissors"==e?(A.textContent="Поразка, комп'ютер обрав ножиці",X++,I.textContent=X):"paper"==j&&"stone"==e&&(A.textContent="Перемога, комп'ютер обрав камінь",G++,D.textContent=G)});const P=[{name:"Albert",surname:"Einstein",born:1879,dead:1955,id:1},{name:"Isaac",surname:"Newton",born:1643,dead:1727,id:2},{name:"Galileo",surname:"Galilei",born:1564,dead:1642,id:3},{name:"Marie",surname:"Curie",born:1867,dead:1934,id:4},{name:"Johannes",surname:"Kepler",born:1571,dead:1630,id:5},{name:"Nicolaus",surname:"Copernicus",born:1473,dead:1543,id:6},{name:"Max",surname:"Planck",born:1858,dead:1947,id:7},{name:"Katherine",surname:"Blodgett",born:1898,dead:1979,id:8},{name:"Ada",surname:"Lovelace",born:1815,dead:1852,id:9},{name:"Sarah E.",surname:"Goode",born:1855,dead:1905,id:10},{name:"Lise",surname:"Meitner",born:1878,dead:1968,id:11},{name:"Hanna",surname:"Hammarström",born:1829,dead:1909,id:12}],R=document.getElementById("scientistCardsContainer");function V(e){R.innerHTML="",e.forEach(e=>{let t=document.createElement("div");t.className="scientist-card",t.innerHTML=`
            <p>Name: ${e.name}</p>
            <p>Surname: ${e.surname}</p>
            <p>Born: ${e.born}</p>
            <p>Dead: ${e.dead}</p>
        `,R.appendChild(t)})}document.querySelector(".button-scien1").addEventListener("click",function(){V(P.filter(e=>e.born>=1800&&e.born<=1899))}),document.querySelector(".button-scien2").addEventListener("click",function(){V(P.slice().sort((e,t)=>e.surname.localeCompare(t.surname)))}),document.querySelector(".button-scien3").addEventListener("click",function(){V(P.slice().sort((e,t)=>t.dead-t.born-(e.dead-e.born)))}),document.querySelector(".button-scien4").addEventListener("click",function(){let e=P.reduce((e,t)=>e.born<t.born?t:e);R.innerHTML="";let t=document.createElement("div");t.className="scientist-card",t.innerHTML=`
            <p>Name: ${e.name}</p>
            <p>Surname: ${e.surname}</p>
            <p>Born: ${e.born}</p>
            <p>Dead: ${e.dead}</p>
        `,R.appendChild(t)}),document.querySelector(".button-scien5").addEventListener("click",function(){let e=P.find(e=>"Albert"===e.name&&"Einstein"===e.surname).born;console.log(e),alert(`Birth year of Albert Einstein: ${e}`)}),document.querySelector(".button-scien6").addEventListener("click",function(){V(P.filter(e=>e.surname.startsWith("C")))}),document.querySelector(".button-scien7").addEventListener("click",function(){V(P.filter(e=>!e.name.startsWith("A")))}),document.querySelector(".button-scien8").addEventListener("click",function(){let[e,t]=P.reduce(([e,t],n)=>{let o=n.dead-n.born;return[o>e.dead-e.born?n:e,o<t.dead-t.born?n:t]},[P[0],P[0]]);console.log(e),R.innerHTML="";let n=document.createElement("div");n.className="scientist-card",n.innerHTML=`
        <p>Name: ${e.name}</p>
        <p>Surname: ${e.surname}</p>
        <p>Born: ${e.born}</p>
        <p>Dead: ${e.dead}</p>
    `,R.appendChild(n);let o=document.createElement("div");o.className="scientist-card",o.innerHTML=`
        <p>Name: ${t.name}</p>
        <p>Surname: ${t.surname}</p>
        <p>Born: ${t.born}</p>
        <p>Dead: ${t.dead}</p>
    `,R.appendChild(o)}),document.querySelector(".button-scien9").addEventListener("click",function(){V(P.filter(e=>e.name[0]===e.surname[0]))}),$(document).ready(function(e){$(".list-team").slick({dots:!0,infinite:!0,speed:300,slidesToShow:1,adaptiveHeight:!0})});const K=document.querySelector(".wrap-cort"),W=document.querySelector(".ball");let Y=0,J=0;K.addEventListener("click",function(e){e.offsetX>J?Y+=45:Y-=45,J=e.offsetX,W.style.rotate=`${Y}deg`,e.offsetY>170?W.style.top="50px":W.style.top=`${e.offsetY}px`,e.offsetX>670?W.style.left="50px":W.style.left=`${e.offsetX}px`});
//# sourceMappingURL=index.84151d9c.js.map