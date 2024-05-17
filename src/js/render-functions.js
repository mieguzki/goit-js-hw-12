export function renderElements(images) {
  return images
    .map(img => {
      return `<li class="gallery-item">
  <a href="${img.largeImageURL}"
    ><img src="${img.webformatURL}" alt="${img.tags}" class="photo"
  /></a>
  <div class="gallery-item-container">
<div class="label-container"><span class="label">Likes</span><span class="value">${img.likes}</span></div>
    <div class="label-container"><span class="label">Views</span><span class="value">${img.views}</span></div>
    <div class="label-container"><span class="label">Comments</span><span class="value">${img.comments}</span></div>
    <div class="label-container"><span class="label">Downloads</span><span class="value">${img.downloads}</span></div>
  </div>
</li>`;
    })
    .join('');
}