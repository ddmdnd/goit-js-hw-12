import{a as L,i,S as f}from"./assets/vendor-f736e62a.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();async function w(e,o,s){const a="https://pixabay.com",t="/api/?",r=new URLSearchParams({key:"43236135-18e22e789778019f0f194eb5c",q:`${e}`,image_type:"photo",orientation:"horizontal",safesearch:"true",page:`${o}`,per_page:`${s}`}),c=`${a}${t}${r}`;try{return(await L.get(c)).data}catch(g){throw console.error("Error:",g),g}}function $(e){return` 
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
            `}function v(e){return e.map($).join("")}const u="/goit-js-hw-12/assets/logoStop-81eab426.svg",p=document.querySelector(".searchBox"),R=p.querySelector(".searchInput"),m=document.querySelector(".gallery"),d=document.querySelector(".button-search-second");function b(){const e='<span class="loader"></span>';m.innerHTML=e}let l,n,h;const y=15;p.addEventListener("submit",async e=>{if(e.preventDefault(),n=1,l=R.value.trim(),!l){i.show({id:"messageError",position:"topRight",message:"Input your value for search",iconUrl:u,messageColor:"white",color:"#EF4040"});return}l&&b();try{const o=await w(l,n,y);h=Math.ceil(o.totalHits/y);const s=v(o.hits);E(),h>1&&I(),o.total||(i.show({id:"messageError",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:u,messageColor:"white",color:"#EF4040"}),S(),p.reset()),m.innerHTML=s;const a=new f(".gallery a",{captionsData:"alt",captionDelay:250})}catch(o){i.error({position:"topRight",title:"Error",message:`${o}`})}p.reset(),n<h&&P()});function P(){d.addEventListener("click",async()=>{n+=1,h===n&&x();try{const e=await w(l,n,y),o=v(e.hits);E(),e.total||i.show({id:"messageError",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:u,messageColor:"white",color:"#EF4040"}),m.insertAdjacentHTML("beforeend",o);const s=new f(".gallery a",{captionsData:"alt",captionDelay:250})}catch(e){i.error({position:"topRight",title:"Error",message:`${e}`})}})}function x(){S(),i.show({id:"messageError",position:"topRight",message:"Sorry, there are no images more",iconUrl:u,messageColor:"white",color:"#EF4040"})}function S(){d.style.display="none"}function I(){d.style.display="flex"}function E(){const e=m.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
