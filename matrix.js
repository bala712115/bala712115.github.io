// matrix.js

// Sélection du canvas et définition du contexte 2D
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Définition des dimensions du canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Caractères utilisés dans l'effet
const matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%';
const fontSize = 16;
const columns = canvas.width / fontSize; // Nombre de colonnes pour les gouttes

// Tableau pour stocker la position des gouttes
let drops = [];

// Initialisation des gouttes
for (let x = 0; x < columns; x++) {
    drops[x] = canvas.height; // Commence au bas du canvas
}

// Fonction principale pour dessiner l'effet
function draw() {
    // Fond semi-transparent pour créer un effet de traînée
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Style du texte
    ctx.fillStyle = '#0F0'; // Vert Matrix
    ctx.font = fontSize + 'px monospace';

    // Boucle sur les gouttes
    for (let i = 0; i < drops.length; i++) {
        // Choisir un caractère aléatoire
        const text = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));

        // Afficher le caractère à la position x et y
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Réinitialiser la goutte aléatoirement après qu'elle ait dépassé l'écran
        if (drops[i] * fontSize < 0 && Math.random() > 0.975) {
            drops[i] = canvas.height / fontSize;
        }

        // Décrémenter la position Y pour faire tomber la goutte
        drops[i]--;
    }
}

// Exécuter la fonction draw toutes les 50 millisecondes
setInterval(draw, 50);

// Ajuster le canvas si la fenêtre est redimensionnée
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
