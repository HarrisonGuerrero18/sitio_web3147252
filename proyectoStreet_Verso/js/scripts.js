const frases = [
  '“Tu outfit, tu manifiesto urbano.”',
  '“Rap es protesta, estilo y alma.”',
  '“El rencor es el mundo donde vivo.”',
  '“El estilo no se copia, se vive en cada paso que das.”',
  '“Viste como piensas, expresa lo que sientes.”',
  '“Una mentira y cuestiono todas tus verdades.”',
  '“Admirable es el que muere por sus ideales. Respetable es aquel hombre que respetó a sus similares.”',
  '“El llanto reina y el mañana es rojo y me preocupo al pensar que verán mis hijos al abrir los ojos.”',
  '“Un pueblo calla, una injusticia se comete.”',
  '“No es solo música, es una forma de resistencia.”',
];

let index = 0;
const fraseTexto = document.getElementById("frase-texto");

setInterval(() => {
  index = (index + 1) % frases.length;
  fraseTexto.textContent = frases[index];
}, 5000);

const productos = [
  {
    img: "img/gorra.jpeg",
    titulo: "Gorra Snapback - Black Flow",
  },
  {
    img: "img/sudadera.webp",
    titulo: 'Sudadera Oversize "Street King"',
  },
  {
    img: "img/zapatillas.jpeg",
    titulo: "Zapatillas Graff City",
  },
  {
    img: "img/camiseta1.jpg",
    titulo: 'Camiseta "Boom Bap"',
  },
  {
    img: "img/camiseta2.jpg",
    titulo: 'Camiseta "All We Need Is Love"'
  },
  {
    img: "img/hoodie1.webp",
    titulo: 'Hoodie "Graffiti Soul"',
  },

  
];

let currentIndex = 0;

function mostrarProductos(index) {
  const imagen = document.getElementById("producto-imagen");
  const titulo = document.getElementById("producto-titulo");
  imagen.src = productos[index].img;
  imagen.alt = productos[index].titulo;
  titulo.textContent = productos[index].titulo;
}

function mostrarSiguienteProducto() {
  currentIndex = (currentIndex + 1) % productos.length;
  mostrarProductos(currentIndex);
}

function mostrarAnteriorProducto() {
  currentIndex = (currentIndex - 1 + productos.length) % productos.length;
  mostrarProductos(currentIndex);
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarProductos(currentIndex);

  setInterval(() => {
    mostrarSiguienteProducto();
  }, 5000);
});
