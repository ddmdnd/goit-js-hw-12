import{a as S,i,S as f}from"./assets/vendor-f736e62a.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();async function w(e,o,s){const n="https://pixabay.com",t="/api/?",r=new URLSearchParams({key:"43236135-18e22e789778019f0f194eb5c",q:`${e}`,image_type:"photo",orientation:"horizontal",safesearch:"true",page:`${o}`,per_page:`${s}`}),a=`${n}${t}${r}`;try{return(await S.get(a)).data}catch(m){throw console.error("Error:",m),m}}function E(e){return` 
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
            `}function v(e){return e.map(E).join("")}const l="/goit-js-hw-12/assets/logoStop-81eab426.svg",g=document.querySelector(".searchBox"),$=g.querySelector(".searchInput"),u=document.querySelector(".gallery"),y=document.querySelector(".button-search-second");function R(){const e='<span class="loader"></span>';u.innerHTML=e}let c,p=1,h;const d=15;g.addEventListener("submit",async e=>{if(e.preventDefault(),c=$.value.trim(),!c){i.show({id:"messageError",position:"topRight",message:"Input your value for search",iconUrl:l,messageColor:"white",color:"#EF4040"});return}c&&R();try{const o=await w(c,p,d);h=Math.ceil(o.totalHits/d);const s=v(o.hits);L(),h>0&&T(),o.total||i.show({id:"messageError",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:l,messageColor:"white",color:"#EF4040"}),u.innerHTML=s;const n=new f(".gallery a",{captionsData:"alt",captionDelay:250})}catch(o){console.error(o),i.error({position:"topRight",title:"Error",message:`${o}`})}g.reset(),b()});function b(){y.addEventListener("click",async()=>{p+=1,console.log(h),P();try{const e=await w(c,p,d),o=v(e.hits);L(),e.total||i.show({id:"messageError",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:l,messageColor:"white",color:"#EF4040"}),u.insertAdjacentHTML("beforeend",o);const s=new f(".gallery a",{captionsData:"alt",captionDelay:250})}catch(e){console.error(e),i.error({position:"topRight",title:"Error",message:`${e}`})}})}function P(){if(p>=h){I(),i.show({id:"messageError",position:"topRight",message:"Sorry, there are no images more",iconUrl:l,messageColor:"white",color:"#EF4040"});return}}function I(){y.classList.add("hidden")}function T(){y.classList.remove("hidden")}function L(){const e=u.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
