import{a as S,i,S as f}from"./assets/vendor-f736e62a.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();async function w(e,o,s){const a="https://pixabay.com",t="/api/?",r=new URLSearchParams({key:"43236135-18e22e789778019f0f194eb5c",q:`${e}`,image_type:"photo",orientation:"horizontal",safesearch:"true",page:`${o}`,per_page:`${s}`}),c=`${a}${t}${r}`;try{return(await S.get(c)).data}catch(y){throw console.error("Error:",y),y}}function $(e){return` 
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
            `}function v(e){return e.map($).join("")}const h="/goit-js-hw-12/assets/logoStop-81eab426.svg",l=document.querySelector(".searchBox"),R=l.querySelector(".searchInput"),g=document.querySelector(".gallery"),m=document.querySelector(".button-search-second");function b(){const e='<span class="loader"></span>';g.innerHTML=e}let p,n,u;const d=15;l.addEventListener("submit",async e=>{if(e.preventDefault(),n=1,p=R.value.trim(),!p){i.show({id:"messageError",position:"topRight",message:"Input your value for search",iconUrl:h,messageColor:"white",color:"#EF4040"});return}try{const o=await w(p,n,d);o.total&&b(),u=Math.ceil(o.totalHits/d);const s=v(o.hits);if(u>1&&I(),!o.total){i.show({id:"messageError",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:h,messageColor:"white",color:"#EF4040"}),L(),l.reset();return}E(),g.innerHTML=s;const a=new f(".gallery a",{captionsData:"alt",captionDelay:250})}catch(o){i.error({position:"topRight",title:"Error",message:`${o}`})}l.reset(),n<u&&P()});function P(){m.addEventListener("click",async()=>{n+=1,u===n&&x();try{const e=await w(p,n,d),o=v(e.hits);if(!e.total){i.show({id:"messageError",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:h,messageColor:"white",color:"#EF4040"});return}E(),g.insertAdjacentHTML("beforeend",o);const s=new f(".gallery a",{captionsData:"alt",captionDelay:250})}catch(e){i.error({position:"topRight",title:"Error",message:`${e}`})}}),m.addEventListener("click",sendNextRequest)}function x(){L(),i.show({id:"messageError",position:"topRight",message:"Sorry, there are no images more",iconUrl:h,messageColor:"white",color:"#EF4040"})}function L(){m.style.display="none"}function I(){m.style.display="flex"}function E(){const e=g.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
