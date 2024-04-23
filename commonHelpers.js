import{a as R,i as a,S as v}from"./assets/vendor-f736e62a.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();async function L(e,o,n){const c="https://pixabay.com",t="/api/?",r=new URLSearchParams({key:"43236135-18e22e789778019f0f194eb5c",q:`${e}`,image_type:"photo",orientation:"horizontal",safesearch:"true",page:`${o}`,per_page:`${n}`}),l=`${c}${t}${r}`;try{return(await R.get(l)).data}catch(y){throw console.error("Error:",y),y}}function b(e){return` 
    <li class = "photoItem">
        <a class="gallery-link" href="${e.largeImageURL}">
            <img
                class="img"
                src="${e.previewURL}"
                alt="${e.tags}"/>
            <div class= "titlePhoto">
            <div class="propertyItem">
                <h5 class="proportyTitle">Likes</h5>
                <p class="propertyQuantety">${e.likes}</p>
            </div>
            <div class="propertyItem">
                <h5 class="proportyTitle">Views</h5>
                <p class="propertyQuantety">${e.views}</p>
            </div>
            <div class="propertyItem">
                <h5 class="proportyTitle">Comments</h5>
                <p class="propertyQuantety">${e.comments}</p>
            </div>
            <div class="propertyItem">
                <h5 class="proportyTitle">Downloads</h5>
                <p class="propertyQuantety">${e.downloads}</p>
            </div>
            </div>
            </a>
            </li>
            `}function E(e){return e.map(b).join("")}const m="/goit-js-hw-12/assets/logoStop-81eab426.svg",s=document.querySelector(".searchBox"),P=s.querySelector(".searchInput"),p=document.querySelector(".gallery"),g=document.querySelector(".button-search-second");function T(){const e='<span class="loader"></span>';p.innerHTML=e}let u,i,h;const f=15;s.addEventListener("submit",async e=>{if(e.preventDefault(),i=1,u=P.value.trim(),!u){a.show({id:"messageError",position:"topRight",message:"Input your value for search",iconUrl:m,messageColor:"white",color:"#EF4040"}),s.reset(),d();return}try{const o=await L(u,i,f);o.total&&T(),h=Math.ceil(o.totalHits/f);const n=E(o.hits);if(h>1&&I(),!o.total){a.show({id:"messageError",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:m,messageColor:"white",color:"#EF4040"}),w(),s.reset(),d();return}$(),p.innerHTML=n;const c=new v(".gallery a",{captionsData:"alt",captionDelay:250})}catch(o){a.error({position:"topRight",title:"Error",message:`${o}`}),w(),s.reset(),d()}s.reset(),i<h&&S()});function S(){g.addEventListener("click",async()=>{i+=1,h===i&&x();try{const e=await L(u,i,f),o=E(e.hits);if(!e.total){a.show({id:"messageError",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:m,messageColor:"white",color:"#EF4040"}),s.reset();return}$(),p.insertAdjacentHTML("beforeend",o);const n=new v(".gallery a",{captionsData:"alt",captionDelay:250})}catch(e){a.error({position:"topRight",title:"Error",message:`${e}`})}}),g.addEventListener("click",S)}function x(){w(),a.show({id:"messageError",position:"topRight",message:"Sorry, there are no images more",iconUrl:m,messageColor:"white",color:"#EF4040"})}function w(){g.style.display="none"}function I(){g.style.display="flex"}function $(){const e=p.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}function d(){p.innerHTML="",i=1}
//# sourceMappingURL=commonHelpers.js.map
