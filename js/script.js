/**
 * Lógica de Landing - Codeus
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Acordeón: Solo uno abierto a la vez
    const details = document.querySelectorAll("details");
    details.forEach((targetDetail) => {
        targetDetail.addEventListener("click", () => {
            details.forEach((detail) => {
                if (detail !== targetDetail) detail.removeAttribute("open");
            });
        });
    });

    // 2. Menú hamburguesa (mobile)
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
        });
        // Cerrar al hacer click en enlace
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => mobileMenu.classList.remove('open'));
        });
    }

    // 3. Sectores: Tab interactivo
    const sectorBtns = document.querySelectorAll('.sector-btn');
    const sectorPanels = document.querySelectorAll('.sector-panel');
    sectorBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const idx = btn.dataset.sector;
            sectorBtns.forEach(b => b.classList.remove('active'));
            sectorPanels.forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            sectorPanels[idx]?.classList.add('active');
        });
    });

    // 4. Seguridad: Prevenir copiado de imágenes
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('contextmenu', (e) => e.preventDefault());
    });

    // 5. Smooth Scroll: Logo → inicio
    const logoLink = document.querySelector('.logo a');
    if (logoLink && logoLink.getAttribute('href') === '#inicio') {
        logoLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 6. Header activo al hacer scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }
    });

    console.log("Codeus SORN — Landing cargada.");
});
