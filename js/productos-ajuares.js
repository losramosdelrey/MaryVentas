// 1. Generar las 50 tarjetas de producto con un bucle
        // (mucho más práctico que escribir 50 bloques de HTML a mano;
        // si mañana cambian el ícono o el formato, se cambia en un solo lugar)
        const boxIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l9-4 9 4-9 4-9-4z"/><path d="M3 7v10l9 4 9-4V7"/><path d="M12 11v10"/></svg>';

        // Ruta donde se encuentran las imágenes reales de los productos de Ajuares
        const imgBasePath = '../images/banners/catalogo/productos-ajuares/';

        // Imágenes reales disponibles (archivo + nombre legible para mostrar)
        const productImages = [
            { file: 'cojin_decorativo.webp', name: 'Cojín decorativo' },
            { file: 'cortina_con_argolla.webp', name: 'Cortina con argolla' },
            { file: 'cortina_con_estampado.webp', name: 'Cortina con estampado' },
            { file: 'cortina_de_blackout_estampado_foil.webp', name: 'Cortina de blackout estampado Foil' },
            { file: 'cortina_de_blackout_estampado_foil_blue.webp', name: 'Cortina de blackout estampado Foil azul' },
            { file: 'cortina_opaca_aislante_140_x_280_cm_alba_verde_romero.webp', name: 'Cortina opaca aislante 140 x 280 cm Alba Verde Romero' },
            { file: 'juego_de_funda_nordica_de_saten_100%_algodon_gris_plateado.webp', name: 'Juego de funda nórdica de satén 100% algodón gris plateado' },
            { file: 'juego_de_toallas_en_colores_100_x_120_cm.webp', name: 'Juego de toallas en colores 100 x 120 cm' },
            { file: 'juego_de_toallas_en_colores_versa_100_x_120_cm.webp', name: 'Juego de toallas en colores Versa 100 x 120 cm' },
            { file: 'toalla_de_bano_muval_140_x_70_cm.webp', name: 'Toalla de baño Muval 140 x 70 cm' },
            { file: 'toalla_de_sauna_orgánica_de_80x200_cm_azul_aguamarina.webp', name: 'Toalla de sauna orgánica 80x200 cm azul aguamarina' },
            { file: 'toalla_gris_original_100x120_cm.webp', name: 'Toalla gris original 100x120 cm' },
            { file: 'toalla_sophie_muva.webp', name: 'Toalla Sophie Muva' }
        ];

        const productGrid = document.getElementById('productGrid');
        let cardsHTML = '';

        for (let i = 1; i <= 50; i++) {
            const imgData = productImages[i - 1]; // las primeras 13 tarjetas usan foto real
            let bannerHTML;
            let label;

            if (imgData) {
                const encodedFile = encodeURIComponent(imgData.file).replace(/%2F/g, '/');
                bannerHTML = `<img src="${imgBasePath}${encodedFile}" alt="${imgData.name}" loading="lazy" style="width:100%;height:100%;object-fit:cover;">`;
                label = imgData.name;
            } else {
                bannerHTML = boxIcon;
                label = `Producto ${i}`;
            }

            cardsHTML += `
                <div class="product-card">
                    <span class="product-number">#${i}</span>
                    <div class="product-banner">${bannerHTML}</div>
                    <div class="product-info">
                        <p>${label}: <span class="price">$0.00 USD</span></p>
                    </div>
                </div>
            `;
        }

        productGrid.innerHTML = cardsHTML;

        // 2. Control del Menú Móvil (igual que en index.html)
        function toggleMenu() {
            const navMenu = document.getElementById('navMenu');
            navMenu.classList.toggle('active');
        }

        function closeMenu() {
            const navMenu = document.getElementById('navMenu');
            navMenu.classList.remove('active');
        }

        // 3. Animación de aparición al hacer scroll (igual que en index.html)
        document.addEventListener("DOMContentLoaded", function() {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const fadeElements = document.querySelectorAll('.fade-in');
            fadeElements.forEach(el => observer.observe(el));
        });
