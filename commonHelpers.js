import{a as w,S,i as a}from"./assets/vendor-6e0bf343.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function g(s){return s.map(({webformatURL:i,largeImageURL:r,tags:o,likes:e,views:t,comments:c,downloads:L})=>`
      <li class="gallery-item">
        <div class="gallery">
         <a class="gallery-link" href="${r}">
         <img class="gallery-image"
           src="${i}"
           alt="${o}"
          />
         </a>
         
        <ul class="card-description">
          <li class="description">Likes <span class="accent">${e} </span></li>
          <li class="description">Views <span class="accent">${t} </span></li>
          <li class="description">Comments <span class="accent">${c} </span></li>
          <li class="description">Downloads <span class="accent">${L} </span></li>
        </ul>
        </div>
      </li>
      `).join("")}async function h(s,i){const r="43682309-decfbd59f0a24849675c6bf75",o="https://pixabay.com/api/",e=new URLSearchParams({key:r,q:s,image_typ:"photo",orientation:"horizontal",safesearch:!0,page:i,per_page:15}),{data:t}=await w.get(`${o}?${e}`);return t}const m=document.querySelector(".form-inline"),d=document.querySelector(".js-list"),v=document.querySelector(".loader"),y=document.querySelector(".btn-load");m.addEventListener("submit",P);y.addEventListener("click",$);function u(){v.classList.toggle("is-visible")}function f(){y.classList.toggle("load-more")}const b=new S(".images a",{captionsData:"alt",captionDelay:250});let n=1,p=0,l="";async function P(s){s.preventDefault(),d.innerHTML="",n=1;const{query:i}=s.currentTarget.elements;if(l=i.value.trim(),l===""){a.error({title:"Error",message:"The field cannot be empty!!!",position:"topRight"});return}u();try{const r=await h(l,n);if(r.hits.length===0){a.warning({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}if(d.insertAdjacentHTML("beforeend",g(r.hits)),b.refresh(),p=Math.ceil(r.totalHits/15),r.hits.length<15){f(),a.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."});return}n<=p&&f(),m.reset()}catch{a.error({title:"Error",message:"An error occurred while fetching data. Please try again later.",position:"topRight"})}finally{u()}}async function $(){n+=1,u();try{const s=await h(l,n);if(d.insertAdjacentHTML("beforeend",g(s.hits)),b.refresh(),n===p)return f(),a.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}catch{a.error({title:"Error",message:"An error occurred while fetching data. Please try again later.",position:"topRight"})}finally{u()}}
//# sourceMappingURL=commonHelpers.js.map
