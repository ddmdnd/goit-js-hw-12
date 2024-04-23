import{a as E,i,S as f}from"./assets/vendor-f736e62a.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();async function w(e,o,s){const n="https://pixabay.com",t="/api/?",r=new URLSearchParams({key:"43236135-18e22e789778019f0f194eb5c",q:`${e}`,image_type:"photo",orientation:"horizontal",safesearch:"true",page:`${o}`,per_page:`${s}`}),a=`${n}${t}${r}`;try{return(await E.get(a)).data}catch(g){throw console.error("Error:",g),g}}function $(e){return` 
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
            `}function v(e){return e.map($).join("")}const u="/goit-js-hw-12/assets/logoStop-81eab426.svg",h=document.querySelector(".searchBox"),R=h.querySelector(".searchInput"),m=document.querySelector(".gallery"),y=document.querySelector(".button-search-second");function b(){const e='<span class="loader"></span>';m.innerHTML=e}let c,l,p;const d=15;h.addEventListener("submit",async e=>{if(e.preventDefault(),l=1,c=R.value.trim(),!c){i.show({id:"messageError",position:"topRight",message:"Input your value for search",iconUrl:u,messageColor:"white",color:"#EF4040"});return}c&&b();try{const o=await w(c,l,d);p=Math.ceil(o.totalHits/d);const s=v(o.hits);S(),console.log(p),p>1&&T(),o.total||(i.show({id:"messageError",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:u,messageColor:"white",color:"#EF4040"}),L(),h.reset()),m.innerHTML=s;const n=new f(".gallery a",{captionsData:"alt",captionDelay:250})}catch(o){i.error({position:"topRight",title:"Error",message:`${o}`})}h.reset(),l>=p&&P()});function P(){y.addEventListener("click",async()=>{l+=1,I();try{const e=await w(c,l,d),o=v(e.hits);S(),e.total||i.show({id:"messageError",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:u,messageColor:"white",color:"#EF4040"}),m.insertAdjacentHTML("beforeend",o);const s=new f(".gallery a",{captionsData:"alt",captionDelay:250})}catch(e){i.error({position:"topRight",title:"Error",message:`${e}`})}})}function I(){L(),i.show({id:"messageError",position:"topRight",message:"Sorry, there are no images more",iconUrl:u,messageColor:"white",color:"#EF4040"})}function L(){y.classList.add("hidden")}function T(){y.classList.remove("hidden")}function S(){const e=m.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
