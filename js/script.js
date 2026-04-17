/**
 * Lógica de Landing - Codeus
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Manejo de Acordeón (Solo uno abierto a la vez)
    const details = document.querySelectorAll("details");
    details.forEach((targetDetail) => {
        targetDetail.addEventListener("click", () => {
            details.forEach((detail) => {
                if (detail !== targetDetail) {
                    detail.removeAttribute("open");
                }
            });
        });
    });

    // 2. Seguridad: Prevenir copiado de imágenes
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('contextmenu', (e) => e.preventDefault());
    });

    console.log("Landing de Codeus cargada con éxito.");
});