import{a as w,S as v,i as o}from"./assets/vendor-6e0bf343.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function g(r){return r.map(({webformatURL:a,largeImageURL:s,tags:i,likes:e,views:t,comments:c,downloads:L})=>`
      <li class="gallery-item">
        <div class="gallery">
         <a class="gallery-link" href="${s}">
         <img class="gallery-image"
           src="${a}"
           alt="${i}"
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
      `).join("")}async function m(r,a){const s="43682309-decfbd59f0a24849675c6bf75",i="https://pixabay.com/api/",e=new URLSearchParams({key:s,q:r,image_typ:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:15}),{data:t}=await w.get(`${i}?${e}`);return t}const y=document.querySelector(".form-inline"),p=document.querySelector(".js-list"),S=document.querySelector(".loader"),l=document.querySelector(".btn-load");y.addEventListener("submit",P);l.addEventListener("click",$);function u(){S.classList.toggle("is-visible")}function f(r){r?(l.classList.add("load-more"),l.classList.remove("btn-hidden")):(l.classList.remove("load-more"),l.classList.add("btn-hidden"))}const b=new v(".images a",{captionsData:"alt",captionDelay:250});let n=1,h=0,d="";async function P(r){r.preventDefault(),p.innerHTML="",n=1;const{query:a}=r.currentTarget.elements;if(d=a.value.trim(),d===""){o.error({title:"Error",message:"The field cannot be empty!!!",position:"topRight"});return}u();try{const s=await m(d,n);if(s.hits.length===0){o.warning({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p.insertAdjacentHTML("beforeend",g(s.hits)),b.refresh(),h=Math.ceil(s.totalHits/15),s.hits.length<15||n===h?(f(!1),o.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})):f(!0),y.reset()}catch{o.error({title:"Error",message:"An error occurred while fetching data. Please try again later.",position:"topRight"})}finally{u()}}async function $(){n+=1,u();try{const r=await m(d,n);p.insertAdjacentHTML("beforeend",g(r.hits)),b.refresh(),n===h||r.hits.length<15?(f(!1),o.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})):f(!0)}catch{o.error({title:"Error",message:"An error occurred while fetching data. Please try again later.",position:"topRight"})}finally{u()}}
//# sourceMappingURL=commonHelpers.js.map
