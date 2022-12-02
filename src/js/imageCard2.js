const iconsBox = document.querySelector('[data-icons]').children;
const icon = {
  like: iconsBox[0].children[0].href.baseVal,
  bubble: iconsBox[1].children[0].href.baseVal,
  download: iconsBox[2].children[0].href.baseVal,
  view: iconsBox[3].children[0].href.baseVal,
};

export function createImageMarkup(images) {
  const markup = images
    .map(image => {
      const {
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = image;
      return `
		<a href="${largeImageURL}">
		<div class="photo-card">
  <img src=${webformatURL} alt="${tags}" loading="lazy" width="400" height="250" />
  <div class="info">
    <p class="info-item">
      <svg class="info-icon">
				<use href="${icon.like}"></use>
				</svg>
			Likes: ${likes}
    </p>
    <p class="info-item">
      <svg class="info-icon">
							<use href="${icon.view}"></use>
						</svg>
		${views}
    </p>
    <p class="info-item">
      <svg class="info-icon">
							<use href="${icon.bubble}"></use>
						</svg>
		${comments}
    </p>
    <p class="info-item">
      <svg class="info-icon">
							<use href="${icon.download}"></use>
						</svg>
		${downloads}
    </p>
  </div>
</div>
</a>
	`;
    })
    .join('');

  return markup;
}
