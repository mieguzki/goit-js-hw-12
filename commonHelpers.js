import{a as h,S as v,i as p}from"./assets/vendor-6e0bf343.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const u of t.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function n(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(s){if(s.ep)return;s.ep=!0;const t=n(s);fetch(s.href,t)}})();async function m(a,e){const n={params:{key:"43344666-8172f6ac72992b92fe58b4040",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e}};return await h.get("https://pixabay.com/api/",n)}function f(a){return a.map(e=>`<li class="gallery-item">
  <a href="${e.largeImageURL}"
    ><img src="${e.webformatURL}" alt="${e.tags}" class="photo"
  /></a>
  <div class="gallery-item-container">
<div class="label-container"><span class="label">Likes</span><span class="value">${e.likes}</span></div>
    <div class="label-container"><span class="label">Views</span><span class="value">${e.views}</span></div>
    <div class="label-container"><span class="label">Comments</span><span class="value">${e.comments}</span></div>
    <div class="label-container"><span class="label">Downloads</span><span class="value">${e.downloads}</span></div>
  </div>
</li>`).join("")}const y=document.querySelector(".form"),l=document.querySelector(".gallery"),r=document.querySelector(".loader"),i=document.querySelector(".button-load"),g=new v(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:500});let d=null,c=null;i.addEventListener("click",L);y.addEventListener("submit",b);async function b(a){try{if(a.preventDefault(),d=1,l.innerHTML="",c=a.target.elements.js_input.value.trim(),c===""){i.classList.remove("is-visible");return}r.classList.add("is-visible"),i.classList.remove("is-visible");const e=await m(c,d);if(e.data.hits.length===0){r.classList.remove("is-visible"),p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l.innerHTML="";return}if(r.classList.remove("is-visible"),l.innerHTML=f(e.data.hits),g.refresh(),e.data.totalHits<=e.config.params.page*e.config.params.per_page){r.classList.remove("is-visible"),p.info({message:"We are sorry, but you have reached the end of search results.",position:"topRight"});return}i.classList.add("is-visible")}catch(e){console.log(e)}}async function L(a){const o=document.querySelector(".gallery-item").getBoundingClientRect().height*2;d++,i.classList.remove("is-visible"),r.classList.add("is-visible");const s=await m(c,d);l.insertAdjacentHTML("beforeend",f(s.data.hits)),g.refresh(),window.scrollBy({top:o,behavior:"smooth"}),r.classList.remove("is-visible"),i.classList.add("is-visible"),s.data.totalHits<=s.config.params.page*s.config.params.per_page&&(i.classList.remove("is-visible"),p.info({message:"We are sorry, but you have reached the end of search results.",position:"topRight"}))}
//# sourceMappingURL=commonHelpers.js.map
