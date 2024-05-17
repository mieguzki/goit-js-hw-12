import{a as w,S as v,i as n}from"./assets/vendor-6e0bf343.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function m(r){return r.map(({webformatURL:a,largeImageURL:s,tags:o,likes:e,views:t,comments:c,downloads:L})=>`
      <li class="gallery-item">
        <div class="gallery">
         <a class="gallery-link" href="${s}">
         <img class="gallery-image"
           src="${a}"
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
      `).join("")}async function g(r,a){const s="43682309-decfbd59f0a24849675c6bf75",o="https://pixabay.com/api/",e=new URLSearchParams({key:s,q:r,image_typ:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:15}),{data:t}=await w.get(`${o}?${e}`);return t}const y=document.querySelector(".form-inline"),p=document.querySelector(".js-list"),S=document.querySelector(".loader"),l=document.querySelector(".btn-load");y.addEventListener("submit",P);l.addEventListener("click",$);function u(){S.classList.toggle("is-visible")}function h(r){r?(l.classList.add("load-more"),l.classList.remove("btn-hidden")):(l.classList.remove("load-more"),l.classList.add("btn-hidden"))}const b=new v(".images a",{captionsData:"alt",captionDelay:250});let i=1,f=0,d="";async function P(r){r.preventDefault(),p.innerHTML="",i=1;const{query:a}=r.currentTarget.elements;if(d=a.value.trim(),d===""){n.error({title:"Error",message:"The field cannot be empty!!!",position:"topRight"});return}u();try{const s=await g(d,i);if(s.hits.length===0){n.warning({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}if(p.insertAdjacentHTML("beforeend",m(s.hits)),b.refresh(),f=Math.ceil(s.totalHits/15),s.hits.length<15){h(!1),n.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."});return}h(i<f),y.reset()}catch{n.error({title:"Error",message:"An error occurred while fetching data. Please try again later.",position:"topRight"})}finally{u()}}async function $(){i+=1,u();try{const r=await g(d,i);p.insertAdjacentHTML("beforeend",m(r.hits)),b.refresh(),h(i<f),i>=f&&n.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}catch{n.error({title:"Error",message:"An error occurred while fetching data. Please try again later.",position:"topRight"})}finally{u()}}
//# sourceMappingURL=commonHelpers.js.map
