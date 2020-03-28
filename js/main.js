const toggle=document.getElementById("menu-toggle");function toggleMenu(){const toggle=document.querySelector("#menu-toggle");if(toggle.checked&&!hadClass(".nav-top__link","responsive-nav")){classAdd("#overlay","overlay")
classAdd(".header","header-change");classAdd(".header ~ *","display-none");classAdd(".link-inner","responsive-nav");classRemove(".link-inner","scroll");let menuPressed=new EventIter(".responsive-nav","click",scrollAnchorsResponsive);menuPressed.exec()}else{classRemove("#overlay","overlay")
classRemove(".header","header-change");classRemove(".header ~ *","display-none")
classRemove(".link-inner","responsive-nav");classAdd(".link-inner","scroll");let menuPressed=new RemEventIter(".responsive-nav","click",scrollAnchorsResponsive);menuPressed.exec()}}
function remMenu(select){if(isChecked(select))
toggleCleck(select);toggleMenu()}
function widthChecker(){if(window.innerWidth>1024){remMenu("#menu-toggle")}}
window.onresize=widthChecker;window.onload=remMenu("#menu-toggle");function scrollAnchorsResponsive(event){remMenu("#menu-toggle");const innerScrollAnchors=scrollAnchors.bind(this);innerScrollAnchors(event)}
function isChecked(elem){const input=document.querySelector(elem);return input.checked}
function toggleCleck(elem){const input=document.querySelector(elem);input.checked=!input.checked}
function classRemove(elem,classes){const items=document.querySelectorAll(elem);items.forEach(item=>(classes.split(' ').forEach(clss=>(item.classList.remove(clss)))))}
function classAdd(elem,classes){const items=document.querySelectorAll(elem);items.forEach(item=>(item.classList+=" "+classes))}
function hadClass(elem,clss){const item=document.querySelector(elem);return!0?item.classList.value.includes("display-none"):!1}
const _scrollTo=new EventIter('.scroll','click',scrollAnchors);_scrollTo.exec();function scrollAnchors(event){event.preventDefault();const targetID=this.getAttribute("href")||this.getAttribute("name");const targetElem=document.querySelector(targetID);const targetDistanceToTop=targetElem.getBoundingClientRect().top;scrollBySetting(targetDistanceToTop-32)}
function scrollBySetting(top,left=0,behavior="smooth"){window.scrollBy({top:top,left:left,behavior:behavior})}
function loadDOMContentLoaded(){toggle.addEventListener("click",toggleMenu,!1);document.addEventListener("scroll",()=>{appearAllElem();arrowUpAppear()})}
document.addEventListener("DOMContentLoaded",loadDOMContentLoaded,!1);function appearAllElem(){const html=document.getElementsByTagName("html")[0];const elementsAppear=document.getElementsByClassName("appear");let topViewport=html.scrollTop;let innerHeight=window.innerHeight;for(i=0;i<elementsAppear.length;i++){let topElemAppear=elementsAppear[i].offsetTop;if(topViewport>topElemAppear-innerHeight+100){elementsAppear[i].style.opacity=1}}}
function arrowUpAppear(){let endHome=document.querySelector(".hero").getBoundingClientRect().bottom;let scrollY=window.scrollY;if(scrollY>endHome){classRemove(".up","display-none")}else if(!hadClass(".up","display-none")){classAdd(".up","display-none")}}
function EventIter(elem,trig,func){this.items=document.querySelectorAll(elem);this.trig=trig;this.func=func;this.exec=()=>(this.items.forEach(item=>item.addEventListener(this.trig,this.func)))}
function RemEventIter(elem,trig,func){this.items=document.querySelectorAll(elem);this.trig=trig;this.func=func;this.exec=()=>(this.items.forEach(item=>item.removeEventListener(this.trig,this.func)))}