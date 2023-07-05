const accessKey = 'bzyvsbf2u95MjSiX2iIfg1EdNU8YS_ZaHihjwNv2TTs'; // Reemplaza con tu clave de acceso

// Función para crear elementos de imagen y agregarlos a la galería
function addImageToGallery(imageUrl) {
  const gallery = document.getElementById('gallery');

  const imageContainer = document.createElement('div');
  imageContainer.className = 'image';

  const imageElement = document.createElement('img');
  imageElement.src = imageUrl;

  imageContainer.appendChild(imageElement);
  gallery.appendChild(imageContainer);
}

// Función para realizar la solicitud a la API
async function getPastaImages() {
  const query = 'pasta'; // Palabra clave de búsqueda, en este caso 'pasta'

  const apiUrl = `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Procesa y muestra los datos
    const images = data.results.map(result => result.urls.regular);
    images.forEach(imageUrl => {
      addImageToGallery(imageUrl);
    });
  } catch (error) {
    console.log('Ha ocurrido un error:', error);
  }
}

// Llama a la función para obtener las imágenes de pasta
getPastaImages();