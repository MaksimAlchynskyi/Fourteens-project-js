const e=document.querySelector("body"),t=document.querySelector("p"),o=(document.querySelector("a"),document.querySelector("li"),document.querySelector(".input-darkmode-toggle"));o.addEventListener("click",(()=>{o.checked?(e.style.backgroundColor="white",e.style.backgroundColor="#1e2125"):(e.style.backgroundColor="black",e.style.backgroundColor="white",t.style.color="black")}));const c=document.querySelector(".modal-link"),l=document.getElementById("modal-header"),n=document.querySelector(".close-modal-header"),d=document.querySelector(".button-modal-header");function r(){l.style.visibility="hidden"}c.addEventListener("click",(function(){l.style.visibility="visible"})),n.addEventListener("click",r),d.addEventListener("click",r),d.addEventListener("click",(function(){const e=document.querySelector(".input-modal-header").value;c.innerHTML="Вітаємо "+e}));
//# sourceMappingURL=index.1e5e75d8.js.map
