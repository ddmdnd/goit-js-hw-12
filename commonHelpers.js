import{a as L,i,S as f}from"./assets/vendor-f736e62a.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();async function w(e,o,s){const a="https://pixabay.com",t="/api/?",r=new URLSearchParams({key:"43236135-18e22e789778019f0f194eb5c",q:`${e}`,image_type:"photo",orientation:"horizontal",safesearch:"true",page:`${o}`,per_page:`${s}`}),n=`${a}${t}${r}`;try{return(await L.get(n)).data}catch(m){throw console.error("Error:",m),m}}function S(e){return` 
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
            `}function v(e){return e.map(S).join("")}const l="/goit-js-hw-12/assets/logoStop-81eab426.svg",g=document.querySelector(".searchBox"),E=g.querySelector(".searchInput"),d=document.querySelector(".gallery"),p=document.querySelector(".button-search-second");function $(){const e='<span class="loader"></span>';d.innerHTML=e}let c,h=1,u;const y=15;g.addEventListener("submit",async e=>{if(e.preventDefault(),c=E.value.trim(),!c){i.show({id:"messageError",position:"topRight",message:"Input your value for search",iconUrl:l,messageColor:"white",color:"#EF4040"});return}c&&$();try{const o=await w(c,h,y);u=Math.ceil(o.totalHits/y);const s=v(o.hits);u>0&&x(),o.total||i.show({id:"messageError",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:l,messageColor:"white",color:"#EF4040"}),d.innerHTML=s;const a=new f(".gallery a",{captionsData:"alt",captionDelay:250})}catch(o){console.error(o),i.error({position:"topRight",title:"Error",message:`${o}`})}g.reset(),P()});function P(){p.addEventListener("click",async()=>{h+=1,console.log(u),R();try{const e=await w(c,h,y),o=v(e.hits);p.style.display="flex",e.total||i.show({id:"messageError",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:l,messageColor:"white",color:"#EF4040"}),d.insertAdjacentHTML("beforeend",o);const s=new f(".gallery a",{captionsData:"alt",captionDelay:250})}catch(e){console.error(e),i.error({position:"topRight",title:"Error",message:`${e}`})}})}function R(){if(h>=u){b(),i.show({id:"messageError",position:"topRight",message:"Sorry, there are no images more",iconUrl:l,messageColor:"white",color:"#EF4040"});return}}function b(){p.classList.add("hidden")}function x(){p.classList.remove("hidden")}
//# sourceMappingURL=commonHelpers.js.map
