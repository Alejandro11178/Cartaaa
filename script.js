function showLetter() {
    const letter = document.getElementById("letter");
    const flap = document.querySelector(".flap");
    flap.style.transform = "rotateX(180deg)";
    
    setTimeout(() => {
        letter.style.visibility = "visible";
        letter.classList.add('show');
    }, 500); // Espera a que la solapa termine de girar
}

window.onload = () => {
    const welcome = document.getElementById("welcome");
    const envelope = document.getElementById("envelope");

    // Espera 3 segundos y oculta la pantalla de bienvenida
    setTimeout(() => {
        welcome.style.opacity = 0;

        // Después de 1s (cuando termina la transición), muestra el sobre
        setTimeout(() => {
            welcome.style.display = "none";
            envelope.style.display = "block";
        }, 1000);
    }, 3000);
};


