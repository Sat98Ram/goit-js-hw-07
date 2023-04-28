import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryItem = galleryItems.map((item) => {
  return `<li class="gallery-item">
  <a class="gallery-link" href="${item.original}"><img 
      class="gallery__image"
      src="${item.preview}" 
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`;
});

gallery.insertAdjacentHTML("beforeend", galleryItem.join(""));

gallery.addEventListener("click", getBigImage);

function getBigImage(event) {
  event.preventDefault();
  if (event.target.tagName !== `IMG`) {
    return;
  }

  event.target.classList.add(`modal`);

  const onEscapeClose = (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  };

  const instance = basicLightbox.create(
    `
   <img   class="gallery__image"
   src="${event.target.dataset.source}"
      >`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", onEscapeClose);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", onEscapeClose);
      },
    }
  );

  instance.show();
}

// document.addEventListener("keydown", function (e) {
//   if (e.keyCode === 27) document.getElementById("modal_id").hidden = 1;
// });

// $(".modal").modal({ backdrop: "static", keyboard: false });

// function closeEsc(event) {
//   if (event.code !== "Escape") {
//     return;
//   }
//   instance.close();
// }
