# 💌 Carta Interactiva

Proyecto de carta digital interactiva.  
Incluye animaciones y opción de añadir música personalizada.

## 🌐 Demo
[Ver demo en GitHub Pages](https://alex17dev.github.io/Carta)

## ⚒️ Stack
- HTML  
- CSS  
- JavaScript  

## ✨ Features
- Animaciones con CSS  
- Interactividad con JS  
- Opción para agregar audio (mp3/wav) desde carpeta local  

## ▶️ Uso
1. Abrí `index.html` en el navegador o visitá la demo.
2. Interactuá con los botones/acciones para ver las animaciones.
3. (Opcional) Activá la música con el control de reproducción.

## 🎵 Agregar tu propia música
1. Copiá tu archivo de audio a la carpeta `/assets/` (ej.: `assets/musica.mp3`).
2. En `index.html`, actualizá la ruta del `<audio>`:
   ```html
   <audio id="bg-audio" src="assets/musica.mp3" preload="auto"></audio>
