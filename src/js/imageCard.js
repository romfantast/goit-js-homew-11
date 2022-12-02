export function createImageMarkup(images) {
  const markup = images
    .map(image => {
      const { webformatURL, tags, likes, views, comments, downloads } = image;
      return `
		<div class="photo-card">
  <img src=${webformatURL} alt="${tags}" loading="lazy" width="400" height="250" />
  <div class="info">
    <p class="info-item">
      <svg class="info-icon">
				<use href="./sprite.9a0dfbc9.svg#icon-like"></use>
				</svg>
			Likes: ${likes}
    </p>
    <p class="info-item">
      <svg class="info-icon">
							<use href="/sprite.9a0dfbc9.svg#icon-view"></use>
						</svg>
		${views}
    </p>
    <p class="info-item">
      <svg class="info-icon">
							<use href="/sprite.9a0dfbc9.svg#icon-bubble"></use>
						</svg>
		${comments}
    </p>
    <p class="info-item">
      <svg class="info-icon">
							<use href="/sprite.9a0dfbc9.svg#icon-download"></use>
						</svg>
		${downloads}
    </p>
  </div>
</div>
	`;
    })
    .join('');

  return markup;
}
