const formulario = document.getElementById('formulario');
const passwordInput = document.getElementById('contraseña');
const mensaje = document.getElementById('mensaje');

formulario.addEventListener('submit', function (event) {
    if (passwordInput.value.length < 8) {
        event.preventDefault();
        mensaje.style.display = 'block';
    } else {
        mensaje.style.display = 'none';
    }
})

const titulo = document.getElementById('bienvenida'); 

setInterval(() => {
    titulo.style.visibility = titulo.style.visibility === 'hidden' ? 'visible' : 'hidden';
}, 500);
