// script.js
// Referencias a elementos del DOM
const imageUrlInput = document.getElementById("image-url");
const addImageBtn = document.getElementById("add-image");
const deleteImageBtn = document.getElementById("delete-image");
const gallery = document.getElementById("gallery");

let selectedImage = null;

// Función para crear una nueva imagen
function createImageElement(url) {
  const img = document.createElement("img");
  img.src = url;
  img.alt = "Imagen de la galería";

  // Evento para seleccionar imagen
  img.addEventListener("click", () => {
    if (selectedImage) {
      selectedImage.classList.remove("selected");
    }
    selectedImage = img;
    img.classList.add("selected");
  });

  return img;
}

// Evento para agregar imagen
addImageBtn.addEventListener("click", () => {
  const url = imageUrlInput.value.trim();
  if (url) {
    const img = createImageElement(url);
    gallery.appendChild(img);
    imageUrlInput.value = "";
  }
});

// Evento para eliminar la imagen seleccionada
deleteImageBtn.addEventListener("click", () => {
  if (selectedImage) {
    gallery.removeChild(selectedImage);
    selectedImage = null;
  }
});

// Permitir agregar imagen presionando Enter
imageUrlInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addImageBtn.click();
  }
});
