import{a as f,i,S as y}from"./assets/vendor-f736e62a.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();async function h(e,o){const s="https://pixabay.com",a="/api/?",t=new URLSearchParams({key:"43236135-18e22e789778019f0f194eb5c",q:`${e}`,image_type:"photo",orientation:"horizontal",safesearch:"true",page:`${o}`,per_page:15}),r=`${s}${a}${t}`;try{return(await f.get(r)).data}catch(n){throw console.error("Error:",n),n}}function v(e){return` 
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
            `}function d(e){return console.log(e),e.map(v).join("")}const m="/goit-js-hw-12/assets/logoStop-81eab426.svg",l=document.querySelector(".searchBox"),g=l.querySelector(".searchInput"),c=document.querySelector(".gallery"),p=document.querySelector(".button-search-second");function w(){const e='<span class="loader"></span>';c.innerHTML=e}let u=1;l.addEventListener("submit",async e=>{e.preventDefault(),c.insertAdjacentHTML("beforeend",'<span class="loader"></span>');const o=g.value;w();try{const s=await h(o,u),a=d(s.hits);p.style.display="flex",s.total||i.show({id:"messageError",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:m,messageColor:"white",color:"#EF4040"}),c.innerHTML=a;const t=new y(".gallery a",{captionsData:"alt",captionDelay:250})}catch(s){console.error(s),i.error({position:"topRight",title:"Error",message:`${s}`})}l.reset(),L()});function L(){p.addEventListener("click",async()=>{u+=1;const e=g.value;try{const o=await h(e,u),s=d(o.hits);p.style.display="flex",o.total||i.show({id:"messageError",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:m,messageColor:"white",color:"#EF4040"}),c.insertAdjacentHTML("beforeend",s);const a=new y(".gallery a",{captionsData:"alt",captionDelay:250})}catch(o){console.error(o),i.error({position:"topRight",title:"Error",message:`${o}`})}})}
//# sourceMappingURL=commonHelpers.js.map
