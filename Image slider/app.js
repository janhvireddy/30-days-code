const slider = document.querySelector(".slider");
const dotsContainer = document.querySelector(".dotsContainer");

async function fetchListOfImages() {
  try {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=1&limit=10"
    );
    const ImagesList = await response.json();
    if (ImagesList && ImagesList.length > 0) displayImages(ImagesList);
  } catch (error) {
    console.log(error);
  }
}
function displayImages(getImagesList) {
  slider.innerHTML = getImagesList
    .map(
      (image) =>
        `<div class="slide">
      <img src=${image.download_url} alt=${image.url}></img>
    </div>`
    )
    .join(" ");

  dotsContainer.innerHTML = getImagesList.map(
    (image, index) =>
      `  <span class="dot ${
        index === 0 ? "active" : ""
      }" data-slide=${index}></span>`
  );
}
fetchListOfImages();
