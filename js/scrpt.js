
//Animación e interactividad de la galeria
const nombresOriginales = ["Firulay", "Laika", "Roco", "Daisy", "Rocky", "Tronco", "Nada", "Coco", 
                           "Simba", "Scooby", "Bella", "Fred", "Bruno", "Sonia", "Rojo", "Romeo", 
                           "Masha", "Guardian", "Capitan"];

let nombresDisponibles = [...nombresOriginales];

function generarNombre() {

    if (nombresDisponibles.length === 0) {
        nombresDisponibles = [...nombresOriginales];
    }

    let indiceAleatorio = Math.floor(Math.random() * nombresDisponibles.length);
    let nombreSeleccionado = nombresDisponibles.splice(indiceAleatorio, 1)[0];

    document.getElementById("nombre-aleatorio").innerHTML = `🐕 ${nombreSeleccionado} 🐈`;
}

function iniciarContador() {
    let contador = 1;
    let intervalo = setInterval(() => {
        document.getElementById("contador-nombres").innerText = contador;
        if (contador >= 980) {
            clearInterval(intervalo);
        }
        contador++;
    }, 20);
}

window.onload = iniciarContador;





//Animación e interactividad detalles
document.addEventListener("DOMContentLoaded", function () {

    const images = document.querySelectorAll('.open-modal');

    images.forEach(image => {
      image.addEventListener('click', function (event) {
   
        const imgSrc = event.target.getAttribute('data-img');
        const imgDesc = event.target.getAttribute('data-desc');
        const imgAuthor = event.target.getAttribute('data-author');
        
        const modalImage = document.getElementById('modalImage');
        const modalDescription = document.getElementById('modalDescription');
        const modalAuthor = document.getElementById('modalAuthor');
        
        modalImage.src = 'img/' + imgSrc;
        modalDescription.textContent = imgDesc;
        modalAuthor.textContent = imgAuthor;
      });
    });
  });





//Animación e interactividad formulario
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let isValid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    document.querySelectorAll(".error-message").forEach(el => el.textContent = "");

    if (!/^[a-zA-ZÁáÉéÍíÓóÚúÑñ\s]+$/.test(name.value.trim())) {
        name.nextElementSibling.textContent = "El nombre debe contener solo letras.";
        isValid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        email.nextElementSibling.textContent = "Ingrese un correo válido.";
        isValid = false;
    }

    if (message.value.trim().length < 25) {
        message.nextElementSibling.textContent = "El mensaje debe tener minimo 15 caracteres.";
        isValid = false;
    }

    if (isValid) {
        alert("Formulario se envío con éxito.");
        this.submit();
    }
});  



  


